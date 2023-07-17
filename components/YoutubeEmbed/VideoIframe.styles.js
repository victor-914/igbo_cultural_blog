import styled from "styled-components";

const StyledVideoIframe = styled.div`
  iframe {
    height: 100%;
    width: 100%;
    position: absolute;
  }

  /* @media (min-width: 769px) and (max-width: 1024px) {}


  @media (min-width: 481px) and (max-width: 768px) {} */

  @media (min-width: 320px) and (max-width: 480px) {
    height: 30vh;
    background: orange;
  }
`;

export default StyledVideoIframe;
