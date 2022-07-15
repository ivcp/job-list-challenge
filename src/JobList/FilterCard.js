import React from 'react';
import Card from '../components/UI/Card';
import FilteredBtn from './FilteredBtn';
import styled from 'styled-components';

const FilterCard = ({ filter, onRemoveFilter, onClearFilter }) => {
  return (
    <Container>
      <Card>
        <FilterWrapper>
          <div>
            {filter.map(category => (
              <FilteredBtn onRemoveFilter={onRemoveFilter} key={category}>
                {category}
              </FilteredBtn>
            ))}
          </div>
          <Clear onClick={onClearFilter}>Clear</Clear>
        </FilterWrapper>
      </Card>
    </Container>
  );
};

// Styles

const Container = styled.div`
  transform: translateY(-50%);

  @media (max-width: 50em) {
    width: 90%;
    display: flex;
    justify-content: center;
  }
`;

const FilterWrapper = styled.div`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;

  & :first-child {
    display: flex;
    @media (max-width: 50em) {
      flex-wrap: wrap;
    }
  }
`;

const Clear = styled.button`
  font-family: inherit;
  font-size: 1.6rem;
  font-weight: 700;
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  transition: all 0.2s;

  @media (max-width: 50em) {
    color: ${({ theme }) => theme.light};
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default FilterCard;
