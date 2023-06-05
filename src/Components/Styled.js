import styled from "styled-components";

export const Container = styled.div`
  max-width: 100%;
  width: 1200px;
  margin: 0 auto;
`;

const FlexWrapper = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  margin-left: ${(props) => props.marginLeft || "0px"};
`;



const Title = styled.h3`
  font-size: 20px;
  text-transform: capitalize;
  color: ${(props) => props.color || "palevioletred"};
  margin: 0;
  text-align: ${(props) => props.align || "left"};
  padding: ${(props) => props.padding || "0px"};
  background-color: ${(props) => props.background || "transparent"};
  backdrop-filter: blur(5px);
`;

const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px 30px 20px;
`;



const Card = styled.section`
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

const StyledCard = styled(Card)`
    background: rgb(8, 0, 13);
    background: linear-gradient(
      20deg,
      rgba(8, 0, 13, 1) 0%,
      #673ab7 50%,
      rgb(235 217 217) 100%
    );
`;
const CardCategory = styled.h3`
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

export const Album = styled.section`
width:300px;
height:200px;
`;

export const FlipCardContainer = styled.div.attrs({
  className: "FCard",
})`
  width: 300px;
  height: 300px;
  perspective: 1000px;
`;


export const Button = styled.button`
  font-size: 12px;
  border: 1px solid palevioletred;
`;
export {
  FlexWrapper,
  Navbar,
  Title,
  Card,
  StyledCard,
  CardCategory,
};