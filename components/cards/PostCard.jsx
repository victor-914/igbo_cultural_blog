import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaHeart, FaComment } from "react-icons/fa";
import Image from "next/image";
import loading from "../../assets/loading-icon.webp";
import { useRouter } from "next/router";
const PostCard = (props) => {
  const router = useRouter();

  const [data, setData] = useState();
  useEffect(() => {
    setData(props?.data?.attributes?.post_banner?.data?.attributes?.url);
    return () => {};
  }, []);console.log(
    "props",
    props?.data?.attributes?.post_banner?.data?.attributes?.url
  );

  return (
    <CardContainer onClick={() => router.push(`/_blog/${props.data.id}`)}>
      <CardImageCont>
        <Image
          src={data ? data : loading}
          onError={() => setData(loading)}
          layout="fill"
        />
      </CardImageCont>
      <CardContent>
        <Description>{props?.data?.attributes?.post_catergory}</Description>
        <Title>{props?.data?.attributes?.post_title}</Title>
        <IconContainer>{props?.data?.attributes?.post_content}</IconContainer>
      </CardContent>
      <Button>Read more...</Button>
    </CardContainer>
  );
};

export default PostCard;

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
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
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
  font-size: 18px;
  margin-bottom: 10px;
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
  font-weight: 500;
  background-color: #333;
  cursor: pointer;
  transition: color 0.3s ease-in-out;
  padding: 8px;

  & + & {
    margin-left: 10px;
  }
`;
