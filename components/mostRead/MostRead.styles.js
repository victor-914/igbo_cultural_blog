import styled from "styled-components";

const StyledMostRead = styled.section`
  width: 97%;
  height: 110vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 50px;

  .mostReadContainer {
    width: 55%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    align-items: flex-start;
  }

  .mostReadHeader {
    line-height: 3;
    font-weight: 800;
    width: 95%;
    /* font-style: italic; */
    letter-spacing: -1.6px;
    margin: auto;
  }

  .mostRead {
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  .mostReadNumber {
    width: 7%;
    height: 95%;
    color: red;
    font-size: 55px;
    display: flex;
    font-style: italic;
    align-items: flex-start;
    justify-content: center;
    flex-direction: row;
  }

  .mostReadTextContainer {
    width: 60%;
    height: 90%;
    font-size: 20px;
    line-height: 1.4;
  }

  .mostReadTextContainer:hover {
    text-decoration: underline;
    color: #0088ff;
  }

  .mostReadImg {
    width: 30%;
    height: 90%;
    position: relative;
  }

  .mostReadHeroBanner {
    width: 40%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
  }

  .mostReadHeroImg {
    width: 98%;
    height: 70%;
    /* position: relative; */
    margin: auto;
  }
  .mostReadHeroTextContainer {
    width: 98%;
    height: 30%;
    margin: auto;
  }

  .catergoryNameContainer {
    line-height: 1.8;
    width: 98%;
    margin: auto;
    /* text-align: center; */
    margin-top: 4px;
  }

  .catergoryName {
    width: 50%;
    color: #e3120b;
    font-weight: 700;
    font-size: 14px;
  }

  .mostReadHeroMainText {
    line-height: 1.4;
    font-size: 20px;
  }

  .mostReadHeroSubText {
    line-height: 1.4;
    font-size: 16px;
    margin-top: 10px;
    font-weight: 300;
  }

  /* @media (min-width: 769px) and (max-width: 1024px) {}


  @media (min-width: 481px) and (max-width: 768px) {} */

  @media (min-width: 320px) and (max-width: 480px) {
    flex-direction: column-reverse;
    height: auto;
    .mostReadContainer {
      padding-top: 30px;
      width: 100%;
    }

    /* ----------------- */
    .mostReadHeroBanner {
      width: 95%;
      height: auto;
      padding: 0px 0px 10px 0px;
      margin: auto;
      border: none;
    }

    .mostReadHeroImg {
      height: auto;
      margin: auto;
    }

    .mostRead {
      width: 95%;
      margin: auto;
      padding: 10px 4px 10px 0px;
    }

    .mostReadNumber {
      font-size: 20px;
      font-weight: 800;
    }

    .mostReadTextContainer {
      font-size: 15px;
    }
  }
`;

export default StyledMostRead;
