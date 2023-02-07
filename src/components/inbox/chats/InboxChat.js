import React, { useContext, useEffect, useRef, useState } from "react";
import InboxContext from "../../../data/inbox-context";
import ChatList from "./ChatList";

const InboxChat = () => {
  const myRef = useRef();
  const [scrollTop, setScrollTop] = useState(0);
  const [chatNumber, setChatNumber] = useState([])
  const [newChatStatus, setNewChatStatus] = useState(false);
  const inboxCtx = useContext(InboxContext);
  const participants = inboxCtx.chats.participants;
  const title = inboxCtx.chats.title;
  const inbox = inboxCtx.chats.inbox;
  // console.log(inbox)

  const closeChat = () => {
    inboxCtx.closeChat();
  };
  const onScroll = () => {
    setScrollTop(myRef.current.scrollTop);
  };
  useEffect(() => {
    onScroll();
  }, [setScrollTop]);

  const scrollBottom = () => {
    myRef.current.scroll({
      top: 700,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (window.innerWidth >= 1920 && scrollTop < 290) {
      setNewChatStatus(true);
    } else if (window.innerWidth <= 1440 && scrollTop < 520) {
      setNewChatStatus(true);
    } else setNewChatStatus(false);
  }, [scrollTop]);
  return (
    <>
      <div className="px-[29px] py-[15px] border-b-[1px] border-[#BDBDBD]">
        <div className="flex h-auto w-full relative">
          <div className="h-inherit self-center">
            <svg
              onClick={closeChat}
              className="w-[12px] h-[12px] 2xl:w-[16px] 2xl:h-[16px] cursor-pointer"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
                fill="#333333"
              />
            </svg>
          </div>
          <div className="h-auto ml-4 leading-4">
            <p className="font-bold text-[12px] 2xl:text-[16px] primary pr-4">
              {title}
            </p>

            <p
              className={`${
                participants >= 3 ? "block" : "hidden"
              } text-[10px] 2xl:text-[14px] text-[#333333]`}
            >
              {participants} Participants
            </p>
          </div>
          <div className="h-inherit self-center absolute right-0">
            <svg
              onClick={closeChat}
              className="w-[12px] h-[12px] 2xl:w-[16px] 2xl:h-[16px] cursor-pointer"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                fill="#333333"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        ref={myRef}
        onScroll={onScroll}
        className="px-[29px] overflow-y-auto h-[75%] 2xl:h-[80%]"
      >
        {newChatStatus && inbox.length > 1 ? (
          <div
            onClick={scrollBottom}
            className="flex absolute bottom-[15%] right-[42%] z-[9999] bg-[#E9F3FF] px-2 py-1 rounded cursor-pointer"
          >
            <p className="text-[12px] 2xl:text-[16px] text-[#2F80ED]">
              New Message
            </p>
            <div className="h-inherit self-center ml-1">
              <svg
                className="w-[12px] h-[12px] fill-[white]"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.1652 5.99999L10.2252 5.05999L6.49853 8.77999V0.666656H5.1652V8.77999L1.4452 5.05332L0.498535 5.99999L5.83187 11.3333L11.1652 5.99999Z" />
              </svg>
            </div>
          </div>
        ) : ''}

        {inbox.map((item, idx) => (
          <ChatList
            key={idx}
            chats={item.chats}
            inbox={inbox}
            date={item.date}
          />
        ))}
      </div>

      <div className="w-full flex px-[29px] mt-3 2xl:mt-5 font-lato">
        <input placeholder="Type a new message" type="text" className="w-5/6 2xl:w-11/12 text-[12px] 2xl:text-[14px] h-[30px] 2xl:h-[40px] rounded" name="" id="" />
        <button className="ml-3 px-2 rounded text-[12px] font-bold bg-bolt text-white">Send</button>
      </div>
    </>
  );
};

export default InboxChat;
