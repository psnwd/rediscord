import { Message } from "@/lib/entities/message";
import { User } from "@/lib/entities/user";
import moment from "moment";
import Image from "next/image";
import React from "react";

type DMMessageProps = {
  user: User;
  messages: Message[];
};

function DMMessage({ user, messages }: DMMessageProps) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex">
        <div>
          <Image
            src={user.avatar ?? ""}
            className="rounded-full"
            alt="avatar"
            width={60}
            height={60}
          />
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div className="text-sm font-semibold">{user.name}</div>
            <div className="text-xs text-gray-400">
              {moment(messages[0].timestamp).format("MM/DD/YYYY h:mm A")}
            </div>
          </div>
          <div className="text-sm text-gray-400">{messages[0].message}</div>
        </div>
      </div>

      <div className="flex flex-col">
        {messages.map((message, i) => (
          <div key={message.id} className="flex items-center gap-1">
            <div className="invisible text-xs hover:visible">
              {moment(message.timestamp).local().format("h:mmA")}
            </div>
            <div className="text-sm text-gray-400">{message.message}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DMMessage;
