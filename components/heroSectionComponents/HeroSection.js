import React from "react";
import StyledHeroSection from "./HeroSection.styles";
import Image from "next/image";
import ancestorImg from "../../assets/ancestors.jpg";
import dada from "../../assets/dada.jpg";

function HeroSection() {
  return (
    <StyledHeroSection>
      <main className="mainContentContainer">
        <div className="mainHeroContent">
          <div className="mainHeroContentImg">
            {" "}
            <Image
              src={ancestorImg}
              id="service_demo_img"
              layout="responsive"
              alt="heroBanner"
              priority="true"
            />
          </div>
          <header className="catergoryNameContainer">
            <main className="catergoryName">Odinaana</main>
          </header>

          <div className="mainTitle">
            Ancestral Veneration In Igbo Spirituality. Ndi Iche
          </div>
          <div className="subMainTitle">
            Unfortunately, in most African countries especially Nigeria,
            ancestral veneration has been classified as demon worship.
          </div>
        </div>
        <div className="sideHeroContent">
          <main className="sideHeroMainContent">
            <div className="sideHeroMainContentImg">
              <Image
                src={dada}
                id="service_demo_img"
                layout="responsive"
                alt="heroBanner"
                priority="true"
              />
            </div>
            <header className="catergoryNameContainer">
              <main className="catergoryName">Spirituality</main>
            </header>
            <div className="sideHeroMainContentTextContainer">
              <main className="sideHeroMainContentMainText">Grandma! Dada</main>
              <aside className="sideHeroMainContentSubText">
                Our lives as Ndi-Igbo are shrouded in mysteries, and these
                mysteries define us and our identity as Umu Anyawu…
              </aside>
            </div>
          </main>
          {/* --------------------------------------- */}
          <aside className="sideHeroSubContent">
            <header className="catergoryNameContainer">
              <main className="catergoryName">Odinaala</main>
            </header>
            <main className="sideHeroMainContentMainText">
              Osu- A Review From An Ancestral Perspective.
            </main>
            <aside className="sideHeroMainContentSubText">
              In my rebel years, I was greatly perturbed by the Osu- caste
              system which was prevalent within Eastern Nigeria. I…
            </aside>
          </aside>
        </div>

        {/* ------------------------------------------ */}
        <div className="asideCarousel">
          <header className="asideCarouselHeader">Trending</header>
          <div className="sideHeroSubContentImg">
            <Image
              src={ancestorImg}
              id="service_demo_img"
              layout="responsive"
              alt="heroBanner"
              priority="true"
            />
            <div className="sideHeroSubContentAccessoryContainer"></div>
          </div>
          <div className="carouselController">
            <button>{"<"}</button>
            <button>{">"}</button>
          </div>
        </div>
      </main>
    </StyledHeroSection>
  );
}

export default HeroSection;
