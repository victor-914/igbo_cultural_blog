import React from "react";
import StyledSubHeroContainer from "./SubHeroContainer.styles";
import ancestorImg from "../../assets/ancestors.jpg";
import ekw from "../../assets/ekwensu.jpg";
import beads from "../../assets/beads.jpeg";
import sac from "../../assets/sac.jpeg";
import ije from "../../assets/ije.jpg";

import Image from "next/image";
function SubHeroContainer() {
  return (
    <StyledSubHeroContainer>
      <div className="subContainer">
        <div className="subImg">
          {" "}
          <Image
            src={ekw}
            id="subHeroImg"
            layout="responsive"
            alt="heroBanner"
            priority="true"
          />
        </div>
        <header className="catergoryNameContainer">
          <main className="catergoryName">Odinaana</main>
        </header>

        <div className="subTextContainer">
          <header className="subHeaderTitle">
            {" "}
            Ekwensu In Igbo Spirituality Lies and Truths.
          </header>
          <main className="subHeaderSubTitle">
            {" "}
            “Ekwensu In Igbo Spirituality Lies and Truths” is the understanding
            of presiding events, which metamorphosed into to the...
          </main>
        </div>
      </div>
      <div className="subContainer">
        <div className="subImg">
          {" "}
          <Image
            src={beads}
            id="subHeroImg"
            layout="responsive"
            alt="heroBanner"
            priority="true"
          />
        </div>
        <header className="catergoryNameContainer">
          <main className="catergoryName">Igbo pre-colonial women</main>
        </header>

        <div className="subTextContainer">
          <header className="subHeaderTitle">
            Umuada In Igbo Spirituality And Cosmology.
          </header>
          <main className="subHeaderSubTitle">
            It’s a fact that feminism is not a borrowed construct in Igboland.
            As a people, we’ve always created political pathways,…
          </main>
        </div>
      </div>
      <div className="subContainer">
        <div className="subImg">
          {" "}
          <Image
            src={sac}
            id="subHeroImg"
            layout="responsive"
            alt="heroBanner"
            priority="true"
          />
        </div>
        <header className="catergoryNameContainer">
          <main className="catergoryName">Odinaana</main>
        </header>

        <div className="subTextContainer">
          <header className="subHeaderTitle">
            Sacrifice: The Importance of Blood Sacrifice In Igbo Spirituality.
          </header>
          <main className="subHeaderSubTitle">
            {" "}
            Within every structured and unstructured spirituality, have the
            concept of reciprocity on a universal level. The idea that to
            receive…
          </main>
        </div>
      </div>
      <div className="subContainer">
        <div className="subImg">
          {" "}
          <Image
            src={ije}
            id="subHeroImg"
            layout="responsive"
            alt="heroBanner"
            priority="true"
          />
        </div>
        <header className="catergoryNameContainer">
          <main className="catergoryName">Odinaana</main>
        </header>

        <div className="subTextContainer">
          <header className="subHeaderTitle">
            Mmanwu: A Sociological Insight on Igbo Masquerade
          </header>
          <main className="subHeaderSubTitle">
            {" "}
            From circling ant colonies as kids, waiting and hoping for that
            nerve-chilling moment of witnessing a masquerade emerge in a…
          </main>
        </div>
      </div>
    </StyledSubHeroContainer>
  );
}

export default SubHeroContainer;
