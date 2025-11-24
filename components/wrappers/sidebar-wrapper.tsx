import Sidebar from "../layouts/Sidebar";

export default async function SidebarWrapper() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SITE_URL}/api/workspace/types`,
      {
        cache: "force-cache",
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch workspace types");
    }

    const { workspaceTypes } = await res.json();

    return <Sidebar workspaceTypes={workspaceTypes ?? []} />;
  } catch (error) {
    console.error("Error loading workspace types:", error);
    return <Sidebar workspaceTypes={[]} />;
  }
}
