import styled from 'styled-components';
import { SPACING, FlexContainer } from '../../utilities/globalStyles';

export const HeroImageWrapper = styled(FlexContainer)`
  img {
    height: calc(100vh - 96px);
    width: 100vw;
    display: flex;
    position: relative;
    backround-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }
`;

export const HeroImageOverlay = styled(FlexContainer)`
  position: absolute;
  height: calc(100% - 96px);
  width: 100%;
  top: 96px;
  left: 0;
  background: rgba(0, 0, 0, 0.45);
  color: white;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 45px;
    letter-spacing: 0px;
    margin: 0 0 24px;
  }

  ul {
    margin: 0;

    li {
      font-size: 24px;
    }
  }
`;

// backround-image: ${({ url }) =>
//     `url(${'https://unsplash.com/photos/an-orange-and-brown-background-with-a-black-border-73U_5cXhWKE'})`}
