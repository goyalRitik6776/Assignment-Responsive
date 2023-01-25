import React, { useState } from "react";
import SettingCard from "../components/setting-card"
const Sidebar = () => {

  const [open,setOpen] = useState(false);
  const fn = ()=>{
    setOpen(!open);
    // console.log(open);
  }

  return (
      <aside className="h-[100vh] sticky top-0 items-start justify-start hidden md:flex">
        {/* LEFT  */}
        <div className="h-[100vh] flex flex-col justify-between items-start w-[81px] border-[1px] border-solid border-gray-300 border-t-0 border-b-0 border-l-0" onClick={fn}>
          <div className="pt-8 gap-8 flex flex-col items-start">
            <div className="px-6 h-[32px]">
              <img
                className="w-8 h-8 p-0 cursor-pointer"
                src="../assets/header-1.svg"
                alt=""
              />
            </div>
            <div className="px-4 gap-2">
              <img
                className=" w-12 h-12 cursor-pointer"
                src="../assets/sidebar-1.svg"
                alt=""
              />
              <img
                className=" w-12 h-12 cursor-pointer"
                src="../assets/sidebar-2.svg"
                alt=""
              />
              <img
                className=" w-12 h-12 cursor-pointer"
                src="../assets/sidebar-3.svg"
                alt=""
              />
              <img
                className=" w-12 h-12 cursor-pointer"
                src="../assets/sidebar-4.svg"
                alt=""
              />
              <img
                className=" w-12 h-12 cursor-pointer"
                src="../assets/sidebar-5.svg"
                alt=""
              />
              <img
                className=" w-12 h-12 cursor-pointer"
                src="../assets/sidebar-6.svg"
                alt=""
              />
            </div>
          </div>
          <div className="px-4 pb-6 gap-6 flex flex-col items-start">
            <div className="flex flex-col items-start gap-2 p-0">
            <img
                className=" w-12 h-12 cursor-pointer"
                src="../assets/sidebar-7.svg"
                alt=""
              />
              <img
                className=" w-12 h-12 cursor-pointer"
                src="../assets/sidebar-8.svg"
                alt=""
              />
                <img
                className=" w-12 h-12 cursor-pointer"
                src="../assets/sidebar-avatar.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* RIGHT  */}
        <div className={`h-[100vh] flex-col justify-between items-start w-[281px] p-0 border-[1px] border-solid border-gray-300 border-t-0 border-b-0 border-l-0 hidden ${open && `md:flex`}`}>
            {/* UPPER  */}
            <div className="flex flex-col items-start pt-9 px-4 gap-4">
                <div className="leading-6 font-text-sm-medium1 font-medium text-lg text-gray-900">Settings</div>
                {/* Andar Ka Dabba  */}
                <div className="flex flex-col items-start p-0 gap-1 ">
                    <SettingCard 
                     link="../assets/settings-1.svg"
                     text="My Details"
                    />
                    <div className="flex items-center bg-gray-50 relative rounded-md">
                    <SettingCard 
                     link="../assets/settings-2.svg"
                     text="Profile"
                    />
                    <div className="w-[22px] h-[22px] bg-[#F2F4F7] py-[2px] px-[8px] rounded-2xl text-center absolute right-4 font-text-sm-medium1 font-medium text-sm leading-[18px] text-[#344054] pt-1 cursor-pointer">10</div>
                    </div>
                    <SettingCard 
                     link="../assets/settings-3.svg"
                     text="Password"
                    />
                    <SettingCard 
                     link="../assets/settings-4.svg"
                     text="Team"
                    />
                    <SettingCard 
                     link="../assets/settings-5.svg"
                     text="Billing"
                    />
                    <SettingCard 
                     link="../assets/settings-6.svg"
                     text="Notifications"
                    />
                    <SettingCard 
                     link="../assets/settings-7.svg"
                     text="Integrations"
                    />
                </div>
            </div>
            {/* LOWER  */}
            <div className=" flex items-start pt-0 pr-12 pb-6 pl-5 gap-12 ">
              <div className="flex flex-col items-start p-0 h-10">
                <span className="h-5 font-text-sm-medium1 text-base font-medium leading-5 text-[#101828]">Olivia Rhye</span>
                <span className="h-5 font-text-sm-medium1 text-base font-normal leading-5 text-[#475467]">olivia@untitledui.com</span>
              </div>
              <div className="flex items-center justify-center p-2 pt-0 gap-2 w-9 h-9 rounded-lg cursor-pointer">
                <img className="" src="../assets/settings-8.svg" alt="" />
              </div>
            </div>
        </div>
      </aside>
  );
};

export default Sidebar;
