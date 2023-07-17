import React from "react";
import StyledCatSummary from "./catergorySummary.styles";
import Image from "next/image";
import dibia from "../../assets/dibia.jpg";
import spirit from "../../assets/spirit.jpeg";
import afiaolu from "../../assets/afiaolu.jpg";
import women from "../../assets/women.jpeg";

const CatergorySummary = () => {
  return (
    <StyledCatSummary>
      <div className="catergorySummary catergorySummaryAbove">
        <div className="catergoriesContainer">
          <header className="catergoryHeader">Interviews</header>
          <div className="catergoryWithImg catergory">
            <div className="catergoryImg">
              <Image
                src={dibia}
                id="subHeroImg"
                layout="responsive"
                alt="heroBanner"
                priority="true"
              />{" "}
            </div>
            <div className="catergoryText" id="catergoryText">
              {" "}
              An interview with Maazi Okonkwo Eze Muo Ndi Umuoba
            </div>
          </div>
          <div className="catergory">
            <div className="catergoryText">
              {" "}
              What Were The Crimes Of Our Ancestors?
            </div>
          </div>{" "}
          <div className="catergory">
            <div className="catergoryText">
              {" "}
              Fascinating Truths About Women In Igbo Pre-colonial Society.
            </div>
          </div>{" "}
          <div className="catergory">
            <div className="catergoryText">
              {" "}
              Ekwensu In Igbo Spirituality Lies and Truths
            </div>
          </div>
        </div>
        <div className="catergoriesContainer">
          <header className="catergoryHeader">Spirituality</header>
          <div className="catergory catergoryWithImg ">
            <div className="catergoryImg">
              <Image
                src={spirit}
                id="subHeroImg"
                layout="responsive"
                alt="heroBanner"
                priority="true"
              />{" "}
            </div>
            <div className="catergoryText" id="catergoryText">
              {" "}
              Understanding Igbo spirituality: Facts and Myths.
            </div>
          </div>
          <div className="catergory">
            <div className="catergoryText"> Ndi Okwu Na Uka</div>
          </div>{" "}
          <div className="catergory">
            <div className="catergoryText"> Afiaolu Ndi-Nnewi 2021</div>
          </div>{" "}
          <div className="catergory">
            <div className="catergoryText"> Agwu Nshi: The Universal Mind.</div>
          </div>
        </div>

        <div className="catergoriesContainer">
          <header className="catergoryHeader">Odinaana</header>
          <div className="catergory catergoryWithImg ">
            <div className="catergoryImg">
              <Image
                src={afiaolu}
                id="subHeroImg"
                layout="responsive"
                alt="heroBanner"
                priority="true"
              />{" "}
            </div>
            <div className="catergoryText" id="catergoryText">
              {" "}
              OGBANJE: Igbo Concept Of Changelings.
            </div>
          </div>
          <div className="catergory">
            <div className="catergoryText">
              {" "}
              Ọjị:The Progenitor Of Goodwill.
            </div>
          </div>{" "}
          <div className="catergory">
            <div className="catergoryText"> Nwịkpọ:The Ancient Masquarade.</div>
          </div>{" "}
          <div className="catergory">
            <div className="catergoryText">
              {" "}
              Ada Igbo: The Beautiful First Daughter.
            </div>
          </div>
        </div>
        <div className="catergoriesContainer">
          <header className="catergoryHeader">Odinaana & Matriachy</header>
          <div className="catergory catergoryWithImg ">
            <div className="catergoryImg">
              <Image
                src={women}
                id="subHeroImg"
                layout="responsive"
                alt="heroBanner"
                priority="true"
              />{" "}
            </div>
            <div className="catergoryText" id="catergoryText">
              {" "}
              Female Limitations In Odinaala.
            </div>
          </div>
          <div className="catergory">
            <div className="catergoryText"> Alusi: The Igbo Divinities.</div>
          </div>{" "}
          <div className="catergory" id="abnormalBorderTop">
            <div className="catergoryText">
              {" "}
              IGO-OFO: The Igbo Affirmation Process.
            </div>
          </div>{" "}
          <div className="catergory ">
            <div className="catergoryText"> Why Does Spiritual Work Fail?</div>
          </div>
        </div>
      </div>
    </StyledCatSummary>
  );
};

export default CatergorySummary;
