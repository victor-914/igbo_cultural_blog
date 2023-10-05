import React from "react";
import styled, { keyframes } from "styled-components";
import { FaHeart, FaComment } from "react-icons/fa";
import img from "../../assets/dada.jpg";
import Image from "next/image";

const PostCard = ({ title, description, imageUrl }) => {
  return (
    <CardContainer>
      <CardImageCont>
        <Image src={img} layout="fill" />
      </CardImageCont>
      <CardContent>
        <Title>Dada man</Title>
        <Description>{description}</Description>
        <IconContainer>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lacinia
          elit ac accumsan fermentum. Nulla eget ligula at nibh maximus posuere
          ac interdum elit. Aenean feugiat pretium justo vel suscipit.
          Suspendisse potenti. Integer hendrerit consequat lacinia. Cras
          malesuada ipsum ac pretium condimentum. Pellentesque habitant morbi
          tristique senectus et netus et malesuada fames ac turpis egestas.
          Phasellus scelerisque nisi vel lectus dictum, finibus eleifend mi
          maximus. Duis vel molestie urna, eu malesuada lorem. Cras blandit,
          mauris quis iaculis pharetra, dui metus laoreet orci, vel dapibus
          metus mauris nec lectus. Donec accumsan libero lorem, quis convallis
          arcu fringilla in. Ut consectetur sapien eu leo interdum, ut pulvinar
          mauris commodo. jjdjdjdjfhhfjfjfjfjfkekek
        </IconContainer>
      </CardContent>
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
  width: 400px;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
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

const Description = styled.p`
  font-size: 14px;
  color: #666;
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  max-height: 100px;
  height: 100px;
  overflow:clip;

`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  color: #333;
  cursor: pointer;
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #e44d26; /* Adjust the hover color as needed */
  }

  & + & {
    margin-left: 10px;
  }
`;
