import React from 'react';
import styled from 'styled-components';

const Card = ({ border, children }) => {
  return <StyledCard border={border}>{children}</StyledCard>;
};

// Styles

const StyledCard = styled.div`
  max-width: 112.2rem;
  background-color: hsl(0 0% 100%);
  box-shadow: 0 1rem 1.5rem -0.3rem rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  border-left: 0.5rem solid
    ${props => (props.border ? ({ theme }) => theme.primary : 'none')};
`;

export default Card;
