import styled from "styled-components";

export const Sidebar = styled.ul`
  text-align: left;
  width: 150px;
  font-family: "Mukta", sans-serif;
  margin: 0;
  position: absolute;
  left: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
`;

export const Options = styled.h3.attrs({
  className: "options",
})`
  color: white;
  list-style-type: none;
  font-family: "Mukta", sans-serif;
  font-size: 20px;
  margin: 0;
  padding: 10px 0;
  position: ${(props) => props.position || "block"};
  z-index: 9;
  background: ${((props) => props.background) || "none"};
  text-decoration: none;
  display: flex;
  gap: 10px;
`;
