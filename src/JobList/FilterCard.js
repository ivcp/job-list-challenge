import React from 'react';
import Card from '../components/UI/Card';
import FilteredBtn from './FilteredBtn';
import styled from 'styled-components';

const FilterCard = ({ filter, onRemoveFilter }) => {
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
          <Clear>Clear</Clear>
        </FilterWrapper>
      </Card>
    </Container>
  );
};

// Styles

const Container = styled.div`
  transform: translateY(-50%);
`;

const FilterWrapper = styled.div`
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;

  & :first-child {
    display: flex;
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

  &:hover {
    text-decoration: underline;
  }
`;

export default FilterCard;
