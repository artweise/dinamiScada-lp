import styled, { createGlobalStyle } from 'styled-components';

export const SPACING = {
  0: '0px',
  1: '4px',
  2: '8px',
  3: '16px',
  3.5: '24px',
  4: '32px',
  4.5: '48px',
  5: '64px',
  5.5: '96px',
  6: '128px',
  7: '256px',
  7.5: '384px',
  8: '512px',
  9: '1024px',
};

export const GlobalStyle = createGlobalStyle`
  *,
  * ::before,
  * ::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    font-size: ${SPACING[3]}
  }

  a {
    text-decoration: none;
    color: black;
  }

  body {
    background-color: #ffffff;
    height: 100vh;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
`;
