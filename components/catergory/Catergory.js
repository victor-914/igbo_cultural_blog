import React from "react";
import StyledCatergory from "./Catergory.styles";
import Image from "next/image";
import animals from "../../assets/animals.jpg";
import clean from "../../assets/clean.jpeg";
import uru from "../../assets/uru.jpeg";
import begin from "../../assets/begin.jpg";

function Catergory() {
  return (
    <StyledCatergory>
      <header className="categoryHeader"> History</header>
      <div className="catergoryContainer">
        <main className="catergoryHeroSection">
          <div className="catergoryHeroSectionImg">
            <Image
              src={animals}
              id="subHeroImg"
              layout="responsive"
              alt="heroBanner"
              priority="true"
            />
          </div>
          <div className="catergoryHeroSectionTextContainer">
            <header className="catergoryHeroSectionText">
              {" "}
              Sacred Animals In Eastern Nigeria
            </header>
            <main className="catergoryHeroSectionSubText">
              A strong belief in Igbo Spirituality and Cosmology is the belief,
              that everything created by God and exist within nature…
            </main>
          </div>
          <aside className="readMore">Read more on history</aside>
        </main>
        <aside className="subCatergorySection">
          <div className="subCategory">
            <div className="subCategoryText">
              <header className="catergoryHeroSectionText">
                {" "}
                Ekwensu In Igbo Spirituality Lies and Truths
              </header>
              <main className="catergoryHeroSectionSubText">
                The ancient Igbo believed that he existed before manifesting in
                this earth. In the beginning, Chukwu (God) lived with men,…
              </main>
            </div>
            <div className="subCategoryImg">
              <Image
                src={begin}
                id="subHeroImg"
                layout="responsive"
                alt="heroBanner"
                priority="true"
              />
            </div>
          </div>
          <div className="subCategory">
            <div className="subCategoryText">
              {" "}
              <header className="catergoryHeroSectionText">
                {" "}
                Uru-Agwu: The Antithesis Of Agwu.
              </header>
              <main className="catergoryHeroSectionSubText">
                The law of binary in Igbo Spirituality and Cosmology suggests
                that everything within the cosmos exist on binary terms,”Ihe
                kwuru,ihe…
              </main>
            </div>
            <div className="subCategoryImg">
              <Image
                src={uru}
                id="subHeroImg"
                layout="responsive"
                alt="heroBanner"
                priority="true"
              />
            </div>
          </div>{" "}
          <div className="subCategory">
            <div className="subCategoryText">
              {" "}
              <header className="catergoryHeroSectionText">
                {" "}
                Igbu Ewu Ani: The Traditional Land Cleansing Rite
              </header>
              <main className="catergoryHeroSectionSubText">
                Ani/Ala/Ana (Land) depending on the communal tonation, is
                regarded as one of the most valuable assets owned by an Igbo…
              </main>
            </div>
            <div className="subCategoryImg">
              <Image
                src={clean}
                id="subHeroImg"
                layout="responsive"
                alt="heroBanner"
                priority="true"
              />
            </div>
          </div>
        </aside>
      </div>
    </StyledCatergory>
  );
}

export default Catergory;
