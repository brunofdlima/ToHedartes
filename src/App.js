import ImageCarousel from "./components/Carousel";
import Serviço from "./components/complexes/Serviços.tsx";
import Nav from "./components/complexes/Navbar.tsx";
import Initial from "./components/complexes/Initial.tsx";

import React from "react";

const perfilcores = require("./img/perfilcores.png");
const catalogo = require("./img/catalogodigital.png");
const corel = require("./img/corel.png");

function App() {
  return (
    <div>
      <Initial />
      <Nav />
      <section className="body w-screen">
        <ImageCarousel />
        <h1 className="px-[20%] font-bold text-2xl pt-6">SERVIÇOS QUE REALIZAMOS</h1>
        <Serviço imageUrl={perfilcores} title="PERFIL DE CORES" description="O perfil de cor é necessário para as impressoras ou Plotters, pois proporciona a cor correta da mídia. Esta extensão consegue proporcionar economia de tinta pois identifica a quantidade exata de pigmento que será usada."></Serviço>
        <Serviço edit="flex-row-reverse" imageUrl={catalogo} title="CATÁLOGO DIGITAL" description="O catálogo digital, também chamado de virtual ou online, é uma ferramenta utilizada para apresentar os produtos ou serviços de uma empresa em formato digital."></Serviço>
        <Serviço imageUrl={corel} title="CURSO COREL" description="O Corel DRAW é um dos principais aplicativos gráficos de editoração utilizado no mercado para desenvolver ilustração vetorial e de arte final, ou seja criar ilustrações para jornais, livros e revistas para todo tipo de mídia, impressa e eletrônica."></Serviço>
      </section>
      <footer className="text-sm mt-10">
        Copyright © 2024
      </footer>
    </div>
  );
}

export default App;
