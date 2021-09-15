import React from "react"
import styled from "styled-components";

const fontSize = (size) => {
  switch (size) {
    case "large":
      return "4rem";
    case "med":
      return "3rem";
    default:
      return "2rem";
  }
};

const HeaderText = styled.h1`
text-align: center;
font-size ${(props)=>fontSize(props.size)} !important;
color: white !important
`

export default HeaderText;