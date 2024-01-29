import AboutArea1 from "@/components/section/AboutArea1";
import Breadcumb1 from "@/components/breadcumb/Breadcumb1";
import CounterInfo1 from "@/components/section/CounterInfo1";
import CtaBanner1 from "@/components/section/CtaBanner1";
import OurFaq1 from "@/components/section/OurFaq1";
import OurFeature1 from "@/components/section/OurFeature1";
import OurTeam1 from "@/components/section/OurTeam1";


export const metadata = {
  title:
    "Freeio - Freelance Marketplace React/Next Js Template | Become seller",
};

export default function page() {
  return (
    <>
    
      <Breadcumb1
        title={"¡Únete a nuestro Marketplace de Oficios y haz que las cosas sucedan!"}
        brief={`🌍 Conectamos comunidades y construimos relaciones a través del intercambio de habilidades.`}
        isBtnActive={false}
      />
      <AboutArea1 />
      <OurFeature1 />
      <CtaBanner1 />
      {/* <CounterInfo1 /> */}
      {/* <OurTeam1 /> */}
      <OurFaq1 />
    </>
  );
}
