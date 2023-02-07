import React from "react";
import bolt from "../icons/bolt-icon.svg";

const Menu = (props) => {

  return (
    <>
      <div className="flex h-auto item-stretch">
        <div className={`flex item-center shrink-0 flex-col  ${props.taskShow ? 'order-last' : 'order-first'}`}>
        <div className={`${props.openMenu ? 'translate-x-0 ease-in duration-300' : 'translate-x-[11rem] ease-in duration-300'} ${props.taskShow ? 'pb-[27px]' : 'pb-[30px]'} w-full h-full text-center self-center ml-[26px] `}>
          <p className={`${props.openMenu ? 'opacity-1' : 'opacity-0'} ${props.taskShow ? 'opacity-0 z-[-10]' : 'opacity-1'} gray-six font-bold mb-[13px] font-lato ease-in duration-300`}>Task</p>
          <div className="relative">
            <div className={`absolute ml-[0.8rem] inset-0 ${props.taskShow ? 'w-[68px] h-[68px] -translate-x-4' :'w-[60px] h-[60px] translate-x-0' }  bg-home-input rounded-full z-9 ease-in duration-300`}>
            </div>
          <button className={`${props.taskShow ? 'bg-task-true w-[68px] h-[68px] ' : 'bg-menu-false  w-[60px] h-[60px]'} relative rounded-full z-10 ease-in duration-300`} onClick={props.menuTaskHandler}>
            <svg
              className="mx-auto w-[24px] h-[18px]"
              width="26"
              height="20" 
              viewBox="0 0 26 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.11114 0.666748H23.1111C24.3334 0.666748 25.3334 1.66675 25.3334 2.88897V17.3334C25.3334 18.5556 24.3334 19.5556 23.1111 19.5556H3.11114C1.88892 19.5556 0.888916 18.5556 0.888916 17.3334V2.88897C0.888916 1.66675 1.88892 0.666748 3.11114 0.666748ZM3.11114 2.88897V17.3334H12V2.88897H3.11114ZM23.1111 17.3334H14.2222V2.88897H23.1111V17.3334ZM22 6.77786H15.3334V8.44453H22V6.77786ZM15.3334 9.55564H22V11.2223H15.3334V9.55564ZM22 12.3334H15.3334V14.0001H22V12.3334Z"
                fill={`${props.taskShow ? 'white': '#F8B76B'}`}
              />
            </svg>
          </button>
          </div>
        </div>
        </div>
        <div className="flex flex-col item-center shrink-0">
        <div className={`${props.openMenu ? 'translate-x-0' : 'translate-x-[5.5rem]'} ${props.inboxShow ? 'pb-[27px]' : 'pb-[31px]'} w-full h-full text-center self-center ml-[26px] ease-in duration-300`}>
          <p className={`${props.openMenu ? 'opacity-1' : 'opacity-0'} ${props.inboxShow ? 'opacity-0 z-[-10]' : 'opacity-1'} gray-six font-bold mb-[13px] font-lato ease-in duration-300`}>Inbox</p>
          <div className="relative">
            <div className={`absolute ml-[0.8rem] inset-0 ${props.inboxShow ? 'w-[68px] h-[68px] -translate-x-4' :'w-[60px] h-[60px] translate-x-0' }  bg-home-input rounded-full z-9 ease-in duration-300`}>
            </div>
          <button className={`${props.inboxShow ? 'bg-inbox-true  w-[68px] h-[68px]' : 'bg-menu-false w-[60px] h-[60px]'} relative z-10 rounded-full ease-in duration-300` } onClick={props.menuInboxHandler}>
            <svg
              className="mx-auto w-[24px] h-[18px]"
              width="26"
              height="20"
              viewBox="0 0 26 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0371 0.926147H1.66671C0.974114 0.926147 0.407448 1.49281 0.407448 2.18541V19.815L5.44448 14.778H18.0371C18.7297 14.778 19.2963 14.2113 19.2963 13.5187V2.18541C19.2963 1.49281 18.7297 0.926147 18.0371 0.926147ZM16.7778 3.44458V12.2594H4.39931L3.65635 13.0024L2.92598 13.7327V3.44458H16.7778ZM21.8149 5.96321H24.3334C25.026 5.96321 25.5926 6.52987 25.5926 7.22247V26.1114L20.5556 21.0743H6.70374C6.01115 21.0743 5.44448 20.5077 5.44448 19.8151V17.2965H21.8149V5.96321Z"
                fill={`${props.inboxShow ? 'white' : '#8885FF'}`}
              />
            </svg>
          </button>
          </div>
        </div>
        </div>
        <div className={`w-full h-full self-center ml-[26px] relative z-[9999] ${props.showHideBolt}`}>
          <button className="w-[68px] bg-bolt h-[68px] align-center rounded-full" onClick={props.menuBoltHandler}>
            <img src={bolt} alt="" className="mx-auto w-[18px] h-[32px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Menu;
