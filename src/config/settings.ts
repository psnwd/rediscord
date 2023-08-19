import { type SettingsNavItems } from "@/types";

export interface SettingsConfig {
  sidebarNav: SettingsNavItems[];
}

export const settingsList: SettingsConfig = {
  sidebarNav: [
    {
      id: "1",
      title: "User Settings",
      sub: [
        {
          title: "My Account",
          path: "/settings/my-account",
        },
        {
          title: "Profiles",
          path: "/settings/profiles",
        },
        {
          title: "Privacy & Safety",
          path: "/settings/privacy-safety",
        },
        {
          title: "Family Center",
          path: "/settings/family-center",
        },
        {
          title: "Authorized Apps",
          path: "/settings/authorized-apps",
        },
        {
          title: "Devices",
          path: "/settings/devices",
        },
        {
          title: "Connections",
          path: "/settings/connections",
        },
        {
          title: "Friend Requests",
          path: "/settings/friend-requests",
        },
      ],
      items: [],
    },
    {
      id: "2",
      title: "Bulling Settings",
      sub: [
        {
          title: "Nitro",
          path: "/settings/nitro",
        },
        {
          title: "Server Boost",
          path: "/settings/server-boost",
        },
        {
          title: "Subscriptions",
          path: "/settings/subscriptions",
        },
        {
          title: "Gift Inventory",
          path: "/settings/gift-inventory",
        },
        {
          title: "Billing",
          path: "/settings/billing",
        },
      ],
      items: [],
    },
    {
      id: "3",
      title: "App Settings",
      sub: [
        {
          title: "Appearance",
          path: "/settings/appearance",
        },
        {
          title: "Accessibility",
          path: "/settings/accessibility",
        },
        {
          title: "Voice & Video",
          path: "/settings/voice-video",
        },
        {
          title: "Voice & Video",
          path: "/settings/voice-video",
        },
        {
          title: "Text & Images",
          path: "/settings/text-images",
        },
        {
          title: "Notifications",
          path: "/settings/notifications",
        },
        {
          title: "Keybinds",
          path: "/settings/keybinds",
        },
        {
          title: "Language",
          path: "/settings/language",
        },
        {
          title: "Streamer Mode",
          path: "/settings/streamer-mode",
        },
        {
          title: "Advanced",
          path: "/settings/advanced",
        },
      ],
      items: [],
    },
    {
      id: "4",
      title: "Activity Settings",
      sub: [
        {
          title: "Activity Privacy",
          path: "/settings/activity-privacy",
        },
      ],
      items: [],
    },
    {
      id: "5",
      title: "",
      sub: [
        {
          title: "What's New",
          path: "/settings/whats-new",
        },
        {
          title: "HypeSquad",
          path: "/settings/hypesquad",
        },
      ],
      items: [],
    },
    {
      id: "6",
      title: "",
      sub: [
        {
          title: "Log Out",
          path: "/log-out",
        },
      ],
      items: [],
    },
  ],
};
