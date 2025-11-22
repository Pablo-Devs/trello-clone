import Sidebar from "../layouts/Sidebar";

export default async function SidebarWrapper() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/workspace/types`, {
    cache: "force-cache",
  });

  const { workspaceTypes } = await res.json();

  return <Sidebar workspaceTypes={workspaceTypes ?? []} />;
}
