import React, { useContext, useEffect, useRef, useState } from "react";
import InboxContext from "../../../data/inbox-context";
import ChatList from "./ChatList";

const InboxChat = (props) => {
  const myRef = useRef();
  const [scrollTop, setScrollTop] = useState(0);
  const [newChatStatus, setNewChatStatus] = useState(false);
  const inboxCtx = useContext(InboxContext);
  const participants = inboxCtx.chats.participants;
  const title = inboxCtx.chats.title;
  const inbox = inboxCtx.chats.inbox;

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
              onClick={props.closeInbox}
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
        className={`px-[29px] overflow-y-auto ${participants === 2 ? 'h-[73%]' : 'h-[75%]'} 2xl:h-[80%]`}
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
        ) : (
          ""
        )}

        {inbox.map((item, idx) => (
          <ChatList
            key={idx}
            chats={item.chats}
            inbox={inbox}
            date={item.date}
          />
        ))}
      </div>
      <div className="px-[29px] absolute w-full botom-0">
        {participants === 2 ? <div className="flex w-12/12 bg-[#E9F3FF] p-2 rounded">
          <svg
            className="w-[16px] h-inherit ml-1 mr-3 text-gray-200 animate-spin dark:text-gray-600 fill-[#2F80ED]"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <p className="h-inherit self-center text-[12px]">
          Please wait while we connect you with one of our team ...
          </p>
        </div> : ''}
        
        <div className={`w-full ${participants === 2 ? 'mt-1' : 'mt-3'} flex 2xl:mt-5 font-lato`}>
          <input
            placeholder="Type a new message"
            type="text"
            className="w-full 2xl:w-11/12 mr-2 text-[12px] 2xl:text-[14px] h-[30px] 2xl:h-[40px] rounded"
            name=""
            id=""
          />
          <button className="px-2 rounded text-[12px] font-bold bg-bolt text-white">
            Send
          </button>
        </div>
      </div>
    </>
  );
};

export default InboxChat;
