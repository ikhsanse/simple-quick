import React, { useState } from "react";
import ChatItem from "./ChatItem";

const ChatList = (props) => {
  const lastInbox = props.inbox[props.inbox?.length - 1];
  const chatInbox = lastInbox?.chats;
  const lastChat = chatInbox[chatInbox?.length - 1];
  const [showTool, setShowTool] = useState();

  const chatNumberItem = props.chats.length;

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date(props.date);
  const dateString =
    month[date.getUTCMonth()] +
    " " +
    date.getUTCDate() +
    ", " +
    date.getUTCFullYear();

  const openTools = (idx) => {
    setShowTool(idx)
  }

  return (
    <div className="relative font-lato">
      <fieldset className="border-t border-slate-300">
        <legend className="mx-auto px-2 text-[14px] 2xl:text-[16px]">
          {dateString}
        </legend>
      </fieldset>
      <ul className="style-none">
        {props.chats.map((item, idx) => (
          <ChatItem
            key={idx}
            index={idx}
            chat={item}
            chatNumberItem={chatNumberItem}
            newChat={lastChat}
            showTool={showTool}
            openTools={openTools}
          />
        ))}
      </ul>
    </div>
  );
};

export default ChatList;
