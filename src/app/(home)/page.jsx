import Hero2 from "@/components/hero/Hero2";
import About1 from "@/components/section/About1";
import BrowserCategory1 from "@/components/section/BrowserCategory1";
import CounterInfo1 from "@/components/section/CounterInfo1";
import CtaBanner1 from "@/components/section/CtaBanner1";
import NeedSomething1 from "@/components/section/NeedSomething1";
import OurBlog1 from "@/components/section/OurBlog1";
import OurCta1 from "@/components/section/OurCta1";
import OurPartner1 from "@/components/section/OurPartner1";
import Testimonial1 from "@/components/section/Testimonial1";

export const metadata = {
  title: "Freeio - Freelance Marketplace React/Next Js Template | Home 1",
};

export default function page() {
  return (
    <>
      <Hero2 />
      <BrowserCategory1 />
      <About1 />
      <NeedSomething1 />
      <CtaBanner1 />
      <CounterInfo1 />
      <Testimonial1 />
      <OurPartner1 />
      <OurCta1 />
    </>
  );
}
