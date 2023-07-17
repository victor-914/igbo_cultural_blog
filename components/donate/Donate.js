import React from "react";
import StyledDonate from "./Donate.styles";
import ancestorImg from "../../assets/donate.png";
import Image from "next/image";
function Donate() {
  return (
    <StyledDonate>
      <main className="donateImg">
        <Image
          src={ancestorImg}
          id="donate"
          layout="fill"
          alt="heroBanner"
          priority="true"
        />
      </main>
      <aside className="donateMission">
        <header className="missionHeader">Mission</header>
        <main className="donateText">
          Every time you support our work, you birth a journey that researches
          our culture and spirituality and tells' an Igbo story. My work takes
          me to different parts of Igboland and I look forward to it taking me
          to more places to study and document the obscure and bring it to your
          doorstep.
        </main>
      </aside>
    </StyledDonate>
  );
}

export default Donate;
