import React from "react";
import StyledMenu from "./Menu.styles";

function Menu() {
  return (
    <StyledMenu>
      <div className="menuListContainer">
        <li>Home</li>
        <li>Articles</li>
        <li>Interviews</li>
        <li>Videos</li>
        <li>Catergories</li>
        <li>Donate</li>
        <li>Contact</li>
        <li>Search</li>
      </div>
     
    </StyledMenu>
  );
}

export default Menu;
