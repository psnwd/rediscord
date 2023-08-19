import { Suspense } from "react";
import DMLayoutSkeleton from "@/components/islets/dm-layout/dm-layout-skeleton";
import DMLayout from "@/components/islets/dm-layout";
import CommonLayout from "@/components/layout/common-layout";

export const revalidate = 0;

export default function SuspendedDMLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense fallback={<DMLayoutSkeleton>{children}</DMLayoutSkeleton>}>
      <CommonLayout />
      <DMLayout>{children}</DMLayout>
    </Suspense>
  );
}
