const PageHeaderContainer = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-base text-gray-6001 font-text-sm-medium1">
      {/* Background Image  */}
        <div className="self-stretch relative h-40 shrink-0 overflow-hidden lg:h-60">
          <img
            className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-40 object-cover md:h-60"
            alt=""
            src="../assets/background.png"
          />
        </div>
        {/* Avatar and details  */}
        <div className="self-stretch flex flex-col justify-start items-start py-0 px-4 gap-[16px] mt-[-48px]  lg:flex lg:flex-row lg:items-center lg:justify-between lg:mt-[-40px]">
          <div className="self-stretch flex flex-col items-start justify-start relative gap-[24px] text-xl text-gray-9001 lg:flex lg:flex-row lg:items-center lg:justify-center">
            <img
              className="relative rounded-base w-32 h-32 shrink-0 z-[0] lg:w-44 lg:h-44"
              alt=""
              src="../assets/avatar-with-tick.svg"
            />
            <div className="self-stretch flex flex-col items-start justify-start gap-[4px] z-[1] -mt-5 lg:mt-14">
              <div className="self-stretch relative leading-[32px] font-semibold">
                Olivia Rhye
              </div>
              <div className="self-stretch relative text-lg leading-[24px] text-gray-6001">
                olivia@untitledui.com
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[12px] ">
            <button className="cursor-pointer py-2.5 px-4 bg-base-white1 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-gray-3001 transition ease-in duration-200 hover:bg-[#F9FAFB]">
              <img
                className="relative w-5 h-5 shrink-0"
                alt=""
                src="../assets/user-plus.svg"
              />
              <div className="relative text-base leading-[20px] font-semibold font-text-sm-medium1 text-gray-7001 text-left">
                Share
              </div>
            </button>
            <button className="cursor-pointer py-2.5 px-4 bg-primary-6001 rounded-lg shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-center justify-center gap-[8px] border-[1px] border-solid border-primary-6001 transition ease-in duration-200 hover:bg-[#6941C6]">
              <div className="relative text-base leading-[20px] font-semibold font-text-sm-medium1 text-base-white1 text-left">
                View profile
              </div>
            </button>
          </div>
        </div>
    </div>
  );
};

export default PageHeaderContainer;
