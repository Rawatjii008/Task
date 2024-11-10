"use client";
import Events from "@/components/Events";
import ImageBioSection from "@/components/ImageBioSection";
import QuickLinks from "@/components/QuickLinks";
import Sectionpeople from "@/components/Sectionpeople";
import SocialAccountsProfileFrames from "@/components/SocialAccountsProfileFrames";
import Swiper from "@/components/Swiper";

export default function Home() {
  return (
    <div className=" gap-10 flex-col flex">
      <Swiper />
      <ImageBioSection />
      <Sectionpeople />
      <Events />
      <QuickLinks />
      <SocialAccountsProfileFrames />
    </div>
  );
}
