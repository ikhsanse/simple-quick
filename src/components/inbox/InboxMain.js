import React, { useContext } from "react";
import InboxList from "./InboxList";
import InboxChat from "./chats/InboxChat";
import inboxData from "../../data/inboxList.json";
import InboxContext from "../../data/inbox-context";


const InboxMain = (props) => {
  const inboxCtx = useContext(InboxContext)
  
  return (
    <>
      {inboxCtx.chatStatus ? <InboxChat closeInbox={props.closeInbox} /> : <InboxList listInbox={inboxData}/>}
    </>
  );
};

export default InboxMain;
