"use server";

import { createSupabaseServerClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createWorkspace(formData: FormData) {
  const name = (formData.get("name") as string | null)?.trim();
  const description = (formData.get("description") as string | null)?.trim();
  const typeId = (formData.get("type_id") as string | null) ?? null;

  if (!name) {
    throw new Error("Workspace name is required");
  }

  const supabase = await createSupabaseServerClient();

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    console.error("createWorkspace: no user", userError);
    redirect("/signin");
    return;
  }

  // Insert workspace then workspace_members (owner) — do sequentially
  const { data: workspaceData, error: insertWsError } = await supabase
    .from("workspaces")
    .insert({
      name,
      description,
      type_id: typeId,
      owner_id: user.id,
    })
    .select("id")
    .limit(1)
    .single();

  if (insertWsError) {
    console.error("createWorkspace -> insert workspace error:", insertWsError);
    throw new Error(insertWsError.message);
  }

  const workspaceId = workspaceData.id as string;

  const { error: memberError } = await supabase.from("workspace_members").insert({
    workspace_id: workspaceId,
    user_id: user.id,
    role: "owner",
  });

  if (memberError) {
    console.error("createWorkspace -> insert member error:", memberError);
    throw new Error(memberError.message);
  }

  revalidatePath("/boards");
  redirect(`/boards`);
}
