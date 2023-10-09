import Image from "next/image";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import api from "../../utils/api";
import loading from "../../assets/loading-icon.webp";
import { useRouter } from "next/router";
const Post = ({ data }) => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const [img, setImg] = useState(loading);
  const router = useRouter();

  useEffect(() => {
    setContent(data?.data.attributes?.post_content);
    setImg(data?.data.attributes?.post_banner?.data?.attributes?.url);
    setTitle(data?.data?.attributes?.post_title);

    return () => {};
  }, [data]);

  return (
    <Container>
      <div
        onClick={() => router.push("/_blog")}
        style={{
          letterSpacing: "-1px",
          paddingBottom: "8px",
        }}
      >
        <span
          style={{
            color: "#e3173e",
            letterSpacing: "-1px",
            margin: "4px",
            textDecoration: "underline",
            cursor: "pointer",
            textDecorationColor: "#000",
          }}
        >
          {data?.data.attributes?.post_catergory}
        </span>
        |
        <span
          style={{
            color: "#e3173e",
            margin: "2px",
          }}
        >
          {data?.data.id}
        </span>
      </div>
      <Title>{title}</Title>
      <BannerImage>
        <Image src={img ? img : loading} layout="fill" alt={title} />
      </BannerImage>

      <DateComponent
        date={data?.data.attributes?.publishedAt}
        type="published"
      />
      <Content>
        {content?.split("\n")?.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </Content>
    </Container>
  );
};

export default Post;

export async function getStaticPaths() {
  const res = await api.get(`/posts`);
  const paths = res?.data?.data?.map((item) => ({
    params: { blogId: item.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let data = await api.get(`/posts/${params.blogId.toString()}?populate=*`);
  data = data?.data;
  return { props: { data } };
}
const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const BannerImage = styled.div`
  width: 100%;
  height: 300px;
  border-radius: 8px;
  position: relative;
  padding-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 30px;
  font-weight: 400px;
  padding-bottom: 40px;

  @media (max-width: 760px) {
    font-size: 20px;
  }
`;

const Content = styled.div`
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 20px;
  text-align: justify;
`;

// const RelatedBlogs = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
// `;

// const RelatedBlogItem = styled.div`
//   width: calc(33.33% - 10px);
//   margin-bottom: 20px;
// `;

// const RelatedBlogImage = styled.img`
//   width: 100%;
//   height: auto;
//   border-radius: 8px;
// `;

const DateContainer = styled.div`
  font-size: 0.8rem;
  color: #333;
  padding: 16px;
`;

export const DateComponent = ({ date, type }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <DateContainer>
      {type === "published" ? "Published" : "Updated"} on {formattedDate}
    </DateContainer>
  );
};
