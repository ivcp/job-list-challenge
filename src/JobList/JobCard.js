import React from 'react';
import styled from 'styled-components';
import Card from '../components/UI/Card';
import Category from '../components/UI/CategoryBtn';

const JobCard = ({
  company,
  logo,
  isNew,
  isFeatured,
  position,
  role,
  level,
  languages,
  postedAt,
  contract,
  location,
  tools,
}) => {
  return (
    <Card border={isNew || isFeatured}>
      <Container>
        <div>
          <Image>
            <img src={logo} alt="employer-logo" />
          </Image>
          <JobDescription>
            <div>
              <h4>{company}</h4>
              {isNew && <NewOrFeatured new>NEW!</NewOrFeatured>}
              {isFeatured && <NewOrFeatured>FEATURED!</NewOrFeatured>}
            </div>
            <h1>{position}</h1>
            <div>
              <p>{postedAt}</p>
              <span>.</span>
              <p>{contract}</p>
              <span>.</span>
              <p>{location}</p>
            </div>
          </JobDescription>
        </div>
        <div>
          {role && <Category>{role}</Category>}
          {level && <Category>{level}</Category>}
          {languages.length > 0 &&
            languages.map(lang => <Category key={lang}>{lang}</Category>)}
          {tools.length > 0 &&
            tools.map(tool => <Category key={tool}>{tool}</Category>)}
        </div>
      </Container>
    </Card>
  );
};

export default JobCard;

// Styles

const Container = styled.article`
  padding: 3rem;
  display: flex;
  justify-content: space-between;

  & :first-child {
    display: flex;
  }

  & :last-child {
    align-self: center;
    display: flex;
    gap: 1.5rem;
  }
`;

const Image = styled.div`
  img {
    display: block;
    margin-right: 2rem;
  }
`;

const JobDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & :first-child {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  h1 {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.dark};
  }

  h4 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.primary};
    margin-right: 1rem;
  }

  & :last-child {
    display: flex;
    gap: 1.5rem;

    p {
      font-size: 1.8rem;
      color: ${({ theme }) => theme.light};
    }

    span {
      font-size: 2.5rem;
      line-height: 0.3;
      color: ${({ theme }) => theme.light};
    }
  }
`;

const NewOrFeatured = styled.span`
  font-size: 1.5rem;

  width: min-content;
  color: ${({ theme }) => theme.filterTable};
  padding: 0.6rem 0.7rem 0.5rem 0.7rem;
  border-radius: 2rem;
  background-color: ${props =>
    props.new ? ({ theme }) => theme.primary : ({ theme }) => theme.dark};
`;
