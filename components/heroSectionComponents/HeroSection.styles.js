import styled from "styled-components";

const StyledHeroSection = styled.section`
  width: 97%;
  height: 120vh;
  margin: auto;

  .mainContentContainer {
    width: 100%;
    height: 78%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  .mainHeroContent {
    width: 50%;
    height: 95%;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }

  .mainHeroContentImg {
    width: 98%;
    height: 65%;
    margin: auto;
    position: relative;
  }

  .catergoryNameContainer {
    line-height: 1.8;
    width: 98%;
    margin: auto;
    /* text-align: center; */
    margin-top: 4px;
  }

  .catergoryName {
    /* background-color: #e3120b; */
    border-radius: 20px;
    width: 20%;
    color: #e3120b;
    font-weight: 700;
    font-size: 14px;
  }

  .mainTitle {
    width: 95%;
    height: auto;
    margin: auto;
    font-size: 30px;
    text-align: flex-start;
    line-height: 1.5;
  }
  .mainTitle:hover {
    text-decoration: underline;
    color: #0088ff;
  }

  .subMainTitle {
    width: 95%;
    height: auto;
    margin: auto;
    line-height: 1.5;
    font-size: 18px;
    font-weight: 300;
  }

  .sideHeroContent {
    width: 24%;
    height: 98%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .sideHeroMainContent {
    width: 98%;
    height: 50%;
    margin: auto;
    position: relative;
    text-overflow: ellipsis;
  }

  .sideHeroMainContentImg {
    position: relative;
    width: 98%;
    height: 60%;
    margin: auto;
  }

  .sideHeroMainContentTextContainer {
  }

  .sideHeroMainContentMainText {
    font-size: 20px;
    line-height: 1.3;
    cursor: pointer;
    width: 95%;
    margin: auto;
  }

  .sideHeroMainContentMainText:hover {
    text-decoration: underline;
    color: #0088ff;
  }
  .sideHeroMainContentSubText {
    font-size: 16px;
    line-height: 1.3;
    margin: auto;
    margin-top: 8px;
    width: 95%;
    font-weight: 300;
    color: #1f2024;
  }

  .sideHeroSubContent {
    width: 98%;
    height: 35%;
    margin: auto;
  }

  .asideCarousel {
    width: 24%;
    height: 95%;
    border-radius: 5px;
  }

  .asideCarouselHeader {
    width: 90%;
    line-height: 3;
    padding: 4px;
    font-weight: 700;
    color: #e3120b;
  }
  .sideHeroSubContentImg {
    width: 98%;
    height: 81%;
    margin: auto;
    position: relative;
  }

  .carouselController {
    width: 50%;
    height: 8%;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
  }

  .carouselController button {
    width: 20%;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.3);
    border-radius: 4px;
  }

  .carouselController button:hover {
    background-color: #0088ff;
    color: #fff;
  }

  /* @media (min-width: 769px) and (max-width: 1024px) {}


  @media (min-width: 481px) and (max-width: 768px) {} */

  @media (min-width: 320px) and (max-width: 480px) {
    margin: auto;
    height: auto;
    padding-bottom: 10vh;

    .mainContentContainer {
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
    }

    .mainHeroContent {
      width: 96%;
      height: 60%;
      border: none;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }

    .mainHeroContentImg {
      width: 100%;
      height: auto;
    }

    .mainTitle {
      font-size: 18px;
      text-align: justify;
    }

    .subMainTitle {
      padding: 10px 0px 10px 0px;
      max-width: 100%;
      font-size: 16px;
      line-height: 1.3;
      font-weight: 300;
      text-align: justify;
    }

    .sideHeroContent {
      width: 100%;
      height: auto;
      border: none;
    }

    .sideHeroMainContent {
      height: auto;
    }

    .sideHeroMainContent {
      width: 96%;
      height: 60%;
      padding-bottom: 10px;
    }

    .sideHeroMainContentSubText {
      padding: 7px 0px 10px 0px;
      /* display: none; */
    }

    .asideCarousel {
      display: none;
    }
  }
`;

export default StyledHeroSection;
