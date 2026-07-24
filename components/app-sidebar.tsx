import type * as React from "react";
import { Suspense } from "react";
import { Sidebar, SidebarContent, SidebarRail } from "@/components/ui/sidebar";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        <Suspense fallback={<div>Loading...</div>}>
          <div>Chat</div>
        </Suspense>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
