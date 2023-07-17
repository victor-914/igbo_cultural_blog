import React from "react";
import StyledFooter from "./Footer.styles";

function Footer() {
  return (
    <StyledFooter>
      <div className="subNav">
        <header className="kuHeader">Site map</header>
        <li>Home</li>
        <li>Articles</li>
        <li>Videos</li>
        <li>Interviews</li>
        <li>Donate</li>
        <li>Contact us</li>
      </div>
      <div className="keepUpdated">
        <header className="kuHeader">Stay Updated</header>
        <li>Youtube</li>
        <li>Twitter</li>
        <li>Tik Tok</li>
        <li>Facebook</li>
        <li>Instagram</li>
      </div>
      <div className="mission">
        Every time you support our work, you birth a journey that researches our
        culture and spirituality and tells' an Igbo story. My work takes me to
        different parts of Igboland and I look forward to it taking me to more
        places to study and document the obscure and bring it to your doorstep.
      </div>
    </StyledFooter>
  );
}

export default Footer;
