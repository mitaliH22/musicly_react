import React from 'react'
import { FlipCardContainer, Title } from "../Styled";

function FlipCard(props) {
  const category = props.category;
  
  return (
    <FlipCardContainer>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {category.icons && (
            <img src={category.icons[0].url} alt={category.name} />
          )}
          {/* <img src={props.slide.img} alt="" width="100%" /> */}
        </div>
        <div className="flip-card-back">
          <Title align="center" color="Black">
            {category.name}
          </Title>
        </div>
      </div>
    </FlipCardContainer>
  );
}

export default FlipCard