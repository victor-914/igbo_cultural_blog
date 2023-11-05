import React, { useState } from "react";
import styled from "styled-components";
import api from "../../utils/api";
function Embed({ data }) {
  const [iframeUrl, setIframeUrl] = useState(
    data?.data?.attributes?.video_iframe_link
  );
  console.log(iframeUrl, "iframeUrl");
  return (
    <StyledEmbed>
      <header
        style={{
          padding: "10px",
        }}
      >
        {data?.data?.attributes?.title}
      </header>
      <iframe
        src={iframeUrl}
        title="YouTube video player"
        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
        width="100%"
        height="100%"
        frameborder="0"
      ></iframe>
    </StyledEmbed>
  );
}

export default Embed;

export async function getStaticPaths() {
  const res = await api.get(`api/lectures`);
  const paths = res?.data?.data?.map((item) => ({
    params: { embedId: item.id.toString() },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  let data = await api.get(`api/lectures/${params.embedId.toString()}?populate=*`);
  data = data?.data;
  return { props: { data } };
}

const StyledEmbed = styled.section`
  width: 95%;
  height: 100vh;
  padding: 50px 0px 50px 0px;
  margin: auto;
`;
