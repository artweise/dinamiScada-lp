import { HeroImageWrapper, HeroImageOverlay } from './heroStyle';
import hero from './assets/backgroundImage-6.jpg';

const Hero = () => {
  return (
    <>
      <HeroImageWrapper>
        <img alt='hero' src={hero} />
        <HeroImageOverlay>
          <h1>Software per l'automazione industriale.</h1>
          <ul>
            <li>Misurazione e grafici per le bilance di precisione.</li>
            <li>Gestione di produzione di un magazzino.</li>
            <li>Monitoraggio online dei dati acquisiti tramite Scada.</li>
          </ul>
        </HeroImageOverlay>
      </HeroImageWrapper>
    </>
  );
};

export default Hero;
