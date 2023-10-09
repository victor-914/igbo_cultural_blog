import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import api, { fetcher } from "../../utils/api";
import Pagination from "../../components/pagination/Pagination";
import { useRouter } from "next/router";
import useSWR from "swr";
import VideoCard from "../../components/cards/VideoCard";
function _Videos({ videoProps }) {
  const [pageIndex, setPageIndex] = useState(1);
  const [videos, setVideos] = useState([]);
  const router = useRouter();

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/videos?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=15`,
    fetcher,
    {
      fallbackData: videoProps,
    }
  );


  useEffect(() => {
   setVideos(data?.data)
    return () => {
    
    }
  }, [])
  



  return (
    <StyledVideos>
      {" "}
      <header>Videos</header>
      <main className="tabContContainer">
        {videos.length !== 0 ? (
          videos?.map((item) => <VideoCard key={item.id} data={item} />)
        ) : (
          <div
            style={{
              width: "100vw",
              height: "50vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            No content yet...
          </div>
        )}
      </main>
      <Pagination
        data={data?.meta}
        stateIndex={pageIndex}
        setstateIndex={setPageIndex}
      />
    </StyledVideos>
  );
}

export default _Videos;

const StyledVideos = styled.section`
  width: 100%;
  height: auto;
  margin: auto;
  /* display: flex; */
  padding-top: 20px;

  .selectContainer {
    width: 90%;
    margin: auto;
  }

  header {
    width: 100%;
    padding: 10px;
    font-size: 30px;
    font-weight: 600;
    width: 100%;
    text-align: center;
    line-height: 3;
    margin: auto;
  }
  .tabCont {
    width: 100%;
    height: 100%;
    margin: auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    border: 2px solid #00a1df;
    overflow-x: scroll;
    border-left: none;
    border-right: none;
    overflow-y: auto;
    border-radius: none;
  }

  .tabHeader {
    list-style: none;
    font-size: 16px;
    height: 100%;
    width: auto;
    letter-spacing: -1px;
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-around;
    cursor: pointer;
  }

  .tabHeader:hover {
    background-color: #00a1df !important;
    color: #fff !important;
  }

  .tabContContainer {
    width: 92%;
    height: auto;
    padding-bottom: 50px;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    row-gap: 50px;
    padding-top: 40px;
  }

  @media (max-width: 600px) {
    .selectContainer {
      display: block;
    }

    .tabContContainer {
      width: 100%;
    }
  }

  @media (min-width: 810px) {
    .tabContContainer {
      width: 100%;
    }
  }
`;

export const getStaticProps = async () => {
  const videos = await api.get(
    `/videos?populate=*&pagination[page]=1&pagination[pageSize]=15`
  );
  let videoProps = videos.data;
  return { props: { videoProps } };
};
