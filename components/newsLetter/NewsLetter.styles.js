import styled from "styled-components";

const StyledNewsLetter = styled.section`
  width: 95%;
  height: 50vh;
  margin: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  .signUpNewsLetter {
    width: 68%;
    height: 85%;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }

  .newsLetterHeader {
    width: 100%;
    height: 30%;
    font-size: 20px;
    font-weight: 800;
  }

  .iconHolder {
    width: 100%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
    color: rgba(0, 0, 0, 0.5);
  }

  .newsLetterHeader {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    letter-spacing: -0.5px;
    color: rgba(0, 0, 0, 0.7);
  }

  .newsLetterInput {
    width: 80%;
    height: 15%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: green; */
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.3);
  }

  .inputIcon {
    font-size: 38px;
    color: rgba(0, 0, 0, 0.5);
    width: 20%;
    height: 100%;
  }

  .inputNewsLetter {
    width: 80%;
    height: 60%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
  }

  .inputNewsLetter::placeholder {
    text-align: start;
  }

  .newsLetterButtonContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 20%;
  }

  .newsLetterButton {
    width: 80%;
    height: 70%;
    background-color: #0088ff;
    border: none;
    outline: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    box-shadow: -12px 27px 12px -28px rgba(0, 0, 0, 0.67);
  }

  .newsLetterButton:hover {
    background-color: #0044ee;
  }

  .followUsOverAllContainer {
    width: 30%;
    height: 85%;
  }

  .followUsHeader {
    line-height: 2;
    width: 98%;
    margin: auto;
    margin-bottom: 2px;
    font-weight: 800;
  }

  .followUsContainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 95%;
    height: 90%;
    margin: auto;
  }

  .socialMediaContainer {
    width: 45%;
    height: 25%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-shadow: -12px 27px 12px -28px rgba(0, 0, 0, 0.67);
  }

  .twitter {
    background-color: #40bff5;
  }

  .youtube {
    background-color: #ef4e41;
  }

  .instagram {
    background-color: #c13584;
  }

  .facebook {
    background-color: #6699ff;
  }

  .tiktok {
    background-color: #ff004f;
  }

  .smIcon {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 20px;
  }

  .smText {
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-weight: 300;
    color: #fff;
  }

  .const {
    font-size: 14px;
    line-height: 1.5;
  }

  /* @media (min-width: 769px) and (max-width: 1024px) {}


  @media (min-width: 481px) and (max-width: 768px) {} */

  @media (min-width: 320px) and (max-width: 480px) {
    /* background: red; */
    height: auto;
    flex-direction: column;
    margin-top: 50px;

    .signUpNewsLetter {
      width: 95%;
      height: auto;
      border: none;
    }

    .newsLetterHeader {
      font-size: 18px;
      text-align: center;
      font-weight: 800;
      height: auto;
      line-height: 1.5;
    }

    .newsLetterInput {
      width: 95%;
      height: 100%;
    }

    .inputNewsLetter {
      width: 95%;
      height: 100%;
    }

    .inputIcon {
      font-size: 20px;
      color: rgba(0, 0, 0, 0.5);
      width: auto;
      padding: 7px;
      height: 100%;
    }

    .newsLetterButtonContainer {
      margin-top: 10px;
    }

    .newsLetterButton {
      line-height: 3;
    }

    .followUsOverAllContainer {
      width: 100%;
      height: 30vh;
      margin-top: 50px;
    }

    .followUsHeader {
      text-align: center;
    }

    
  }
`;

export default StyledNewsLetter;
