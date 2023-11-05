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
          <li
            style={{
              backgroundColor:
                router.pathname === `${item.page}` ? "#e3173e" : "#333",
            }}
            onClick={() =>
              router.push(
                item.page,
                item.page === "_blog" && {
                  query: {
                    catergory: "historyandheritage",
                  },
                }
              )
            }
          >
            {item.item}
          </li>
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
    page: "/_videos",
  },
  {
    _id: "hdhdjdhdhsa",
    item: "Bookshop",
    page: "/_bookshop",
  },
  {
    _id: "hdhskksadd",
    item: "Articles",
    page: "/_blog",
  },
  // {
  //   _id: "hdhd",
  //   item: "Bookshop",
  //   page: "_bookshop",
  // },
  // {
  //   _id: "hdhd",
  //   item: "Contact Us",
  //   page: "_contact",
  // },
];
