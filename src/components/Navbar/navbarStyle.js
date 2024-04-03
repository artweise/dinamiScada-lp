import styled from 'styled-components';
import { SPACING, FlexContainer } from '../../utilities/globalStyles';

export const NavbarWrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
`;

export const StyledNavbar = styled(FlexContainer)`
  height: 96px;
  width: 100%;
  justify-content: space-between;
  //   background-color: #544a4a;
  background-color: transparent;
  color: #b48d28;
  align-items: center;
  padding: 0 4rem;

  a {
    color: inherit;
    text-decoration: none;
    height: 100%;
    display: flex;
    //   align-items: center;
    align-items: stretch;
    padding: 0.25rem;
  }

  img {
    padding: 6px;
    height: 96px;
  }

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    display: flex;
    gap: 3rem;

    li {
      a {
        &.current {
          border-bottom: 2px solid #544a49;
        }
        &:hover {
          border-bottom: 2px solid #544a49;
          transition: all 0.1s ease-out;
        }
      }
    }
  }
`;
