import React from "react";
import StyledMostRead from "./MostRead.styles";
import Image from "next/image";
import ancestorImg from "../../assets/ancestors.jpg";
import ene from "../../assets/ene.jpeg";
import stool from "../../assets/stool.jpeg";
import g2022 from "../../assets/g2022.jpeg";
import iyi from "../../assets/iyi.jpeg";
import alusi from "../../assets/alusi.jpeg";
import osu from "../../assets/osu.jpg";

function MostRead() {
  return (
    <StyledMostRead>
      <main className="mostReadContainer">
        <header className="mostReadHeader">Most read by our Subscribers</header>
        <div className="mostRead">
          <div className="mostReadNumber">1</div>
          <div className="mostReadTextContainer">
            {" "}
            Ene-Opu: The Father Of Obioma.
          </div>
          <div className="mostReadImg">
            <Image
              src={ene}
              id="subHeroImg"
              layout="responsive"
              alt="heroBanner"
              priority="true"
            />
          </div>
        </div>
        <div className="mostRead">
          <div className="mostReadNumber">2</div>
          <div className="mostReadTextContainer">
            {" "}
            Edo Nnewi Ancestral Stool.
          </div>
          <div className="mostReadImg">
            <Image
              src={stool}
              id="subHeroImg"
              layout="responsive"
              alt="heroBanner"
              priority="true"
            />
          </div>
        </div>
        <div className="mostRead">
          <div className="mostReadNumber">3</div>
          <div className="mostReadTextContainer">
            {" "}
            Iri Ji Nne Edo Nnewi (Edo Nnewi New Yam Festival)-2022 Edition.
          </div>
          <div className="mostReadImg">
            <Image
              src={g2022}
              id="subHeroImg"
              layout="responsive"
              alt="heroBanner"
              priority="true"
            />
          </div>
        </div>
        <div className="mostRead">
          <div className="mostReadNumber">4</div>
          <div className="mostReadTextContainer">
            {" "}
            Iyi-Uwa: Oath Before Birth.
          </div>
          <div className="mostReadImg">
            <Image
              src={iyi}
              id="subHeroImg"
              layout="responsive"
              alt="heroBanner"
              priority="true"
            />
          </div>
        </div>
        <div className="mostRead">
          <div className="mostReadNumber">5</div>
          <div className="mostReadTextContainer">
            {" "}
            Alusi Na Ekwensu: Marriage Of Two Concepts.
          </div>
          <div className="mostReadImg">
            <Image
              src={alusi}
              id="subHeroImg"
              layout="responsive"
              alt="heroBanner"
              priority="true"
            />
          </div>
        </div>
      </main>

      {/* -------------------------------------------------------------------------------- */}

      <aside className="mostReadHeroBanner">
        <header className="mostReadHeader">History</header>
        <div className="mostReadHeroImg">
          <Image
            src={osu}
            id="subHeroImg"
            layout="responsive"
            alt="heroBanner"
            priority="true"
          />
        </div>

        <div className="mostReadHeroTextContainer">
          <header className="catergoryNameContainer">
            <main className="catergoryName">History</main>
          </header>
          <div className="mostReadHeroMainText">
            {" "}
            Osu- A Review From An Ancestral Perspective.
          </div>
          <div className="mostReadHeroSubText">
            In my rebel years, I was greatly perturbed by the Osu- caste system
            which was prevalent within Eastern Nigeria. I…
          </div>
        </div>
      </aside>
    </StyledMostRead>
  );
}

export default MostRead;
