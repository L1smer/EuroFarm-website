import { sora } from "../lib/fonts";
import Image from "next/image";
import AboutUsSection from "../ui/about/AboutUsSection";
import IntroSection from "../ui/IntroSection";

export default function AboutPage() {
  return (
    <>
      <IntroSection heading="Про Нас" background="/awp/awp-about-intro.jpg"/>
      <AboutUsSection />
    </>
  );
}
