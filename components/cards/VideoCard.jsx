import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaHeart, FaComment } from "react-icons/fa";
import Image from "next/image";
import youtubeImg from "../../assets/youtube-logo.png";
import { useRouter } from "next/router";

function VideoCard({ data }) {
  const router = useRouter();
  const [img, setImg] = useState();
  console.log(data, "data");

  // const [data, setData] = useState();
  useEffect(() => {
    setImg(data?.attributes?.video_banner?.data?.attributes?.url);
    // setTitle(data?.attributes?.video_banner?.data?.attributes?.url);

    return () => {};
  }, []);

  return (
    <CardContainer onClick={() => router.push(`/_videos/${data?.id}`)}>
      <CardImageCont>
        <Image
          src={img ? img : youtubeImg}
          onError={() => setImg(youtubeImg)}
          layout="fill"
        />
      </CardImageCont>
      <CardContent>
        <Description>{data?.attributes?.post_catergory}</Description>
        <Title>{data?.attributes?.title}</Title>
        <Description>{data?.attributes?.video_catergories}</Description>
        {/* <IconContainer>{data?.attributes?.post_content}</IconContainer> */}
      </CardContent>
      <Button>View</Button>
    </CardContainer>
  );
}

const fadeIn = keyframes`
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    `;

const CardContainer = styled.div`
  width: 320px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.252);
  position: relative;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
  }
`;

const CardImageCont = styled.div`
  width: 100%;
  height: 200px;
  position: relative;
`;

const CardContent = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  font-size: 14px;
  margin-bottom: 10px;
  width: 100%;

`;

const Description = styled.div`
  font-size: 14px;
  /* color: #666; */
  padding: 0px;
  margin: 0%;
  color: #e3173e;
  font-weight: 600;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  max-height: 100px;
  line-height: 1.5;
  height: 100px;
  overflow: clip;
`;

const Button = styled.div`
  color: #fff;
  width: 100%;
  text-align: center;
  font-weight: 500;
  background-color: #333;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  padding: 8px;

  & + & {
    margin-left: 10px;
  }
`;

export default VideoCard;
