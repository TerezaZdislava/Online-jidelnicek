import React from 'react';
import styled from 'styled-components';
import Medailon from './Medailon.js';

const StyledAbout = styled.div`
  margin: 0;
  display: block;
  h2 {
    font-family: 'Poppins';
    text-align: center;
    font-size: 1.4rem;
    margin: 10%;
    margin-bottom: 1%;
    margin-top: 15%;
    display: flex;
    justify-content: center;
  }
  @media (min-width: 1000px) {
    justify-content: center;
    align-items: center;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1.3rem;
    h2 {
      font-size: 1.5rem;
    }
    .medailonky {
      display: flex;
      align-items: top;
      .medailon {
        width: 30%;
        height: fit-content;
      }
    }
  }
  @media (min-width: 1200px) {
    h2 {
      font-size: 2rem;
    }
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <h2>Na projektu se podílely 🙌</h2>
      <div className="medailonky">
        <Medailon
          className="medailon"
          title="WebMaster, WebDesign"
          img="terkadanca.png"
          alt="Daniela Kůsová a Tereza Baštová"
          name="Daniela Kůsová a Tereza Baštová"
          text="Věříme, že online jídelníček pomůže nastartovat tvoji cestu za vyváženým a zdravým způsobem stravování. Nejsme zastánkyně hladovění a přísných diet. Naopak, náš jídelníček je pestrý, dlouhodobě udržitelný a porce jsou na míru Tvé spotřebě energie. Garantujeme, že si pochutnáš na spoustě výtečných jídel. V našich receptech nenajdeš žádné umělé proteiny či cukry. Recepty do databáze píšeme z vlastní kladné zkušenosti po poradě s nutričními specialisty."
        />
        <Medailon
          className="medailon"
          title="Výživová poradkyně a osobní trenérka"
          img="janicka.jpg"
          alt="Výživová poradkyně"
          name="Ing. Jana Slámová"
          text="Do zdravého životního stylu jsem se doslova zamilovala. Je skvělé, že ho mohu šířit dál mezi další nadšence. Diety, které představují pro člověka velké restrikce nejsou pro člověka dlouhodobě udržitelné a většina dietářů se poté vrátí na svůj výchozí bod a nebo se dokonce dostaví jojo efekt. Svým klientům chci ukazovat cestu, která možná bude pomalejší než zázračné diety z reklam, ale bude zdravá pro tělo a dosažené výsledky si udržíte dlouhodobě. Všem Vám držím moc palce v cestě za Vašimi sny."
        />
        <Medailon
          className="medailon"
          title="Food fotografka a Poradce pro výživu"
          img="maky.jpg"
          alt="Maky Bašková"
          name="Maky Bašková"
          text="Jsem milovnice fitness, zdravého jídla a dobrot, která se každým dnem snaží posouvat dopředu a motivovat ostatní! ❤ Vždycky říkám, že je vše o disciplíně a není správné se do věcí nutit. Člověk si v první řadě sám musí uvědomit, PROČ začal a čeho chce dosáhnout. Já sama si tohle uvědomila již dávno a hlavně tuhle myšlenku chci předávat i dál. Nevzdávat se, sečkat a bojovat!"
        />
      </div>
    </StyledAbout>
  );
};

export default About;
