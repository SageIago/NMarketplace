import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/market")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <SidebarProvider>
      <div className="flex h-screen">
        <main className="w-full md:flex">
        <AppSidebar />
            <section className="flex flex-1 h-full">
            <Outlet />
            </section>
        </main>
      </div>
    </SidebarProvider>
  );
}
