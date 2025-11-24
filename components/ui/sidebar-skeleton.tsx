import { Skeleton } from "./skeleton";

export function SidebarSkeleton() {
  return (
    <aside className="hidden md:flex md:w-60 lg:w-[300px] border-r border-border bg-background h-[calc(100vh-49px)] p-3">
      <div className="space-y-4 w-full">
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <Skeleton className="h-10 w-full" />
        <div className="h-px bg-border my-4" />
        <Skeleton className="h-4 w-24" />
        <Skeleton className="h-10 w-full" />
      </div>
    </aside>
  );
}
