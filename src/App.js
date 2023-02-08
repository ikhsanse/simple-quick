import { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import InboxMain from "./components/inbox/InboxMain";
import Menu from "./components/Menu";
import TodosMain from "./components/todos/TodosMain";
import MenuBox from "./components/ui/MenuBox";
import { InboxContextProvider } from "./data/inbox-context";


function App() {
  document.title = "Simpe Quick"
  const [openMenu, setOpenMenu] = useState(false);
  const [inboxShow, setInboxShow] = useState(false);
  const [taskShow, setTaskShow] = useState(false);
  const [showHideBolt, setShowHideBolt] = useState("");

  const menuBoltHandler = () => {
    setOpenMenu(!openMenu);
    if (!openMenu) {
      setInboxShow(false);
      setTaskShow(false);
    }
  };

  const menuInboxHandler = () => {
    setInboxShow(!inboxShow);
  };

  const menuTaskHandler = () => {
    setTaskShow(!taskShow);
  };

  const closeInbox = () => {
    setInboxShow(false)
  }

  useEffect(() => {
    if (inboxShow && taskShow) {
      setOpenMenu(false);
      setTaskShow(false);
      setInboxShow(false);
      setShowHideBolt("block");
    } else if (inboxShow && taskShow === false) {
      setOpenMenu(true);
      setShowHideBolt("hidden");
    } else if (inboxShow === false && taskShow) {
      setOpenMenu(true);
      setShowHideBolt("hidden");
    } else if (!inboxShow && !taskShow) {
      setShowHideBolt("block");
    }
  }, [inboxShow, taskShow]);

  return (
    <div className="bg-home h-screen">
      <Home />
      <div className="fixed right-[34px] bottom-0">
        <Menu
          menuBoltHandler={menuBoltHandler}
          menuTaskHandler={menuTaskHandler}
          menuInboxHandler={menuInboxHandler}
          openMenu={openMenu}
          inboxShow={inboxShow}
          taskShow={taskShow}
          showHideBolt={showHideBolt}
        />
      </div>
      {inboxShow && (
        <MenuBox>
          <InboxContextProvider>
            <InboxMain closeInbox={closeInbox} />
          </InboxContextProvider>
        </MenuBox>
      )}
      {taskShow && (
        <MenuBox>
            <TodosMain />
        </MenuBox>
      )}
    </div>
  );
}

export default App;
