import React, { useState, useEffect, useRef } from "react";
import PostCard from "../../components/cards/PostCard";
import styled, { keyframes } from "styled-components";
import api, { fetcher } from "../../utils/api";
import Pagination from "../../components/pagination/Pagination";
import { useRouter } from "next/router";
import useSWR from "swr";
import Select from "react-select";
function Blog({ blogProps }) {
  const [pageIndex, setPageIndex] = useState(1);
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "mythology and folklore", label: "mythology and folklore" },
    {
      value: "Traditional Clothing and Fashion",
      label: "Traditional Clothing and Fashion",
    },
    { value: "Religious Practices", label: "Religious Practices" },
    {
      value: "Cultural events and exhibition",
      label: "Cultural events and exhibition",
    },
    { value: "Traditional Cuisine", label: "Traditional Cuisine" },
    { value: "Art and Creativity", label: "Art and Creativity" },
    { value: "History and Heritage", label: "History and Heritage" },
    { value: "Music", label: "Music" },
  ];

  const { data } = useSWR(
    `${process.env.NEXT_PUBLIC_URL}/api/posts?populate=*&pagination[page]=${pageIndex}&pagination[pageSize]=15`,
    fetcher,
    {
      fallbackData: blogProps,
    }
  );

  const handleSelect = (e) => {
    const text = e.value;
    const textArray = text.split(" ");
    const joinedText = textArray.join("").toLowerCase();
    router.push(`?catergory=${joinedText}`, undefined, { shallow: true });
    let catValue = router.query.catergory;
    const filteredPost = posts.filter((item) => {
      let catergory = item.attributes.post_catergory.split(" ").join("");
      item.attributes.post_catergory = catergory;
      return item.attributes.post_catergory === catValue;
    });

    setPosts(filteredPost);
  };
  useEffect(() => {
    router.push(
      `?catergory=${options[0].label.split(" ").join("")}`,
      undefined,
      { shallow: true }
    );

    return () => {};
  }, []);

  useEffect(() => {
    const { query } = router;
    const handleQuery = () => {
      const categoryFromURL = query.catergory;
      const filteredPost = blogProps?.data?.filter((item) => {
        let catergory = item.attributes.post_catergory.split(" ").join("");
        item.attributes.post_catergory = catergory;
        return item.attributes.post_catergory === categoryFromURL;
      });
      setPosts(filteredPost);
    };

    handleQuery();

    return () => {
      setPosts([]);
    };
  }, [router.query]);

  return (
    <StyledBlog>
      <header>Blog Posts</header>
      <main className="selectContainer">
        <Select
          defaultValue={selectedOption}
          onChange={(e) => handleSelect(e)}
          options={options}
          isSearchable={false}
        />
      </main>

      <main className="tabContContainer">
        {posts.length !== 0 ? (
          posts?.map((item) => <PostCard key={item.id} data={item} />)
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
    </StyledBlog>
  );
}

export default Blog;

const StyledBlog = styled.section`
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
  const blog = await api.get(
    `/posts?populate=*&pagination[page]=1&pagination[pageSize]=15`
  );
  let blogProps = blog.data;
  return { props: { blogProps } };
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 100%;
  background-color: purple;
  position: relative;

  .icon {
    font-size: 50px;
  }

  .filter {
    font-size: 14px;
    font-weight: 500;
    letter-spacing: -1px;
    word-spacing: 3cqw;
  }
`;

const MenuList = styled.select`
  list-style: none;
  padding: 0;
  margin: 0;
  width: auto;
  left: 14px;
  color: #333;
  background-color: green;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  opacity: 1;
  animation: ${fadeIn} 0.3s ease-in-out;
`;
const MenuItem = styled.option`
  padding: 10px;
  width: 100%;
  cursor: pointer;
  background-color: red;
  &:hover {
    background-color: #788803;
  }
`;
