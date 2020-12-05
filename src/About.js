import React from 'react';
import styled from 'styled-components';
import Medailon from './Medailon.js';

const StyledAbout = styled.div`
  margin: 0;
  display: block;
  h2 {
    font-size: 1rem;
    margin: 10%;
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
  }
`;

const About = () => {
  return (
    <StyledAbout>
      <h2>Na projektu se podílely:</h2>
      <div className="medailonky">
        <Medailon
          className="medailon"
          title="WebMasters&Design, CEO, CMO a CS"
          img="terkadanca.png"
          alt="Daniela Kůsová a Tereza Baštová"
          name="Daniela Kůsová a Tereza Baštová"
          text="Milý, neznámý, děkujeme, že jsi zavítal na naší stránku a věříme, že online jídelníček ti pomůže nastartovat tvoji cestu za vyváženým a zdravým způsobem stravování a tak dokáže přispět ke snížení rizik, které jsou spojeny s obezitou. Rozhodně nejsme zastánkyně náhražek klasických potravin, proto v našich receptech nenajdeš žádné umělé proteiny či cukry. Recepty do databáze píšeme buď z vlastní kladné zkušenosti nebo po poradě s nutričními specialisty. Budeme rádi za jakýkoliv Feedback."
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
          img="makybfit.jpg"
          alt="Maky Bašková"
          name="Maky Bašková"
          text="ŽAČNI TEĎ HNED! Nečekej na správnou příležitost, neboť ta nikdy nenastane... nikdy nedovol, aby sis v hlavě říkal:,,Začnu za týden, dva, až po Vánocích, na Nový rok, apod.”, protože ti to dlouho nevydrží. Chce to jít po malých krůčkách a k dané věci se postupně přibližovat. Hlavní je, abychom se nenutili!! Jestli se dneska necítíš na trénink, odpočiň si - tělo ti maximálně tak poděkuje! Ráda jsem podpořila ONLINE JÍDELNÍČEK, protože věřím, že umožní široké veřejnosti pochopit principy zdravého stravování."
        />
      </div>
    </StyledAbout>
  );
};

export default About;
