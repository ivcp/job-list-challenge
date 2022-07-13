import React from 'react';
import styled from 'styled-components';
import JobCard from './JobCard';

const Main = () => {
  return (
    <StyledMain>
      {/* Job Filter */}
      <JobList>
        <JobCard />
      </JobList>
    </StyledMain>
  );
};

export default Main;

// Styles

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const JobList = styled.div`
  margin-top: 7.6rem;
`;
