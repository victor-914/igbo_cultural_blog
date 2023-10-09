import React, { useEffect, useState } from "react";
import StyledMostRead from "./MostRead.styles";
import Image from "next/image";
import ancestorImg from "../../assets/ancestors.jpg";
import ene from "../../assets/ene.jpeg";
import stool from "../../assets/stool.jpeg";
import g2022 from "../../assets/g2022.jpeg";
import iyi from "../../assets/iyi.jpeg";
import alusi from "../../assets/alusi.jpeg";
import osu from "../../assets/osu.jpg";
import { truncateContent } from "../heroSectionComponents/HeroSection";
import { useRouter } from "next/router";

function MostRead({ prop }) {
  console.log(prop, "most read");
  let [count, setCount] = useState(0);
  const router = useRouter();

  const [mainContent] = useState({
    _id: prop[5].id,
    img: prop?.[5]?.attributes?.post_banner?.data?.attributes?.url,
    cat: prop?.[5].attributes?.post_catergory,
    content: truncateContent(prop?.[5].attributes?.post_content, 30),
    title: prop?.[5].attributes?.post_title,
  });
  return (
    <StyledMostRead>
      <main className="mostReadContainer">
        <header className="mostReadHeader">Most read by our Subscribers</header>

        {prop?.map((item, indx) => {
          return item.id > 5 && item.id <= 10 ? (
            <div className="mostRead" key={item?.attributes?.post_slug}>
              <div className="mostReadNumber">{indx - 5 + 1}</div>
              <div
                onClick={() => router.push(`_blog/${item.id}`)}
                className="mostReadTextContainer"
              >
                {" "}
                {item?.attributes?.post_title}
              </div>
              <div className="mostReadImg">
                <Image
                  src={
                    item.attributes?.post_banner?.data?.attributes?.url
                      ? item.attributes?.post_banner?.data?.attributes?.url
                      : ene
                  }
                  id="subHeroImg"
                  layout="responsive"
                  width="80px"
                  height="60px"
                  alt="heroBanner"
                  priority="true"
                />
              </div>
            </div>
          ) : null;
        })}
      </main>

      {/* -------------------------------------------------------------------------------- */}

      <aside className="mostReadHeroBanner">
        <header className="mostReadHeader"></header>
        <div className="mostReadHeroImg">
          <Image
            src={mainContent?.img ? mainContent?.img : osu}
            id="subHeroImg"
            layout="fill"
            alt="heroBanner"
            priority="true"
          />
        </div>

        <div className="mostReadHeroTextContainer">
          <header className="catergoryNameContainer">
            <main className="catergoryName">{mainContent.cat}</main>
          </header>
          <div
            onClick={() => router.push(`_blog/${mainContent._id}`)}
            className="mostReadHeroMainText"
          >
            {" "}
            {mainContent.title}
          </div>
          <div className="mostReadHeroSubText">{mainContent.content}</div>
        </div>
      </aside>
    </StyledMostRead>
  );
}

export default MostRead;
