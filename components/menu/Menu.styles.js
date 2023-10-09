import styled from "styled-components";

const StyledMenu = styled.section`
  width: 100%;
  height: 50px;
  background-color: #333333;
  margin: auto;
  display: flex;
  justify-content: space-between;
  position: relative;

  header {
    width: auto;
    padding:  2px 8px 2px 15px;
    text-align: center;
    display: flex;
    font-weight: 600;
    align-items: center;
    font-size: 16px;
    color: #fff;
    background-color: #0088ff;
    justify-content: flex-end;
  }
  /* display: none; */
  .menuListContainer {
    width: 75%;
    height: 90%;
    display: flex;
    /* background-color: red; */
    flex-direction: row;
    color: #fff;
    justify-content: space-around;
    align-items: center;
    margin: auto;
  }

 

  .menuListContainer li {
    font-weight: 600;
    text-transform: uppercase;
    list-style: none;
    padding: 0px 7px 0px 7px;
    width: auto;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .menuListContainer li:hover {
    background-color: #0088ff !important;
    cursor: pointer;
  }

  .searchContainer {
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .inputHolder {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .inputHolder input {
    width: 100%;
    height: 70%;
    /* color: rgba(0,0,0,0.3); */
    background-color: #000 !important;
  }

  #input {
    background-color: #000 !important;
  }

  .iconHolder {
    width: 10%;
    height: 100%;
    /* background-color: blue; */
  }

  @media (min-width: 300px) and (max-width: 700px) {
    display: flex;
    .menuListContainer {
      display: none;
    }

    .mobileMenuContainer {
      display: flex;
    }

    header {
      width: 30%;
      font-weight: 800;
      align-items: center;
      font-size: 20px;
      color: #fff;
      justify-content: center;
    }
  }

  @media (min-width: 601px) {
    .mobileMenuContainer {
      display: none;
    }
  }
`;

export default StyledMenu;
