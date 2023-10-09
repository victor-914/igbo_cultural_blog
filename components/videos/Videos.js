import React from "react";
import VideoIframe from "../YoutubeEmbed/VideoIframe";
import StyledVideos from "./Videos.styles";
import ancestorImg from "../../assets/agwu.jpg";
import Image from "next/image";
import api, { fetcher } from "../../utils/api";
import useSWR from "swr";
import VideoCard from "../cards/VideoCard";
function Videos() {
  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/videos?populate=*&pagination[page]=1&pagination[pageSize]=5`,
    fetcher
  );
  console.log(data, "data");
  return (
    <StyledVideos>
      <header className="headerVideos"> New Videos</header>
      <main className="overAllVideoContainer">
        {data?.data.map((item) => (
          <VideoCard data={item} />
        ))}
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
