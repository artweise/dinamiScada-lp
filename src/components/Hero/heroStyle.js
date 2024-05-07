import styled from 'styled-components';
import { SPACING, FlexContainer } from '../../utilities/globalStyles';
import { motion } from 'framer-motion';

export const HeroSection = styled(FlexContainer)`
  height: calc(100vh - 96px);
  position: relative;
  // background: linear-gradient(180deg, #211e1e, #4f4a4a);
  // background: linear-gradient(180deg, #383232, #4f4a4a); // 4f4545
  // background: linear-gradient(180deg, #383232, #6d5d5d);
  // background: linear-gradient(180deg, #383232, #685e5e);
  background-color: #4f4a4a;
  overflow: hidden;
`;

export const HeroSectionWrapper = styled(FlexContainer)`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.45);
  color: white;
  background-image: url('/hero_50_1.png');
  background-position: right 160px;
  background-size: 50%;
  background-repeat: no-repeat;
  background-attachment: fixed; /* Optional: If you want the background to remain fixed while scrolling */
  justify-content: left;
`;

export const TextContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 0px 0px 150px;
  align-items: flex-start;
  max-width: 48vw;
`;

export const SloganCtn = styled(FlexContainer)`
  flex-direction: column;
  // text-align: center;
  text-align: flex-start;
  font-size: 20px;
  letter-spacing: 2px;
  line-height: 60px;
  padding-left: 92px;
`;

export const InfoCtn = styled(FlexContainer)`
  flex-direction: column;
  font-size: 18px;
  line-height: 30px;
  padding-left: 115px;
`;

export const ButtonCtn = styled(FlexContainer)`
  padding-left: 100px;
  margin-top: 10px;
  // justify-content: center;
  button {
    font-size: 1.25rem;
    // margin-top: 40px;
    background-color: #c9a0dc;
    // background-color: #815cbc;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    cursor: pointer;
    border: none;
    color: #fafbfc;
    max-width: 150px;
    // margin: 0 10rem;
  }
`;

export const SlidingTextContainer = styled(motion.div)`
  position: absolute;
  font-size: 10vh;
  bottom: -2px;
  white-space: nowrap;
  color: #ffffff09;
  // width: 80%;
  width: 100%;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

// backround-image: ${({ url }) =>
//     `url(${'https://unsplash.com/photos/an-orange-and-brown-background-with-a-black-border-73U_5cXhWKE'})`}
