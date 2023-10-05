import React, { useState } from "react";
import PostCard from "../../components/cards/PostCard";
import styled from "styled-components";
import { Tab } from "../../components/tabs/Tab";
function Blog() {
  const [activeTab, setActiveTab] = useState("");

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  const tabs = [
    "Matriachy",
    "Patricarchy",
    "Festivals",
    "Culture",
    // "Patricarchy",
    // "Festidssazdvals",
    // "Cultuasddsxxcre",
    // "Matrissxzdvachy",
    // "Patricdcdsarchy",
    // "Festivals",
  ];

  const tabContent = [
    {
      _id: "hfhfh",
      cat: "Matriachy",
      content: "fhfhfhfhegegdgdgdh",
    },
    {
      _id: "hfhfqh",
      cat: "Patricarchy",
      content: "fhfhfhfhchchhssyuiaisegegdgdgdh",
    },
    {
      _id: "hfwhfh",
      cat: "tabone",
      content: "fhfhfhfhegegdgdgdh",
    },
    {
      _id: "hfhfh",
      cat: "Festivals",
      content: "fhfhfhfhchchhssyuiaisegegdgdgdh",
    },
    {
      _id: "hfhdfh",
      cat: "tabone",
      content: "fhfhfhfhegegdgdgdh",
    },
    {
      _id: "hfhfwh",
      cat: "Culture",
      content: "fhfhfhfhchchhssyuiaisegegdgdgdh",
    },
  ];
  return (
    <StyledBlog>
      <header>Blog Posts</header>

      <aside className="tabCont">
        {tabs.map((item) => (
          <li
            key={item}
            className="tabHeader"
            style={{
              color: item === activeTab ? "#fff" : "#000",
              backgroundColor: item === activeTab ? "#333" : "transparent",
            }}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </li>
        ))}
      </aside>

      <main className="tabContContainer">
        {tabContent.map(
          (item) =>
            item.cat === activeTab && (
              <div className="content" key={item._id}>
                <PostCard />
                <PostCard /> <PostCard /> <PostCard /> <PostCard /> <PostCard />{" "}
                <PostCard /> <PostCard /> <PostCard /> <PostCard /> <PostCard />{" "}
                <PostCard /> <PostCard />
              </div>
            )
        )}
      </main>
    </StyledBlog>
  );
}

export default Blog;

const StyledBlog = styled.section`
  /* background-color: red; */
  width: 100%;
  height: auto;
  margin: auto;
  /* display: flex; */
  padding-top: 20px;

  header {
    width: 100%;
    padding: 10px;
    font-size: 30px;
    font-weight: 800;
    margin: auto;
  }
  .tabCont {
    max-width: 60%;
    width: 100%;
    height: 50px;
    margin: auto;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 2px solid #00a1df;
    overflow-x: scroll;
    overflow-y: hidden;
    border-radius: 7px;
  }

  .tabHeader {
    list-style: none;
    font-size: 20px;
    height: 100%;
    width: auto;
    padding: 4px 10px 4px 10px;
    display: flex;
    margin: 0px 20px 0px 20px;
    align-items: center;
    padding: 10px;
    justify-content: space-around;
    cursor: pointer;
  }

  .tabHeader:hover {
    background-color: red;
  }

  .tabContContainer {
    width: 92%;
    height: auto;
    padding-bottom: 50px;
    margin: auto;
  }

  .content {
    height: auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    row-gap: 100px;
    padding-top: 20px;
  }
`;
