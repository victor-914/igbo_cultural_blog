import styled from "styled-components";

const StyledFooter = styled.section`
  width: 100%;
  height: 50vh;
  background-color: #333333;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;

  .subNav {
    width: 18%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
  }

  .subNav li {
    width: 98%;
    height: 8%;
    font-weight: 300;
    list-style: none;
    cursor: pointer;
  }

  .kuHeader {
    font-weight: 800;
    width: 100%;
    /* background-color: red; */
    line-height: 2;
  }

  .keepUpdated {
    width: 15%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
  }

  .keepUpdated li {
    width: 98%;
    height: 8%;
    font-weight: 300;
    list-style: none;
    cursor: pointer;
  }

  .subNav li:hover,
  .keepUpdated li:hover {
    color: #0088ff;
    text-decoration: underline;
  }

  .mission {
    width: 40%;
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1.5;
    font-size: 20px;
    font-weight: 300;
    font-style: oblique;
  }

  /* @media (min-width: 769px) and (max-width: 1024px) {}


  @media (min-width: 481px) and (max-width: 768px) {} */

  @media (min-width: 320px) and (max-width: 480px) {
    /* background: green; */
    height: auto;
    width: 95%;
    padding-top: 10px;
    flex-direction: column;
    padding-bottom: 30px;
    margin-top: 50px;

    .subNav {
      /* background: red; */
      width: 90%;
      margin: auto;
      padding-bottom: 30px;
    }

    .subNav li {
      line-height: 2;
      font-weight: 800;
    }

    .kuHeader {
      line-height: 2;
    }

    .keepUpdated {
      width: 90%;
      padding-bottom: 20px;
    }

    .keepUpdated li {
      line-height: 2;
      font-weight: 800;
    }

    .mission {
      width: 90%;
      line-height: 1.4;
    }
  }
`;

export default StyledFooter;
