import Achievements from "@/components/sections/Achievements";
import Blog from "@/components/sections/Blog";
import Clients from "@/components/sections/Clients";
import Community from "@/components/sections/Community";
import CTA from "@/components/sections/CTA";
import FeatureTwo from "@/components/sections/FeatureTwo";
import Hero from "@/components/sections/Hero";
import Testimonial from "@/components/sections/Testimonial";
import Unlock from "@/components/sections/Unlock";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import pageData from "@/data/data.json";
import type { LandingPageData } from "@/types/landing";

const landingPageData = pageData as LandingPageData;

export default function Home() {
  return (
    <>
      <Navbar data={landingPageData.navbar} />
      <main>
        <Hero data={landingPageData.hero} />
        <Clients data={landingPageData.clients} />
        <Community data={landingPageData.community} />
        <Unlock data={landingPageData.featureOne} />
        <Achievements data={landingPageData.statistics} />
        <FeatureTwo data={landingPageData.featureTwo} />
        <Testimonial data={landingPageData.testimonial} />
        <Blog data={landingPageData.blog} />
        <CTA data={landingPageData.cta} />
      </main>
      <Footer data={landingPageData.footer} />
    </>
  );
}
