import React from 'react';
import styled from 'styled-components';
import Card from '../components/UI/Card';

const JobCard = () => {
  return (
    <Card border={true}>
      <Container>
        <div>
          <Image>
            <img src="/images/photosnap.svg" alt="employer-logo" />
          </Image>
          <JobDescription>
            <div>
              <h4>Photosnap</h4>
              <NewOrFeatured new>NEW!</NewOrFeatured>
              <NewOrFeatured>FEATURED</NewOrFeatured>
            </div>
            <h1>Senior Frontend Developer</h1>
            <div>
              <p>1d ago</p>
              <span>.</span>
              <p>Full Time</p>
              <span>.</span>
              <p>USA only</p>
            </div>
          </JobDescription>
        </div>
        {/* TODO: buttons */}
        <div>categories</div>
      </Container>
    </Card>
  );
};

export default JobCard;

// Styles
/// card height 153px

const Container = styled.article`
  padding: 3.2rem;

  & :first-child {
    display: flex;
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
  color: ${({ theme }) => theme.cardBg};
  padding: 0.6rem 0.7rem 0.5rem 0.7rem;
  border-radius: 2rem;
  background-color: ${props =>
    props.new ? ({ theme }) => theme.primary : ({ theme }) => theme.dark};
`;
