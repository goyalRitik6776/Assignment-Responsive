import { useState } from "react";
import CountryCard from "../components/country-card";

const ContainerForm = () => {
  const [toggle,setToggle] = useState(true);
  return (
    <div className=" flex flex-col items-start justify-start text-left text-base text-gray-7001 font-text-sm-medium1 py-0 px-4 gap-[20px] self-stretch lg:flex-row">
            {/* Heading  */}

            <div className=" w-[280px] flex flex-col items-start justify-start lg:w-1/4">
              <div className="leading-[20px] font-medium">
                Profile
              </div>
              <div className="leading-[20px] text-gray-6001">
                Update your portfolio and bio.
              </div>
            </div>
            {/* Form  */}
            <div className="rounded-xl bg-base-white1 shadow-[0px_1px_3px_rgba(16,_24,_40,_0.1),_0px_1px_2px_rgba(16,_24,_40,_0.06)] flex flex-col items-start justify-start border-[1px] border-solid border-gray-200 self-stretch lg:w-3/4">
              {/* Inner Container  */}
              <div className="flex flex-col py-5 px-4 items-start justify-start gap-[24px] self-stretch">
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className={`rounded-xl bg-[#F2F4F7] w-9 h-5 flex flex-row p-0.5 box-border items-center ${toggle && `justify-end bg-[#7F56D9]`} ${!toggle && `hover:bg-gray-200`}`}>
                    <span className="bg-white w-[18px] h-[18px] rounded-full cursor-pointer" onClick={()=>{setToggle(!toggle)}}></span>
                  </div>


                  <div className="flex-1 flex flex-col items-start justify-start">
                    <div className="leading-[20px] font-medium">
                      Available for projects
                    </div>
                    <div className="leading-[20px] text-gray-6001">
                      I’m open and available for freelance work.
                    </div>
                  </div>
                </div>
                {/* USERNAME  */}
                  <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative leading-[20px] font-medium">
                      Username
                    </div>
                    <div className="self-stretch rounded-lg bg-base-white1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-start justify-start text-lg text-gray-6001 border-[1px] border-solid border-gray-3001">
                      <div className="rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg flex flex-row py-2.5 pr-3 pl-3.5 items-center justify-start">
                        <div className="relative leading-[24px]">untitledui.com/</div>
                      </div>
                      <input className="self-stretch rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none w-full bg-white py-2.5 px-3.5 gap-[8px] text-gray-900 border-[1px] border-solid border-gray-300 leading-[24px] font-medium font-text-sm-medium1 text-[15px] focus:outline-none" type="text" defaultValue="Olivia" placeholder="Username"/>
                    </div>
                  </div>
                  {/* WEBSITE  */}
                <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
                    <div className="relative leading-[20px] font-medium">
                      Website
                    </div>
                    <div className="self-stretch rounded-lg bg-base-white1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] flex flex-row items-start justify-start text-lg text-gray-6001 border-[1px] border-solid border-gray-3001">
                      <div className="rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg flex flex-row py-2.5 pr-3 pl-3.5 items-center justify-start">
                        <div className="relative leading-[24px]">http://</div>
                      </div>
                      <input className="self-stretch rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none w-full bg-white py-2.5 px-3.5 gap-[8px] text-gray-900 border-[1px] border-solid border-gray-300 leading-[24px] font-medium font-text-sm-medium1 text-[15px] focus:outline-none" type="text" defaultValue="www.untitledui.com" placeholder="Website"/>
                    </div>
                </div>
                {/* DESCRIPTION  */}
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px] ">
                  {/* Description Container  */}
                  <div className="self-stretch h-[180px] shrink-0 flex flex-col items-start justify-start gap-[6px] ">
                    <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[6px]">
                      <div className="relative leading-[20px] font-medium">
                        Description
                      </div>
                      <div className="self-stretch flex-1 rounded-lg bg-base-white1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-3 px-3.5 items-start justify-start text-lg text-gray-9001 border-[1px] border-solid border-gray-3001">
                        <div className="self-stretch flex-1 relative leading-[24px]">
                          <p className="[margin-block-start:0] [margin-block-end:16px]">
                            I'm a Product Designer based in Melbourne,
                            Australia. I specialise in UX/UI design, brand
                            strategy, and Webflow development.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* 275 characters left  */}
                    <div className="relative leading-[20px] text-gray-6001">
                      275 characters left
                    </div>
                  </div>
                  {/* Font style conatiner  */}
                  <div className="self-stretch h-20 shrink-0 flex flex-col items-start justify-start gap-[8px] lg:flex-row lg:h-11">
                        <div className="self-stretch rounded-lg bg-base-white1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start gap-[8px] text-lg text-gray-9001 border-[1px] border-solid border-gray-3001 lg:w-1/4">
                          <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
                            <div className="relative leading-[24px] font-medium">
                              Regular
                            </div>
                          </div>
                          <img
                            className="relative w-5 h-5 shrink-0 overflow-hidden"
                            alt=""
                            src="../assets/arrow-down.svg"
                          />
                        </div>
                    <div className="self-stretch flex flex-row items-start justify-start gap-[2px] lg:items-center">
                      <img
                        className="rounded-md w-7 h-7 cursor-pointer"
                        alt=""
                        src="../assets/font-style-bold.svg"
                      />
                      <img
                        className="rounded-md w-7 h-7 cursor-pointer"
                        alt=""
                        src="../assets/font-style-italic.svg"
                      />
                      <img
                        className="rounded-md w-7 h-7 cursor-pointer"
                        alt=""
                        src="../assets/font-style-link.svg"
                      />
                      <img
                        className="rounded-md w-7 h-7 cursor-pointer"
                        alt=""
                        src="../assets/font-style-bullet1.svg"
                      />
                      <img
                        className="rounded-md w-7 h-7 cursor-pointer"
                        alt=""
                        src="../assets/font-style-bullet2.svg"
                      />
                    </div>
                  </div>
                </div>
                <CountryCard
                  label="Country"
                  aU="../assets/australia.svg"
                  text="Australia"
                  supportingText=""
                  propDisplay="none"
                />
                <CountryCard
                  label="Timezone"
                  aU="../assets/clock.svg"
                  text="PST"
                  supportingText="UTC−08:00"
                  propDisplay="inline-block"
                />
              </div>
              <div className="self-stretch flex flex-col pt-0 px-0 pb-3 items-center justify-start gap-[12px] text-gray-6001">
                <div className="h-0.5 w-full bg-[#EAECF0]"></div>
                <div className="self-stretch flex flex-row py-0 px-4 items-center justify-end gap-[16px]">
                  <div className="flex-1 flex flex-row items-center justify-end gap-[12px]">
                    <div className="rounded-lg bg-base-white1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-4 items-center justify-center gap-[8px] text-gray-7001 border-[1px] border-solid border-gray-3001 cursor-pointer transition ease-in duration-200 hover:bg-[#F9FAFB]">
                      <div className="relative leading-[20px] font-semibold">
                        Cancel
                      </div>
                    </div>
                    <div className="rounded-lg bg-primary-6001 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-4 items-center justify-center gap-[8px] text-base-white1 border-[1px] border-solid border-primary-6001 cursor-pointer transition ease-in duration-200 hover:bg-[#6941C6] ">
                      <div className="relative leading-[20px] font-semibold">
                        Save changes
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </div>
  );
};

export default ContainerForm;
