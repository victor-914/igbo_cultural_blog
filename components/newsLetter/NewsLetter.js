import React from "react";
import { MdEmail } from "react-icons/md";
import StyledNewsLetter from "./NewsLetter.styles";

import { FaFacebook } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

function NewsLetter() {
  return (
    <StyledNewsLetter>
      <main className="signUpNewsLetter">
        <aside className="iconHolder">
          <MdEmail />
        </aside>
        <header className="newsLetterHeader">
          Subscribe to our mailing list to get the new updates!
        </header>
        <main className="newsLetterInput">
          <div className="inputIcon">
            <MdEmail />
          </div>
          <input
            type="text"
            placeholder="Enter your email address"
            className="inputNewsLetter"
          />
        </main>
        <div className="newsLetterButtonContainer">
          <button className="newsLetterButton">subscribe</button>
        </div>
      </main>
      <section className="followUsOverAllContainer">
        <header className="followUsHeader">Follow us</header>

        <main className="followUsContainer">
          <div className="socialMediaContainer facebook">
            <aside className="smIcon ">
              <FaFacebook />
            </aside>

            <div className="smText">
              <div className="smCount">5,000</div>
              <div className="const">followers</div>
            </div>
          </div>
          <div className="socialMediaContainer twitter">
            <aside className="smIcon ">
              <AiFillTwitterCircle />
            </aside>

            <div className="smText">
              {" "}
              <div className="smCount">5,000</div>
              <div className="const">followers</div>
            </div>
          </div>
          <div className="socialMediaContainer tiktok">
            <aside className="smIcon ">
              <FaTiktok />
            </aside>
            <div className="smText">
              {" "}
              <div className="smCount">5,000</div>
              <div className="const">followers</div>
            </div>
          </div>
          <div className="socialMediaContainer youtube">
            <aside className="smIcon">
              <IoLogoYoutube />
            </aside>
            <div className="smText">
              {" "}
              <div className="smCount">5,000</div>
              <div className="const">followers</div>
            </div>
          </div>
          <div className="socialMediaContainer instagram">
            <aside className="smIcon ">
              <FaInstagramSquare />
            </aside>
            <div className="smText">
              {" "}
              <div className="smCount">5,000</div>
              <div className="const">followers</div>
            </div>
          </div>
        </main>
      </section>
    </StyledNewsLetter>
  );
}

export default NewsLetter;
