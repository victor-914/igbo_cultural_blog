import styled from "styled-components";

const StyledCatergory = styled.section`
  margin: auto;
  margin-top: 50px;
  width: 97%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* background-color: green; */
  align-items: center;

  .categoryHeader {
    text-align: start;
    width: 98%;
    margin: auto;
    font-weight: 700;
    color: #e3120b;
  }
  .catergoryContainer {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-evenly;
    width: 100%;
    height: 90%;
  }

  .catergoryHeroSection {
    width: 45%;
    height: 80%;
    /* background-color: green; */
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }

  .catergoryHeroSectionImg {
    width: 98%;
    height: 70%;
    margin: auto;
    position: relative;
  }

  .catergoryHeroSectionTextContainer {
    width: 95%;
    height: 20%;
    margin: auto;
    margin-top: 10px;
  }

  .readMore {
    font-weight: 700;
    font-size: 16px;
    line-height: 1.4s;
    text-align: start;
    padding-right: 6px;
    color: #e3120b;
    cursor: pointer;
  }

  .readMore:hover {
    color: #0088ff;
    text-decoration: underline;
  }

  .catergoryHeroSectionText {
    font-size: 20px;
    line-height: 1.6;
    font-weight: 700;
  }
  .catergoryHeroSectionText:hover {
    color: #0088ff;
    text-decoration: underline;
  }

  .catergoryHeroSectionSubText {
    font-weight: 300;
    font-size: 16px;
    line-height: 1.4;
    margin-top: 8px;
  }
  .subCatergorySection {
    width: 50%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    /* background-color: orange; */
  }

  .subCategory {
    width: 98%;
    height: 27%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    /* background-color: aliceblue; */
  }

  .subCategoryImg {
    width: 25%;
    height: 75%;
    position: relative;
  }

  .subCategoryTextContainer {
    width: 75%;
    height: 80%;
    position: relative;
    /* border: 2px solid green; */
  }

  /* @media (min-width: 769px) and (max-width: 1024px) {}


  @media (min-width: 481px) and (max-width: 768px) {} */

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column;
    height: auto;
    border: none;

    .catergoryContainer {
      flex-direction: column;
      padding-top: 20px;
    }

    .catergoryHeroSection {
      width: 95%;
      margin: auto;
      border: none;
    }

    .readMore {
      padding: 5px 0px 5px 2px;
    }

    .subCatergorySection {
      width: 95%;
      margin: auto;
      padding: 20px 0px 20px 0px;
    }

    .subCategory {
      margin: auto;
      padding-bottom: 10px;
      margin-bottom: 30px;
      width: 95%;
    }

    .subCategoryText {
    }

    .subCategoryImg {
      /* background: red; */
      display: none;
    }

    .catergoryHeroSectionText {
      font-size: 16px;
      line-height: 1.6;
      /* background: red; */
    }
  }
`;

export default StyledCatergory;
