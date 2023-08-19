export interface SettingsNavSubItem {
  title: string;
  path: string;
}

export interface SettingsNavItem {
  id: string;
  title: string;
  disabled?: boolean;
  sub?: SettingsNavSubItem[];
}

export interface SettingsNavItemWithChildren extends SettingsNavItem {
  items: SettingsNavItemWithChildren[];
}

export type SettingsNavItems = SettingsNavItemWithChildren;
