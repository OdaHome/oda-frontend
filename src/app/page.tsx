// --- ui
import MaxWidthBox from "@/UI/MaxWidthBox";
// --- components
import HeroSection from "@/components/HomePage/HeroSection";
import Cities from "@/components/HomePage/Cities";
import RecentlyAdded from "@/components/HomePage/RecentlyAdded";
import LandLordsBanner from "@/components/HomePage/LandLordsBanner";



const HomePage = () => {
  return (
    <MaxWidthBox component='main' contentWrapper>
      <HeroSection />
      <Cities />
      <RecentlyAdded />
      <LandLordsBanner />
    </MaxWidthBox>
  );
}

export default HomePage;
