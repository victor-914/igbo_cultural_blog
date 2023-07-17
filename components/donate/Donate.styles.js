import styled from "styled-components";

const StyledDonate = styled.section`
  width: 95%;
  height: 50vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  .donateImg {
    position: relative;
    width: 68%;
    height: 80%;
    cursor: pointer;
  }

  #donate {
    border-radius: 4px;
  }
  .donateMission {
    width: 29%;
    height: 80%;
  }

  .missionHeader {
    line-height: 3;
    font-weight: 800;
    padding-left: 4px;
    color: #e3120b;
  }

  .donateText {
    width: 98%;
    height: 80%;
    /* background-color: green; */
    margin: auto;
    color: rgba(0, 0, 0, 0.8);
    line-height: 1.5;
    text-align: justify;
  }

  /* @media (min-width: 769px) and (max-width: 1024px) {}


  @media (min-width: 481px) and (max-width: 768px) {} */

  @media (min-width: 320px) and (max-width: 480px) {
    /* background: red; */
    height: auto;
    margin-top: 50px;
    flex-direction: column;

    .donateImg {
      height: 20vh;
      width: 95%;
    }

    .donateMission {
      width: 90%;
      /* background: green; */
    }
  }
`;

export default StyledDonate;
