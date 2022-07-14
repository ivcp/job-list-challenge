import React, { useState } from 'react';
import styled from 'styled-components';
import JobCard from './JobCard';
import data from '../data.json';
import FilterCard from './FilterCard';

const Main = () => {
  const [filter, setFilter] = useState({
    filterOn: false,
    filterBy: null,
    filterList: [],
    jobs: data,
  });

  const addFilter = entry => {
    setFilter({
      filterOn: true,
      filterBy: entry,
      filterList: filter.filterList.includes(entry)
        ? [...filter.filterList]
        : [...filter.filterList, entry],
      jobs: filter.jobs.filter(job => {
        const list = [...job.languages, ...job.tools, job.role, job.level];
        return list.includes(entry);
      }),
    });
  };

  const removeFilter = entry => {
    const removedEntries = data.filter(job => {
      const list = [...job.languages, ...job.tools, job.role, job.level];
      return !list.includes(entry);
    });
    const newList = [...filter.filterList].filter(item => item !== entry);
    setFilter({
      filterBy: entry,
      filterList: newList,
      filterOn: newList.length > 0,
      //TODO: filter broken
      jobs: [...filter.jobs].concat(removedEntries),
    });
  };

  return (
    <StyledMain>
      {filter.filterOn && (
        <FilterCard filter={filter.filterList} onRemoveFilter={removeFilter} />
      )}
      <JobList margin={!filter.filterOn}>
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
              onClick={addFilter}
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
              onClick={addFilter}
            />
          ))}
      </JobList>
    </StyledMain>
  );
};

// Styles

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-inline: auto;
`;

const JobList = styled.div`
  margin-top: ${props => (props.margin ? '7.6rem ' : '1rem')};
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`;

export default Main;
