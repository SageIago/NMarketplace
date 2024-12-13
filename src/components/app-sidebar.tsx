import { SidebarLinks } from "@/constants";
import { Link , useLocation } from "@tanstack/react-router";
import {
  Sidebar,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import assets from "@/assets";

export function AppSidebar() {
  const location = useLocation()
  return (
    <Sidebar className="!text-white-100">
      <SidebarHeader className="mx-2 !mt-5 mr-3">
        <Link className="flex gap-2 text-white-100" to="/">
          <img src={assets.MarketPlaceLogo} alt="Logo" width={30} height={30} />
          <p className="font-mono text-[20px] font-bold leading-[26px]">
            NFT Marketplace
          </p>
        </Link>
      </SidebarHeader>
      <SidebarGroup className="mt-5">
        <SidebarGroupLabel className="font-serif text-[12px]">
          MarketPlace
        </SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {SidebarLinks.map((item) => {
              const isActive = location.pathname === item.to;
              return (
                <SidebarMenuItem
                  key={item.to}
                  className="flex justify-between gap-2"
                >
                  <SidebarMenuButton asChild>
                    <Link
                      to={item.to}
                      className={`px-5 py-6 gap-2 hover:bg-accent-100 ${isActive ? "bg-accent-100" : ""}`}
                    >
                      <item.icon />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </Sidebar>
  );
}
