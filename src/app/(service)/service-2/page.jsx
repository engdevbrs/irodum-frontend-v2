import Breadcumb3 from "@/components/breadcumb/Breadcumb3";
import Breadcumb4 from "@/components/breadcumb/Breadcumb4";

import Listing2 from "@/components/section/Listing2";
import TabSection1 from "@/components/section/TabSection1";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Service 2",
};

export default function page() {
  return (
    <>
    
      <TabSection1 />
      <Breadcumb3 path={["Inicio", "Servicios", "Todo"]} />
      <Breadcumb4 />
      <Listing2 />
    </>
  );
}
