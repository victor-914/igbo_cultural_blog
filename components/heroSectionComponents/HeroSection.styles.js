import styled from "styled-components";

const StyledHeroSection = styled.section`
  width: 75%;
  height: auto;
  margin: auto;

  .mainContentContainer {
    width: 100%;
    height: 78%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: space-between;
    /* border-bottom: 1px solid rgba(0, 0, 0, 0.3); */
  }

  .mainHeroContent {
    width: 50%;
    height: 100%;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }

  .mainHeroContentImg {
    width: 98%;
    height: 50vh;
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
    border-radius: 20px;
    width: 100%;
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
    font-weight: 400;
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
    height: 400px;
    margin: auto;
  }

  .sideHeroMainContentTextContainer {
    margin-top: 6px;
  }

  .sideHeroMainContentMainText {
    font-size: 20px;
    line-height: 1.3;
    cursor: pointer;
    width: 95%;
    margin: auto;
    font-weight: 500;
  }

  .sideHeroMainContentMainText:hover {
    text-decoration: underline;
    color: #0088ff;
  }
  .sideHeroMainContentSubText {
    font-size: 16px;
    line-height: 1.3;
    margin: auto;
    margin-top: 3px;
    width: 95%;
    font-weight: 400;
    color: #1f2024;
  }

  .sideHeroSubContent {
    width: 98%;
    height: 35%;
    margin: auto;
  }

  #aside_demo_img{
    position: absolute !important;
    top: 0px !important;
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
    width: 100%;
    height: auto;
    padding-top: 4vh;
    /* padding-bottom: 10vh; */

    .mainContentContainer {
      flex-direction: column;
      justify-content: space-around;
      height: 100%;
    }

    .mainHeroContent {
      width: 96%;
      margin: auto;
      height: 60%;
      border: none;
      margin-bottom: 30px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }

    .mainHeroContentImg {
      width: 100%;
      height: 40vh;
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
      margin-bottom: 30px;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }

    .sideHeroMainContent {
      height: auto;
    }

    .sideHeroMainContent {
      width: 96%;
      height: 60%;
      padding-bottom: 10px;
    }

    .sideHeroMainContentImg{
    height: 300px;
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
