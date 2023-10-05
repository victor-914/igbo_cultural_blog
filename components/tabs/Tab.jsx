import React from "react";
import styled from "styled-components";

export const Tab = ({ label, content, isActive, onClick }) => (
  <StyledTab>
    <TabButton isActive={isActive} onClick={onClick}>
      {label}
    </TabButton>
    {isActive && <TabContent>{content}</TabContent>}
  </StyledTab>
);

const TabButton = styled.button`
  /* flex: 1; */
  height: 50px !important;
  /* padding: 10px 15px; */
  background-color: ${({ isActive }) => (isActive ? "#3498db" : "#2c3e50")};
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #2980b9;
  }
`;

const TabContent = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 100%;
  border: 10px solid purple;
  background-color: green;
`;

const StyledTab = styled.section`
  display: flex;
  /* justify-content:; */
  flex-direction: column;
`;
