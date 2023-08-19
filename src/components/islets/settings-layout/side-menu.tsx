import { SettingsNavItems } from "@/types";
import React from "react";

export interface SettingsSidebarNavProps {
  items: SettingsNavItems[];
}

function SettingsSideMenu({ items }: SettingsSidebarNavProps) {
  return (
    <>
      {items?.map((item) => (
        <>
          <div></div>
        </>
      ))}
    </>
  );
}

export default SettingsSideMenu;
