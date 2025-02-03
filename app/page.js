import AboutComponent from "@/components/AboutComponent";
import CatalogSwiperSection from "@/components/CatalogSwiperSection";
import CatalogueSection from "@/components/CatalogueSection";
import CompanySection from "@/components/CompanySection";
import ContactSection from "@/components/ContactSection";
import HeroSection from "@/components/HeroSection";
import HomeCatalogSwiperSection from "@/components/HomeCatalogSwiperSection";
import HomeContactSection from "@/components/HomeContactSection";
import HomeProjects from "@/components/HomeProjects";
import OurProcess from "@/components/OurProcess";


export default function Home() {
  return (
    <>
      <HomeCatalogSwiperSection/>
      <HeroSection />
      <CompanySection />
      <AboutComponent />
      <HomeContactSection/>
      <OurProcess/>
      <CatalogueSection />
      <CatalogSwiperSection />
      <HomeProjects/>
      <ContactSection />
    </>
  );
}
