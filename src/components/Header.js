import React from 'react';
import styled from 'styled-components';

const Header = () => {
  return <HeaderImage />;
};

export default Header;

// Styles

const HeaderImage = styled.header`
  background: url('./images/bg-header-desktop.svg') center no-repeat;
  background-color: ${({ theme }) => theme.primary};
  background-size: 100%;
  height: 15.6rem;
  width: 100%;

  @media (max-width: 50em) {
    background: url('./images/bg-header-mobile.svg') center no-repeat;
    background-color: ${({ theme }) => theme.primary};
  }
`;
