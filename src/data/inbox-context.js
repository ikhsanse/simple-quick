import React, { createContext, useEffect, useState } from "react";

const InboxContext = createContext({
  chatStatus: false,
  chats: {},
});
export const InboxContextProvider = (props) => {
  const [chats, setChats] = useState({
    participants: "",
    title: "",
    inbox: [],
  });
  const [status, setStatus] = useState(false);

  // const getChat = async(id) => {
  //     const response = await fetch(`https://dummyjson.com/posts/${id}/comments`)
  //     const jsonResponse = await response.json()
  //     setChats(jsonResponse.comments)
  // }

  const addChat = (items) => {
    // console.log(items)
    setChats(items);
  };

  useEffect(() => {
    if (chats.inbox.length !== 0) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [chats]);

  const closeChat = () => {
    setChats({participants: "",
    title: "",
    inbox: []});
  };

  const context = {
    chats: chats,
    chatStatus: status,
    closeChat,
    addChat,
    // getChat
  };

  return (
    <InboxContext.Provider value={context}>
      {props.children}
    </InboxContext.Provider>
  );
};

export default InboxContext;
