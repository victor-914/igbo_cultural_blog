import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaBars } from "react-icons/fa";
import { nav } from "../menu/Menu";
import { useRouter } from "next/router";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter()
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <MobileMenuContainer>
      <MenuIcon>
        <FaBars onClick={toggleMenu} />
      </MenuIcon>
      <MenuList isOpen={isOpen}>
        {nav.map((item) => (
          <MenuItem onClick={() => router.push(item.page)} key={item._id}>
            {item?.item}
          </MenuItem>
        ))}
      </MenuList>
    </MobileMenuContainer>
  );
};

export default MobileMenu;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
  z-index: 10;

  .icon {
    font-size: 40px;
  }
`;

const MenuIcon = styled.span`
  cursor: pointer;
  color: #fff;
`;

const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50px;
  right: 14px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  opacity: 0;
  visibility: hidden;
  animation: ${fadeIn} 0.3s ease-in-out;

  ${({ isOpen }) =>
    isOpen &&
    `
    opacity: 1;
    visibility: visible;
  `};
`;

const MenuItem = styled.li`
  padding: 10px;
  width: 100px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
