import HeroSection from "./ui/HeroSection";
import OurMissionSection from "./ui/OurMissionSection";
import OurValueSection from "./ui/OurValueSection";
import VisionSection from "./ui/VisionSection";

export default function PetStarsHome() {
  return (
    <div className="max-w-[1640px] mx-auto">
      <HeroSection />
      <OurValueSection />
      <OurMissionSection />
      <VisionSection />
    </div>
  );
}
