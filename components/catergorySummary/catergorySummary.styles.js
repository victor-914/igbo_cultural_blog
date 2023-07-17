import styled from "styled-components";

const StyledCatSummary = styled.section`
  width: 98%;
  height: 95vh;
  margin: auto;
  .catergorySummary {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .catergoriesContainer {
    width: 22%;
    height: 90%;
    border-top: 1px solid #000;
  }

  .catergoryHeader {
    line-height: 2.2;
    font-weight: 700;
    width: 98%;
    margin: auto;
  }

  .catergoryHeader:hover {
    color: #0088ff;
    text-decoration: underline;
    cursor: pointer;
  }

  .catergory {
    width: 100%;
    height: 10%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
  }

  .catergoryWithImg {
    height: 50% !important;
  }

  .catergoryImg {
    width: 100%;
    height: 55%;
    position: relative;
    margin: auto;
  }

  #catergoryText {
    font-weight: 700;
    border-top: none;
    font-size: 16px;
    text-align: start;
    width: 95%;
    height: 20%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .catergoryText {
    width: 95%;
    margin: auto;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.8);
    font-size: 15px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    padding-top: 8px;
  }

  .catergoryText:hover {
    color: #0088ff;
    text-decoration: underline;
    cursor: pointer;
  }

  /* @media (min-width: 769px) and (max-width: 1024px) {}


  @media (min-width: 481px) and (max-width: 768px) {} */

  @media (min-width: 320px) and (max-width: 480px) {
    height: auto;
    padding-top: 40px;
    border: none;

    .catergorySummary {
      flex-direction: column;
    }

    .catergoriesContainer {
      width: 95%;
      height: auto;
      border: none;
      /* background: red; */
      margin-top: 30px;
    }

    .catergoryWithImg {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    .catergory {
      width: 100%;
      height: auto;
      line-height: 2;
    }
  }
`;

export default StyledCatSummary;
