import FriendListSkeleton from "@/components/islets/friend-list/friend-list-skeleton";
import {
  Page,
  PageContent,
  PageHeaderSkeleton,
} from "@/components/layout/page";

export default function Loading() {
  return (
    <Page>
      <PageHeaderSkeleton />
      <PageContent>
        <FriendListSkeleton />
      </PageContent>
    </Page>
  );
}
