import React, { useState } from 'react';
import styled from 'styled-components';
import JobCard from './JobCard';
import data from '../data.json';
import FilterCard from './FilterCard';

const INITIAL_STATE = {
  filterOn: false,
  filterBy: null,
  filterList: [],
  jobs: data,
};

const Main = () => {
  const [filter, setFilter] = useState(INITIAL_STATE);

  const addFilter = category => {
    setFilter({
      filterOn: true,
      filterBy: category,
      filterList: filter.filterList.includes(category)
        ? [...filter.filterList]
        : [...filter.filterList, category],
      jobs: filter.jobs.filter(job => {
        const list = [...job.languages, ...job.tools, job.role, job.level];
        return list.includes(category);
      }),
    });
  };

  const removeFilter = category => {
    const newList = [...filter.filterList].filter(item => item !== category);
    if (!newList.length > 0) clearFilter();
    if (newList.length > 0) {
      const jobs = data.filter(job => {
        const list = [...job.languages, ...job.tools, job.role, job.level];
        return newList.every(item => list.includes(item));
      });
      setFilter({
        filterOn: true,
        filterBy: null,
        filterList: newList,
        jobs: jobs,
      });
    }
  };

  const clearFilter = () => {
    setFilter(INITIAL_STATE);
  };

  return (
    <StyledMain>
      {filter.filterOn && (
        <FilterCard
          filter={filter.filterList}
          onRemoveFilter={removeFilter}
          onClearFilter={clearFilter}
        />
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

  @media (max-width: 50em) {
    gap: 5rem;
    align-items: center;
  }
`;

export default Main;
