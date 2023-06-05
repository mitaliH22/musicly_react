import styled from "styled-components";

export const Card = styled.section`
  position: relative;
  border-radius: 6px;
  height: 150px;
  width: 250px;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    20deg,
    rgba(2, 0, 36, 1) 0%,
    rgb(213 23 76 / 84%) 18%,
    rgb(0 212 255 / 32%) 100%
  );
`;

export const StyledCard = styled(Card)`
  background: rgb(8, 0, 13);
  background: linear-gradient(
    20deg,
    rgba(8, 0, 13, 1) 0%,
    #673ab7 50%,
    rgb(235 217 217) 100%
  );
`;
export const CardCategory = styled.h3`
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  color: white;
  position: absolute;
  bottom: 0;
  width: 250px;
  height: 50px;
  text-align: left;
  margin: 0;
  padding: 0px 10px;
  display: flex;
  flex-direction: column;
  opacity: 0.85;
`;

