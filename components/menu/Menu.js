import React from "react";
import StyledMenu from "./Menu.styles";
import { useRouter } from "next/router";
import MobileMenu from "../mobileMenu/mobileMenu";

function Menu() {
  const router = useRouter();

  return (
    <StyledMenu>
      <header>Kulture</header>
      <div className="menuListContainer">
        {nav.map((item) => (
          <li onClick={() => router.push(item.page)}>{item.item}</li>
        ))}
      </div>
      <div className="mobileMenuContainer">
        <MobileMenu />
      </div>
    </StyledMenu>
  );
}

export default Menu;

export const nav = [
  {
    _id: "hdhjdjsd",
    item: "Home",
    page: "/",
  },
  {
    _id: "hdhddhdhsa",
    item: "Videos",
    page: "_videos",
  },
  {
    _id: "hdhskksadd",
    item: "Posts",
    page: "_blog",
  },
  {
    _id: "hdhd",
    item: "Bookshop",
    page: "_bookshop",
  },
  {
    _id: "hdhd",
    item: "Contact Us",
    page: "_contact",
  },
];
