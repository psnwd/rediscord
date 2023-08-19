import { Suspense } from "react";
import DMLayoutSkeleton from "@/components/islets/dm-layout/dm-layout-skeleton";
import SettingsLayout from "@/components/islets/settings-layout";

export const revalidate = 0;

export default function SuspendedDMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<DMLayoutSkeleton>{children}</DMLayoutSkeleton>}>
      <SettingsLayout>{children}</SettingsLayout>
    </Suspense>
  );
}
