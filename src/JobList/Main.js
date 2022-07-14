import React from 'react';
import styled from 'styled-components';
import JobCard from './JobCard';
import data from '../data.json';

const Main = () => {
  return (
    <StyledMain>
      {/* Job Filter */}
      <JobList>
        {data.map(job => (
          <JobCard
            key={job.id}
            company={job.company}
            logo={job.logo}
            isNew={job.new}
            isFeatured={job.featured}
            position={job.position}
            role={job.role}
            level={job.level}
            languages={job.languages}
            postedAt={job.postedAt}
            contract={job.contract}
            location={job.location}
            tools={job.tools}
          />
        ))}
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
  margin-inline: auto;
`;

const JobList = styled.div`
  margin-top: 7.6rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;
