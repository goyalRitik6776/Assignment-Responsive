import { useMemo } from "react";

const CountryCard = ({ label, aU, text, supportingText, propDisplay }) => {
  const supportingTextStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-base text-gray-7001 font-text-sm-medium1">
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
        <div className="relative leading-[20px] font-medium">{label}</div>
        <div className="self-stretch rounded-lg bg-base-white1 shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row py-2.5 px-3.5 items-center justify-start gap-[8px] text-lg text-gray-9001 border-[1px] border-solid border-gray-3001">
          <div className="flex-1 flex flex-row items-center justify-start gap-[8px]">
            <img
              className="relative w-5 h-5 shrink-0 overflow-hidden"
              alt=""
              src={aU}
            />
            <div className="relative leading-[24px] font-medium">{text}</div>
            <div
              className="relative leading-[24px] text-gray-6001 hidden"
              style={supportingTextStyle}
            >
              {supportingText}
            </div>
          </div>
          <img
            className="relative w-5 h-5 shrink-0 overflow-hidden"
            alt=""
            src="../assets/arrow-down.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
