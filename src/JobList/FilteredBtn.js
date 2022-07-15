import React from 'react';
import styled from 'styled-components';

const FilteredBtn = ({ children, onRemoveFilter }) => {
  return (
    <Btn>
      <label htmlFor={children}>{children}</label>
      <button id={children} onClick={() => onRemoveFilter(children)}></button>
    </Btn>
  );
};

// Styles

const Btn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1.5rem;

  @media (max-width: 50em) {
    margin-bottom: 1rem;
  }

  label {
    font-size: 1.6rem;
    font-weight: 700;
    padding: 0.75rem;
    border-top-left-radius: 0.4rem;
    border-bottom-left-radius: 0.4rem;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.filterTable};
  }

  button {
    border: none;
    font-family: inherit;
    background: url('./images/icon-remove.svg') center no-repeat;
    width: 3rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.primary};
    border-top-right-radius: 0.4rem;
    border-bottom-right-radius: 0.4rem;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.dark};
    }
  }
`;
export default FilteredBtn;
