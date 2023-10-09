import React, { useState } from "react";
import styled from "styled-components";

// const categories = ["All", "Technology", "Fashion", "Food", "Travel"];

const categories = [
  "mythology and folklore",
  "Traditional Clothing and Fashion",
  "Religious Practices",
  "Cultural events and exhibition",
  "Traditional Cuisine",
  "Art and Creativity",
  "History and Heritage",
];
const FilterByCategory = ({ onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category);
  };

  return (
    <StyledFilter>
      {categories.map((category) => (
        <FilterButton
          key={category}
          onClick={() => handleCategorySelect(category)}
          selected={selectedCategory === category}
        >
          {category}
        </FilterButton>
      ))}
    </StyledFilter>
  );
};

const StyledFilter = styled.div`
  display: flex;
  justify-content: space-around;
  background-color: #f0f0f0;
  padding: 10px;
  margin-bottom: 20px;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border: none;
  cursor: pointer;
  background-color: ${({ selected }) => (selected ? "#3498db" : "#fff")};
  color: ${({ selected }) => (selected ? "#fff" : "#333")};
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #3498db;
    color: #fff;
  }
`;

export default FilterByCategory;
