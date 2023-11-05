import React, { useState, useEffect } from "react";
import StyledHeroSection from "./HeroSection.styles";
import Image from "next/image";
import ancestorImg from "../../assets/ancestors.jpg";
import dada from "../../assets/dada.jpg";
import { useRouter } from "next/router";
export function truncateContent(content, count) {
  const words = content?.split(" ");
  const truncatedWords = words?.slice(0, count);
  const truncatedContent = truncatedWords?.join(" ");
  if (words?.length > count) {
    return truncatedContent + "...";
  } else {
    return truncatedContent;
  }
}

function HeroSection({ prop }) {
  const router = useRouter();

  const [mainContent] = useState({
    _id: prop[0]?.id,
    img: prop?.[0]?.attributes?.post_banner?.data?.attributes?.url,
    cat: prop?.[0]?.attributes?.post_catergory,
    content: truncateContent(prop?.[0]?.attributes?.post_content, 30),
    title: prop?.[0]?.attributes?.post_title,
  });
  const [asideContent, setAsideContent] = useState({
    _id: prop[3]?.id,
    img: prop?.[3]?.attributes?.post_banner?.data?.attributes?.url,
    cat: prop?.[3]?.attributes?.post_catergory,
    content: truncateContent(prop?.[1]?.attributes?.post_content, 10),
    title: prop?.[3]?.attributes?.post_title,
  });
  const [mainContent2] = useState({
    _id: prop[3]?.id,
    img: prop?.[2]?.attributes?.post_banner?.data?.attributes?.url,
    cat: prop?.[2]?.attributes?.post_catergory,
    content: truncateContent(prop?.[2]?.attributes?.post_content, 10),
    title: prop?.[2]?.attributes?.post_title,
  });

  const [subContent2] = useState({
    _id: prop[4]?.id,
    img: prop?.[4]?.attributes?.post_banner?.data?.attributes?.url,
    cat: prop?.[4]?.attributes?.post_catergory,
    content: truncateContent(prop?.[4]?.attributes?.post_content, 10),
    title: prop?.[4]?.attributes?.post_title,
  });

  const [subContent] = useState({
    _id: prop[1]?.id,
    img: prop?.[1]?.attributes?.post_banner?.data?.attributes?.url,
    cat: prop?.[1]?.attributes?.post_catergory,
    content: truncateContent(prop?.[1]?.attributes?.post_content, 10),
    title: prop?.[1]?.attributes?.post_title,
  });

  return (
    <StyledHeroSection>
      <main className="mainContentContainer">
        <div className="mainHeroContent">
          <div className="mainHeroContentImg">
            {" "}
            <Image
              src={mainContent?.img ? mainContent?.img : dada}
              id="service_demo_img"
              layout="fill"
              alt="heroBanner"
              priority="true"
            />
          </div>
          <header className="catergoryNameContainer">
            <main className="catergoryName">{mainContent?.cat}</main>
          </header>

          <div
            onClick={() => router.push(`_blog/${mainContent?._id}`)}
            className="mainTitle"
          >
            {mainContent.title}
          </div>
          <div className="subMainTitle">{mainContent?.content}</div>
        </div>
        <div className="sideHeroContent">
          <main className="sideHeroMainContent">
            <div className="sideHeroMainContentImg">
              <Image
                src={asideContent?.img ? asideContent?.img : ancestorImg}
                id="aside_demo_img"
                layout="fill"
                alt="heroBanner"
                priority="true"
              />
            </div>
            <header className="catergoryNameContainer">
              <main className="catergoryName">{asideContent?.cat}</main>
            </header>
            <div className="sideHeroMainContentTextContainer">
              <main
                onClick={() => router.push(`_blog/${asideContent?._id}`)}
                className="sideHeroMainContentMainText"
              >
                {asideContent?.title}
              </main>
              <aside className="sideHeroMainContentSubText">
                {asideContent?.content}
              </aside>
            </div>
          </main>
          {/* --------------------------------------- */}
          <aside className="sideHeroSubContent">
            <header className="catergoryNameContainer">
              <main className="catergoryName">{subContent2?.cat}</main>
            </header>
            <main
              onClick={() => router.push(`_blog/${subContent2?._id}`)}
              className="sideHeroMainContentMainText"
            >
              {subContent2?.title}
            </main>
            <aside className="sideHeroMainContentSubText">
              {subContent2?.content}
            </aside>
          </aside>
        </div>

        {/* ------------------------------------------ */}
        <div className="sideHeroContent">
          <main className="sideHeroMainContent">
            <div className="sideHeroMainContentImg">
              <Image
                src={mainContent2?.img}
                id="aside_demo_img"
                layout="fill"
                alt="heroBanner"
                priority="true"
              />
            </div>
            <header className="catergoryNameContainer">
              <main className="catergoryName">{mainContent2?.cat}</main>
            </header>
            <div className="sideHeroMainContentTextContainer">
              <main
                onClick={() => router.push(`_blog/${mainContent2?._id}`)}
                className="sideHeroMainContentMainText"
              >
                {mainContent2?.title}
              </main>
              <aside className="sideHeroMainContentSubText">
                {mainContent2?.content}
              </aside>
            </div>
          </main>
          {/* --------------------------------------- */}
          <aside className="sideHeroSubContent">
            <header className="catergoryNameContainer">
              <main className="catergoryName">{subContent?.cat}</main>
            </header>
            <main
              onClick={() => router.push(`_blog/${subContent?._id}`)}
              className="sideHeroMainContentMainText"
            >
              {subContent?.title}
            </main>
            <aside className="sideHeroMainContentSubText">
              {subContent?.content}
            </aside>
          </aside>
        </div>
      </main>
    </StyledHeroSection>
  );
}

export default HeroSection;
