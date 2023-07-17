import styled from "styled-components";

const StyledSubHeroContainer = styled.section`
  width: 97%;
  margin: auto;
  height: 64vh;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: row;

  .subContainer {
    width: 24%;
    height: 90%;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }

  .subImg {
    width: 98%;
    height: auto;
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
    width: 100%;
    color: #e3120b;
    font-weight: 700;
    font-size: 14px;
  }

  .subTextContainer {
    width: 95%;
    height: 40%;
    margin: auto;
  }

  .subHeaderTitle {
    font-size: 20px;
    line-height: 1.5;
    cursor: pointer;
  }

  .subHeaderTitle:hover {
    text-decoration: underline;
    color: #0088ff;
  }

  .subHeaderSubTitle {
    margin-top: 8px;
    font-weight: 300;
    font-size: 16px;
    line-height: 1.5;
  }

  /* @media (min-width: 769px) and (max-width: 1024px) {}


  @media (min-width: 481px) and (max-width: 768px) {} */

  @media (min-width: 320px) and (max-width: 480px) {
    /* background: red; */
    height: auto;
    flex-direction: column;

    .subContainer {
      width: 95%;
      padding-bottom: 5px;
      margin-bottom: 30px;
      border-right: 1px solid transparent;
      border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    }
  }
`;

export default StyledSubHeroContainer;
