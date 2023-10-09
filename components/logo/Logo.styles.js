import styled from "styled-components";

const StyledLogo = styled.section`
  width: 100%;
  margin: auto;
  height: auto;
  /* display: none; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  .scrollSection {
    height: 35%;
    border-bottom: 1px solid #000;
  }

  .logo {
    text-align: center;
    font-size: 50px;
    /* padding: 10px; */
    font-weight: 500;
    letter-spacing: -4px;
    color: #0088ff;
  }


  @media (min-width:300px) and (max-width:700px){
   display: none;
  }

  /* @media (min-width: 601px) {
    .mobileMenuContainer {
      display: none;
    } */
`;

export default StyledLogo;
