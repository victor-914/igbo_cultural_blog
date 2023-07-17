import styled from "styled-components";

const StyledMenu = styled.section`
  width: 100%;
  height: 15vh;
  background-color: #333333;
  margin:auto;
  display: none;
  .menuListContainer {
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: row;
    color: #fff;
    justify-content: space-around;
    align-items: center;
    margin: auto;
  }

  .menuListContainer li {
    font-weight: 800;
    text-transform: uppercase;
    list-style: none;
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

  #input{
    background-color: #000 !important;
    
  }

  .iconHolder {
    width: 10%;
    height: 100%;
    /* background-color: blue; */
  }
`;

export default StyledMenu;
