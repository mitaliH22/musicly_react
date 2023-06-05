import React from 'react'
import {  FlexWrapper } from '../Styled'
import { Card , CardCategory , StyledCard } from './Styled';

function Cards() {
  return (
    <FlexWrapper>
      <StyledCard>
        <CardCategory>
          POP
          <small>Total Songs- 75</small>
        </CardCategory>
      </StyledCard>
      <Card>
        <CardCategory>
          INDIE
          <small>Total Songs- 22</small>
        </CardCategory>
      </Card>

      <StyledCard>
        <CardCategory>
          RAP
          <small>Total Songs- 23</small>
        </CardCategory>
      </StyledCard>

      <Card>
        <CardCategory>
          RETRO
          <small>Total Songs- 45</small>
        </CardCategory>
      </Card>

      <StyledCard>
        <CardCategory>
          ROCK
          <small>Total Songs- 35</small>
        </CardCategory>
      </StyledCard>
    </FlexWrapper>
  );
}

export default Cards