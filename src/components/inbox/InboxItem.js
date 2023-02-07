import React, { useContext } from "react";
import InboxContext from "../../data/inbox-context";


const InboxItem = (props) => {
  const inboxCtx = useContext(InboxContext)
  // console.log(props.participants)

  const addChat = () => {
    const items = {
      title: props.title,
      participants: props.participants,
      inbox: props.inbox
    }
    inboxCtx.addChat(items)
  }
  // console.log(props.inbox)
  
  let iconChat;

  const lastInbox = props.inbox[props.inbox.length - 1];
  const chatsInbox = lastInbox.chats;
  const lastChat = chatsInbox[chatsInbox.length - 1];
  const date = new Date(lastChat.time);
  const dateString = date.getUTCDate() +"/"+ (date.getUTCMonth()+1) +"/"+ date.getUTCFullYear() + " " + date.getUTCHours() + ":" + date.getUTCMinutes();

  if (props.participants >= 3) {
    iconChat = (
      <div className="flex">
        <div className="w-[32px] h-[32px] grid bg-gray-five rounded-full content-center justify-items-center">
          <svg
            className="w-[12px] h-[12px] fill-[#4F4F4F]"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM7.5 3C7.5 2.175 6.825 1.5 6 1.5C5.175 1.5 4.5 2.175 4.5 3C4.5 3.825 5.175 4.5 6 4.5C6.825 4.5 7.5 3.825 7.5 3ZM10.5 10.5C10.35 9.9675 8.025 9 6 9C3.9825 9 1.6725 9.96 1.5 10.5H10.5ZM0 10.5C0 8.505 3.9975 7.5 6 7.5C8.0025 7.5 12 8.505 12 10.5V12H0V10.5Z" />
          </svg>
        </div>
        <div className="w-[32px] h-[32px] grid bg-bolt z-[3] -translate-x-[17px] rounded-full content-center justify-items-center">
          <svg
            className="w-[12px] h-[12px] fill-white"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6 0C4.3425 0 3 1.3425 3 3C3 4.6575 4.3425 6 6 6C7.6575 6 9 4.6575 9 3C9 1.3425 7.6575 0 6 0ZM7.5 3C7.5 2.175 6.825 1.5 6 1.5C5.175 1.5 4.5 2.175 4.5 3C4.5 3.825 5.175 4.5 6 4.5C6.825 4.5 7.5 3.825 7.5 3ZM10.5 10.5C10.35 9.9675 8.025 9 6 9C3.9825 9 1.6725 9.96 1.5 10.5H10.5ZM0 10.5C0 8.505 3.9975 7.5 6 7.5C8.0025 7.5 12 8.505 12 10.5V12H0V10.5Z" />
          </svg>
        </div>
      </div>
    );
  } else {
    iconChat = (
      <div className="flex px-2 mr-4">
        <div className="w-[32px] h-[32px] grid bg-bolt z-[3] rounded-full content-center justify-items-center">
          <span className="text-white font-bold font-lato">F</span>
        </div>
      </div>
    );
  }

  return (
    <li className="border-t-[1px] border-[#828282] pb-5 relative cursor-pointer" onClick={()=>addChat()}>
        <div className="absolute w-[5px] h-[5px] 2xl:w-[10px] 2xl:h-[10px] rounded-full unread-inbox right-2 bottom-5 2xl:bottom-3 hidden"></div>
        <div className="flex mt-3">
          {iconChat}
          <div className="font-lato leading-4">
            <div className="flex">
              <p className="font-bold text-[12px] 2xl:text-[16px] max-w-[250px] 2xl:max-w-[500px] primary">
                {props.title}
              </p>
              <p className="text-[10px] gray-two font-lato ml-3 leading-4">
                {dateString}
              </p>
            </div>
            <p
              className={`${
                props.participants >= 3 ? "block" : "hidden"
              } font-bold text-[10px] 2xl:text-[14px] gray-two`}
            >
               {lastChat?.name} :
            </p>
            <p className="text-[10px] gray-two leading-3">{lastChat?.text}</p>
          </div>
        </div>
    </li>
  );
};

export default InboxItem;
