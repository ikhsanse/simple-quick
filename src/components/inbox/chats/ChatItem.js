import React, { useEffect, useState } from "react";

const ChatItem = (props) => {
  const [bgColor, setbgColor] = useState();
  const [color, setColor] = useState();
  
  const participant = props.chat.participant;
  const [lastChat, setLastChat] = useState(false);

  useEffect(() => {
    if (participant === 1) {
      setbgColor("bg-[#FCEED3]");
      setColor("text-[#E5A443]");
    } else if (participant === 2) {
      setbgColor("bg-[#EEDCFF]");
      setColor("text-[#9B51E0]");
    } else if (participant === 3) {
      setbgColor("bg-[#D2F2EA]");
      setColor("text-[#43B78D]");
    } else {
      setbgColor("bg-[#F8F8F8]");
      setColor("text-[#2F80ED]");
    }
  }, [participant]);

  useEffect(() => {
    if (
      props.newChat.name === props.chat.name &&
      props.newChat.participant === props.chat.participant &&
      props.newChat.text === props.chat.text
    ) {
      setLastChat(true);
    } else {
      setLastChat(false);
    }
  }, [
    props.newChat.name,
    props.chat.name,
    props.newChat.participant,
    props.chat.participant,
    props.newChat.text,
    props.chat.text,
  ]);

  const openToolsHandler = (idx) => {
    props.openTools(idx)
  }
  return (
    <>
      {lastChat === true && props.chatNumberItem >3 ? (
        <fieldset className="border-t border-[#EB5757]">
          <legend className="mx-auto px-2 text-[14px] text-[#EB5757] 2xl:text-[16px]">
            New Message
          </legend>
        </fieldset>
      ) : (
        ""
      )}
      <li className="my-4">
        <div
          className={`flex w-full ${
            participant === 2 ? "justify-end" : "justify-start"
          }`}
        >
          <p className={`${color} font-bold text-[12px] 2xl:text-[14px]`}>
            {props.chat.name}
          </p>
        </div>
        <div
          className={`flex max-w-[80%] relative ${
            participant === 2 ? "justify-end left-[5.4rem]" : "justify-start"
          }`}
        >
          <div className="flex h-auto rounded">
            <span
              className={`${bgColor} text-[12px] 2xl:text-[14] justify-end p-2 rounded`}
            >
              {props.chat.text}
              <p className="text-[10px] 2xl:text-[12] pt-1">19:32</p>
            </span>
            <br />
          </div>
          <div
            className={`${participant === 2 ? "order-first" : "order-last"} relative`}
          >
            <p onClick={()=>openToolsHandler(props.index)} className="font-bold cursor-pointer self-start py-0 leading-[2px] mx-2">
              ...
            </p>
            <ul className={`${props.showTool === props.index ? 'block' : 'hidden'} divide-y-[1px] w-auto rounded border-[1px] bg-white absolute mt-2 text-[12px] 2xl:text-[14px]`}>
              <li className="cursor-pointer ml-1 pr-10" onClick={()=>openToolsHandler(undefined)}>
                <p className="text-[#2F80ED]">Edit</p>
              </li>
              <li className="ml-1" onClick={()=>openToolsHandler(undefined)} >
                <p className="text-[#EB5757] cursor-pointer">Delete</p>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </>
  );
};

export default ChatItem;
