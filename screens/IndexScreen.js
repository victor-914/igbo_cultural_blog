import React from "react";
import Catergory from "../components/catergory/Catergory";
import CatergorySummary from "../components/catergorySummary/catergorySummary";
import Donate from "../components/donate/Donate";
import Footer from "../components/footer/Footer";
import HeroSection from "../components/heroSectionComponents/HeroSection";
import Logo from "../components/logo/Logo";
import Menu from "../components/menu/Menu";
import MostRead from "../components/mostRead/MostRead";
import NewsLetter from "../components/newsLetter/NewsLetter";
import SubHeroContainer from "../components/subHeroSectionComponents/SubHeroContainer";
import Videos from "../components/videos/Videos";

function IndexScreen() {
  return (
    <>
      <Logo />
      <HeroSection />
      {/* <SubHeroContainer /> */}
      <MostRead />
      {/* <Catergory /> */}
      <Videos />
      <CatergorySummary />
      <Donate />
      <NewsLetter />
    </>
  );
}

export default IndexScreen;
