import React, { useState } from "react";
import styled from "styled-components";
import "../fonts/fonts.css";
import Work from "./Work";

const Cards = styled.ul`
  position: relative;
  height: 100%;
  width: 100%;
  padding: 0 40px 0px 0px;
  list-style: none;
  overflow: hidden;
`;

const Works = () => {
  let [worksList, setWorkList] = useState([
    {
      name: "vibal",
      focus: false,
    },
    {
      name: "superGood",
      focus: false,
    },
    {
      name: "lets watch",
      focus: false,
    },
    {
      name: "backend",
      focus: false,
    },
    {
      name: "mergn",
      focus: false,
    },
  ]);

  function focusing(e) {
    setWorkList((prevState) => {
      let index = [...document.querySelectorAll(".work")].indexOf(e.target);
      prevState.forEach((el) => {
        if (prevState[index] === el) {
          return [el, { focus: true }];
        } else {
          return el;
        }
      });
    });
  }

  return (
    <Cards>
      {worksList.map((workObj) => {
        return <Work key={workObj.name} handler={focusing} index={worksList.indexOf(workObj)} name={workObj.name}></Work>;
      })}
    </Cards>
  );
};

export default Works;
