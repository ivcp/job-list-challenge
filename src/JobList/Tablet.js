import React from 'react';
import styled from 'styled-components';

const Tablet = ({ children, onClick }) => {
  return (
    <StyledCategory onClick={() => onClick(children)}>
      {children}
    </StyledCategory>
  );
};

//Styles

const StyledCategory = styled.button`
  border: none;
  font-family: inherit;
  font-size: 1.7rem;
  font-weight: 700;
  padding: 0.7rem;
  border-radius: 0.4rem;
  color: ${({ theme }) => theme.primary};
  background-color: ${({ theme }) => theme.filterTable};
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${({ theme }) => theme.filterTable};
    background-color: ${({ theme }) => theme.primary};
  }
`;

export default Tablet;
