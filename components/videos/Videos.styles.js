import styled from "styled-components";

const StyledVideos = styled.section`
  width: 100%;
  height: 114vh;
  margin: auto;

  .headerVideos {
    color: #e3120b;
    font-weight: 800;
    width: 95%;
    margin: auto;
  }

  .overAllVideoContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 95%;
    height: 95%;
    margin: auto;
  }

  .videoContainer {
    width: 25%;
    height: 95%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    border-right: 1px solid rgba(0, 0, 0, 0.3);
  }

  .video {
    width: 90%;
    height: 30%;
    margin: auto;
  }

  .videoBox {
    width: 99%;
    height: 80%;
    position: relative;
    margin: auto;
  }

  .videoTitle {
    /* position: relative; */
    height: 19%;
    width: 95%;
    margin: auto;
    font-weight: 300;
    font-size: 13.4px;
    padding-top: 2px;
    z-index: 2;
    color: #000;
    /* background-attachment: fixed; */
  }

  .videoTitle:hover {
    color: #0088ff;
    text-decoration: underline;
    cursor: pointer;
  }

  #advert {
    height: 85%;
    border-right: none;
  }

  .advertHeader {
    width: 90%;
    line-height: 1.7;
    text-align: start;
    font-weight: 800;
    color: rgba(0, 0, 0, 0.8);
    padding-left: 4px;
    margin: auto;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  }

  .advertHolder {
    width: 90%;
    height: 80%;
    position: relative;
    margin: auto;
  }

  /* @media (min-width: 769px) and (max-width: 1024px) {}


  @media (min-width: 481px) and (max-width: 768px) {} */

  @media (min-width: 320px) and (max-width: 480px) {
    height: auto;
    width: 95%;
    margin: auto;

    .overAllVideoContainer {
      flex-direction: column-reverse;
    }

    .videoContainer {
      width: 100%;
      padding: 10px;
      border: none;
      margin-top: 20px;
    }

    .videoTitle {
      line-height: 2;
    }

    #advert {
      display: none;
    }
  }
`;

export default StyledVideos;
