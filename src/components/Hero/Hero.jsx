import {
  HeroSection,
  HeroSectionWrapper,
  SlidingTextContainer,
  TextContainer,
  ButtonCtn,
  SloganCtn,
  InfoCtn,
} from './heroStyle';
import { motion } from 'framer-motion';

const slidingTextVariants = {
  initial: {
    x: '100%',
  },
  animate: {
    x: 0,
    transition: {
      duration: 16,
    },
  },
};

const textVariants = {
  // initial: {
  //   y: 20,
  //   opasity: 0,
  // },
  // animate: {
  //   y: 0,
  //   opacity: 1,
  //   transition: {
  //     duration: 1,
  //     staggerChildren: 0.1,
  //   },
  // },
  initial: {
    y: 100,
    opasity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    delay: '5s',
    transition: {
      duration: 2,
      // ease: 'easeInOut',
      // // staggerChildren: 0.1,
    },
  },
};

const text = "Software per l'automazione industriale.".split(' ');

const Hero = () => {
  return (
    <HeroSection>
      <HeroSectionWrapper>
        <TextContainer variants={textVariants} initial='initial' animate='animate'>
          <SloganCtn>
            <motion.h1>Software</motion.h1>
            <motion.h1>per l'automazione</motion.h1>
            <motion.h1> industriale.</motion.h1>
          </SloganCtn>
          <InfoCtn>
            <motion.ul>
              <motion.li>
                Creazione del programma a misura dell'esigenze produttive per ogni cliente.
              </motion.li>
              <motion.li>
                Trasformazione dei dati dalle macchine industriali per integrazione con gestionale
                amministrativa tramite protocollo HTTP.
              </motion.li>
              <motion.li>Semplificazione per la preparazione ad INDUSTRIA 4.0 / 5.0.</motion.li>
            </motion.ul>
          </InfoCtn>
          <ButtonCtn>
            <motion.button className='button' whileTap={{ scale: 0.85 }}>
              PROGETTI
            </motion.button>
          </ButtonCtn>
        </TextContainer>
        {/* <ImageContainer>
          <img src='/hero_30.png' alt='' />
        </ImageContainer> */}
      </HeroSectionWrapper>

      <SlidingTextContainer variants={slidingTextVariants} initial='initial' animate='animate'>
        L'ATELIER DEL SOFTWARE MACHINE
      </SlidingTextContainer>
    </HeroSection>
  );
};

export default Hero;

// const text = "Software per l'automazione industriale.".split(' ');

// <TextContainer variants={textVariants} initial='initial' animate='animate'>
//           {/* <motion.h1>Software per l'automazione industriale.</motion.h1> */}
//           {text.map((el, i) => (
//             <motion.h1
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{
//                 duration: 1,
//                 delay: i / 10,
//               }}
//               key={i}
//             >
//               {el}{' '}
//             </motion.h1>
//           ))}
//           <motion.ul>
//             <motion.li>Misurazione e grafici per le bilance di precisione.</motion.li>
//             <motion.li>Gestione di produzione di un magazzino.</motion.li>
//             <motion.li>Monitoraggio online dei dati acquisiti tramite Scada.</motion.li>
//           </motion.ul>
//           <motion.button className='button' whileTap={{ scale: 0.85 }}>
//             Click me!
//           </motion.button>
//         </TextContainer>

// const textVariants = {
//   initial: {
//     y: 20,
//     opasity: 0,
//   },
//   animate: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 1,
//       staggerChildren: 0.1,
//     },
//   },
// };
