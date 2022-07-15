import React from 'react';
import styled from 'styled-components';
import Card from '../components/UI/Card';
import Tablet from './Tablet';

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
  onClick,
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
              <h2>{company}</h2>
              {isNew && <NewOrFeatured new>NEW!</NewOrFeatured>}
              {isFeatured && <NewOrFeatured>FEATURED!</NewOrFeatured>}
            </div>
            <a href="/" onClick={e => e.preventDefault()}>
              <h1>{position}</h1>
            </a>
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
          {role && <Tablet onClick={onClick}>{role}</Tablet>}
          {level && <Tablet onClick={onClick}>{level}</Tablet>}
          {languages.length > 0 &&
            languages.map(lang => (
              <Tablet onClick={onClick} key={lang}>
                {lang}
              </Tablet>
            ))}
          {tools.length > 0 &&
            tools.map(tool => (
              <Tablet onClick={onClick} key={tool}>
                {tool}
              </Tablet>
            ))}
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

  @media (max-width: 50em) {
    flex-direction: column;
    align-items: flex-start;
    padding: 2rem;
  }

  & :first-child {
    display: flex;

    @media (max-width: 50em) {
      flex-direction: column;
    }
  }

  & :last-child {
    align-self: center;
    display: flex;
    gap: 1.5rem;

    @media (max-width: 50em) {
      flex-wrap: wrap;
      align-self: flex-start;
    }
  }
`;

const Image = styled.div`
  img {
    display: block;
    margin-right: 2rem;

    @media (max-width: 50em) {
      width: 6rem;
    }
  }

  @media (max-width: 50em) {
    align-self: flex-start;
    transform: translateY(-100%);
  }
`;

const JobDescription = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 50em) {
    margin-top: -4rem;
  }

  & :first-child {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media (max-width: 50em) {
      flex-direction: row;
    }
  }

  a {
    text-decoration: none;
  }
  h1 {
    font-size: 2.2rem;
    color: ${({ theme }) => theme.dark};
    transition: color 0.2s;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  h2 {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.primary};
    margin-right: 1rem;
  }

  & :last-child {
    display: flex;
    gap: 1.5rem;

    @media (max-width: 50em) {
      align-self: flex-start;
    }

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

  @media (max-width: 50em) {
    &::after {
      content: '';
      width: 36rem;
      border-bottom: 2px solid #ccc;
      margin-bottom: 2rem;
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
