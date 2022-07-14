import React, { useState } from 'react';
import styled from 'styled-components';
import JobCard from './JobCard';
import data from '../data.json';

const Main = () => {
  const [filter, setFilter] = useState({
    filterOn: false,
    filterBy: null,
    filterList: [],
    jobs: data,
  });

  const handleFilter = entry => {
    setFilter({
      filterOn: true,
      filterBy: entry,
      filterList: [...filter.filterList, entry],
      jobs: filter.jobs.filter(job => {
        const list = [...job.languages, ...job.tools, job.role, job.level];
        return list.includes(entry);
      }),
    });
  };

  console.log(filter);
  return (
    <StyledMain>
      {/* Job Filter */}
      <JobList>
        {!filter.filterOn &&
          filter.jobs.map(job => (
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
              onClick={handleFilter}
            />
          ))}

        {filter.filterOn &&
          filter.jobs.map(job => (
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
              onClick={handleFilter}
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
