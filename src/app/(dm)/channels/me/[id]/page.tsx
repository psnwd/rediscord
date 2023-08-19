import { delay } from "@/lib/utils";
import { GiCow } from "react-icons/gi";
import { User } from "@/lib/entities/user";
import Avatar from "@/components/ui/avatar";
import Divider from "@/components/ui/divider";
import { MOCK_DELAY, generateRandomFakeUsers } from "@/lib/utils/mock";
import { Page, PageContent, PageHeader } from "@/components/layout/page";

const getData = async (id: string): Promise<{ user: User }> => {
  /*
   * Generate fake user for testing
   */
  const user: User = generateRandomFakeUsers(1)[0];
  user.id = id;

  await delay(MOCK_DELAY);
  return { user };
};

export default async function ChannelPage({
  params,
}: {
  params: { id: string };
}) {
  const { user } = await getData(params.id);
  return (
    <Page>
      <PageHeader>
        <div className="flex items-center gap-4">
          <div className="flex flex-none items-center gap-3 text-sm font-semibold">
            <Avatar
              size="sm"
              src={user.avatar}
              alt="ewqwqe"
              status={user.status}
            />
            {user.name}
          </div>
          <Divider vertical />
          <div className="text-xs text-gray-400">{user.username}</div>
        </div>
      </PageHeader>
      <PageContent>
        <span className="text-sm text-gray-300">Currently working here...</span>{" "}
        <GiCow fontSize={42} className="mt-2 animate-bounce" />
      </PageContent>
    </Page>
  );
}
