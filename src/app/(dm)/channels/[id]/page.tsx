import { delay } from "@/lib/utils";
import { User } from "@/lib/entities/user";
import Avatar from "@/components/ui/avatar";
import Divider from "@/components/ui/divider";
import {
  MOCK_DELAY,
  generateRandomFakeUsers,
  generateRandomMessage,
} from "@/lib/utils/mock";
import { Page, PageContent, PageHeader } from "@/components/layout/page";
import { BsPlusCircleFill } from "react-icons/bs";
import DMMessage from "@/components/islets/dm-message";
import { Message } from "@/lib/entities/message";

const getData = async (
  id: string,
): Promise<{ user: User; message: Message[] }> => {
  /*
   * Generate fake user for testing
   */
  const user: User = generateRandomFakeUsers(1)[0];
  user.id = id;

  const message: Message[] = generateRandomMessage(10);

  await delay(MOCK_DELAY);
  return { user, message };
};

export default async function ChannelPage({
  params,
}: {
  params: { id: string };
}) {
  const { user, message } = await getData(params.id);
  console.log(message);
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
        <div className="flex flex-col h-full">
          <DMMessage user={user} messages={message} />
        </div>
        <div className="bottom-0">
          <label
            htmlFor="message__input"
            className="relative block text-gray-400 focus-within:text-gray-600"
          >
            <BsPlusCircleFill className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform" />

            <input
              type="text"
              name="message__input"
              id="message__input"
              className="focus:b w-full rounded-lg border-0 bg-gray-900 py-2 pl-12 ring-0 focus:border-0 focus:outline-none focus:ring-0"
              placeholder={`Message @${user.name}`}
            />
          </label>
        </div>
      </PageContent>
    </Page>
  );
}
