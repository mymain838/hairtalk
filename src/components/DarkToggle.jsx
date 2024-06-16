import { useState } from "react";
import styled from "styled-components";
import { useTheme } from "../theme/ThemeProvider";

const Toggle = styled.div`
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  position: fixed;
  right: 50px;
  top: 40px;
  border-radius: 25px;
  background-color: ${({ theme }) => (theme === "light" ? "white" : "grey")};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (max-width: 920px) {
    right: 10px;
    top: 10px;
  }
`;

const DarkToggle = () => {
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <Toggle onClick={toggleTheme} theme={ThemeMode}>
      {ThemeMode === "light" ? (
        <img style={{ width: "60px", height: "60px" }} src="/moon.png" />
      ) : (
        <img style={{ width: "60px", height: "60px" }} src="/sun.png" />
      )}
    </Toggle>
  );
};
export default DarkToggle;
