import React from "react";
import VideoIframe from "../YoutubeEmbed/VideoIframe";
import StyledVideos from "./Videos.styles";
import ancestorImg from "../../assets/agwu.jpg";
import Image from "next/image";
function Videos() {
  return (
    <StyledVideos>
      <header className="headerVideos"> New Videos</header>
      <main className="overAllVideoContainer">
        <div className="videoContainer">
          <div className="video">
            <div className="videoBox">
              <VideoIframe embedId="rokGy0huYEA" />
            </div>
            <div className="videoTitle">
              Ancestral Veneration In Igbo Spirituality
            </div>
          </div>
        </div>
        <div className="videoContainer">
          <div className="video">
            <div className="videoBox">
              <VideoIframe embedId="rokGy0huYEA" />
            </div>
            <div className="videoTitle">
              Ancestral Veneration In Igbo Spirituality
            </div>
          </div>
        </div>
        <div className="videoContainer" id="advert">
          <header className="advertHeader">Advertisement</header>
          <main className="advertHolder">
            <Image
              src={ancestorImg}
              id="subHeroImg"
              layout="responsive"
              alt="heroBanner"
              priority="true"
            />
          </main>
        </div>
      </main>
    </StyledVideos>
  );
}

export default Videos;
