import React, { useEffect, useState } from "react";
import Loading from "../ui/Loading";
import InboxItem from "./InboxItem";

const InboxList = (props) => {
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    setTimeout(() => {
      setIsloading(false);
    }, 500);
  }, []);

  console.log(isLoading)

  return (
    <div className="px-[32px] py-[24px]">
      <div className="relative w-full">
        <svg
          className="absolute right-[58px] top-[27%]"
          width="12"
          height="12"
          viewBox="0 0 32 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21.0804 18.9783H22.4434L31.0526 27.6047L28.4819 30.1754L19.8555 21.5662V20.2032L19.3896 19.7201C17.4228 21.4109 14.8694 22.4289 12.0916 22.4289C5.89781 22.4289 0.877197 17.4082 0.877197 11.2144C0.877197 5.02061 5.89781 0 12.0916 0C18.2854 0 23.3061 5.02061 23.3061 11.2144C23.3061 13.9922 22.2881 16.5456 20.5973 18.5124L21.0804 18.9783ZM4.32774 11.2145C4.32774 15.5104 7.79558 18.9783 12.0916 18.9783C16.3876 18.9783 19.8554 15.5104 19.8554 11.2145C19.8554 6.91846 16.3876 3.45062 12.0916 3.45062C7.79558 3.45062 4.32774 6.91846 4.32774 11.2145Z"
            fill="black"
          />
        </svg>

        <input
          type="text"
          name=""
          placeholder="Search"
          className="w-full h-[31px] font-lato pl-[58px] border-[1px] border-gray-three rounded focus:ring-0 focus:outline-0"
          id=""
        />
      </div>
      {isLoading ? <Loading text="Loading Chat..."/> : <ul className="style-none list-inbox mt-5">
        {props.listInbox.map((item) => (
          <InboxItem
            key={item.id}
            id={item.id}
            title={item.title}
            participants={item.participants}
            inbox={item.inbox}
          />
        ))}
      </ul>}
      
    </div>
  );
};

export default InboxList;
