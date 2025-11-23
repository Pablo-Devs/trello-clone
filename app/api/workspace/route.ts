import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";
import { Workspace, WorkspaceMemberRow } from "@/types";

export async function GET() {
  try {
    const supabase = await createSupabaseServerClient();

    const {
      data: { user },
      error: userError,
    } = await supabase.auth.getUser();

    if (userError || !user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { data: ownedWorkspaces, error: ownedError } = await supabase
      .from("workspaces")
      .select(
        `
        *,
        workspace_types:type_id (*)
      `
      )
      .eq("owner_id", user.id)
      .overrideTypes<Workspace[], { merge: false }>();

    if (ownedError) throw ownedError;

    const { data: memberRows, error: memberError } = await supabase
      .from("workspace_members")
      .select(
        `
        role,
        workspaces(
          *,
          workspace_types:type_id (*)
        )
      `
      )
      .eq("user_id", user.id)
      .overrideTypes<WorkspaceMemberRow[], { merge: false }>();

    if (memberError) throw memberError;

    const invitedWorkspaces = memberRows.map((row) => ({
      ...row.workspaces,
      member_role: row.role,
    }));

    const merged = [
      ...ownedWorkspaces.map((w) => ({ ...w, member_role: "owner" })),
      ...invitedWorkspaces.filter(
        (inv) => !ownedWorkspaces.some((own) => own.id === inv.id)
      ),
    ];

    return NextResponse.json({ workspaces: merged });
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Server error" },
      { status: 500 }
    );
  }
}
