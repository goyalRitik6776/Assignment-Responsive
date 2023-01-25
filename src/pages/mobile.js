import Header from "../components/header";
import PageHeaderContainer from "../components/page-header-container";
import PersonalInfoContainer from "../components/personal-info-container";
import ProfileContainer from "../components/profile-container";
import Sidebar from "../components/sidebar";

const Mobile = () => {
  return (
  
    <div className="flex">
       <Sidebar />

       <div className="relative bg-gray-25 w-full overflow-hidden flex flex-col items-start justify-start">
      <Header />
      <main className="self-stretch flex flex-col pt-0 px-0 pb-12 items-start justify-start gap-[32px]">
        <PageHeaderContainer />
        <PersonalInfoContainer />
        <div className="h-0.5 w-full bg-[#EAECF0]"></div>
        <ProfileContainer />
      </main>
    </div>

    </div>
  );
};

export default Mobile;
