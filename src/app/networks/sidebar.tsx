import {  getNetworks } from "@/api";
import { Sidebar } from "./sidebar-contents";

export async function SidebarContainer() {
  const networks = await getNetworks()

  return (
    <Sidebar networks={networks} />
  )
}

