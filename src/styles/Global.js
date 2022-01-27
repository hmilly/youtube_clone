import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  
  * {
  box-sizing: border-box;
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

.index {
  display: grid;
  grid-template-rows: 60px 1fr;
  gap: 5px;
  grid-template-areas:
    "topNav"
    "sideNavContainer";
  max-height: 100vh;
  overflow: hidden;
.sideNavContainer {
  grid-area: sideNavContainer;
  display: grid;
  min-height: 0;
  gap: 5px;
  grid-template-areas: "sideNav videoContainer";


.videoContainer {
  grid-area: videoContainer;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 1fr;
  grid-gap: 5px;
  overflow-y: scroll;
  height: auto;
  background-color: rgb(243, 243, 243);

  
.scrollingDiv {
  display: grid;
  position: sticky;
  align-self: start;
  grid-template-columns: repeat(24, auto);
  grid-template-rows: auto;
  align-items: start;
  height: 60px;
  width: 100%;
  top: 0;
  scroll-behavior: smooth;
  gap: 4px 15px;
  background-color: white;
  border-bottom: 1px solid rgba(235, 232, 232, 0.618);
  border-top: 1px solid rgba(213, 213, 213, 0.618);
  padding: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
  z-index: 1;
  &::-webkit-scrollbar {
  display: none;
}
button {
  border: solid rgb(194, 194, 194) 1px;
  background-color: rgba(228, 228, 228, 0.659);
  border-radius: 20px;
  padding: 10px;
  font-size: 16px;
  white-space: nowrap;
  list-style-type: none;
  &:hover {
  cursor: pointer;
  transition: background-color 0.5s ease;
  background-color: black;
  color: white;
}
}
#scrollRight,
#scrollLeft {
  position: fixed;
  height: 54px;
  width: 56px;
  top: 68px;
  border: none;
  background-color: rgba(255, 255, 255, 0.907);
  font-size: 30px;
  border-radius: 0;
  &:hover{color: black;}
}
#scrollRight {
  right: 6px;
  align-self: end;
}
#scrollLeft {
  left: 255px;
  align-self: start;

}
}










}


}

  
}








span {
  display: inline-block;
  font-size: 25px;
  height: 100%;
  width: 100%;
  padding: 0;
  text-align: center;
  color: grey;
}

button:hover,
link:hover {
  cursor: pointer;
}
button:visited,
link:visited,
a:visited {
  text-decoration: none;
}

#blueBtn {
  display: grid;
  grid-template-columns: 50px 80px;
  grid-template-rows: 40px;
  align-items: center;
  border: solid 1px #065fd4;
  background-color: white;
  text-decoration: none;
  &:hover, &:visited, &:active{
    color: #065fd4;
  text-decoration: none;
  }
  span {
  justify-self: end;
  width: 28px;
  height: 28px;
  font-size: 18px;
  color: white;
  background-color: white;
  border: solid 1px #065fd4;
  border-radius: 50%;
}
p {
  justify-self: start;
  margin: 0 auto;
  font-size: 16px;
  color: #065fd4;
  font-weight: 600;
  &:hover, &:visited, &:active{
    color: #065fd4;
  text-decoration: none;
  }
}
}




`;
