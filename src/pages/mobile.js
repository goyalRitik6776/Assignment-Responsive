import Header from "../components/header";
import PageHeaderContainer from "../components/page-header-container";
import PersonalInfoContainer from "../components/personal-info-container";
import ContainerForm from "../components/container-form";

const Mobile = () => {
  return (
    <div className="relative bg-gray-25 w-full overflow-hidden flex flex-col items-start justify-start">
      <Header />
      <main className="self-stretch flex flex-col pt-0 px-0 pb-12 items-start justify-start gap-[32px]">
        <PageHeaderContainer />
        <PersonalInfoContainer />
        <ContainerForm />
      </main>
    </div>
  );
};

export default Mobile;
