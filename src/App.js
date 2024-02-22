import React from "react";

import ImageCarousel from "./components/Carousel";
import Serviço from "./components/complexes/Serviços.tsx";
import Nav from "./components/complexes/Navbar.tsx";
import Initial from "./components/complexes/Initial.tsx";

const perfilcores = require("./img/perfilcores.png");
const catalogo = require("./img/catalogodigital.png");
const corel = require("./img/corel.png");
const almofada = require("./img/almofada.jpg");

function App() {

  return (
    <div>
      <Initial />
      <Nav />
      <section className="w-screen">
        <ImageCarousel />
        <h1 className="px-[20%] font-bold text-2xl pt-6">
          SERVIÇOS QUE REALIZAMOS
        </h1>
        <Serviço
          whatsappLink="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Preciso de ajuda sobre perfil de cores.&type=phone_number&app_absent=0"
          imageUrl={perfilcores}
          title="PERFIL DE CORES"
          description="O perfil de cor é necessário para as impressoras ou Plotters, 
        pois proporciona a cor correta da mídia. Esta extensão consegue proporcionar economia de tinta pois identifica a quantidade exata de pigmento que será usada."
        ></Serviço>
        <Serviço
          whatsappLink="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Preciso de ajuda sobre catálogo digital.&type=phone_number&app_absent=0"
          edit="flex-row-reverse"
          imageUrl={catalogo}
          title="CATÁLOGO DIGITAL"
          description="O catálogo digital, também chamado de virtual ou online, é uma ferramenta utilizada para apresentar os produtos ou serviços de uma empresa em 
        formato digital."
        ></Serviço>
        <Serviço
          whatsappLink="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Preciso de ajuda sobre o curso de corel.&type=phone_number&app_absent=0"
          imageUrl={corel}
          title="CURSO COREL"
          description="O Corel DRAW é um dos principais aplicativos gráficos de editoração utilizado no mercado para desenvolver ilustração vetorial e de arte final, 
        ou seja criar ilustrações para jornais, livros e revistas para todo tipo de mídia, impressa e eletrônica."
        ></Serviço>
        <Serviço
          whatsappLink="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Preciso de ajuda sobre reset de almofada.&type=phone_number&app_absent=0"
          edit="flex-row-reverse"
          imageUrl={almofada}
          title="RESET ALMOFADA"
          description="Trata-se de uma funcionalidade que oferece maior resistência às impressoras, tornando-as melhores do que muitos concorrentes. O reset da almofada 
        de tinta, normalmente, é exigido a cada 15 mil cópias, mas este número varia 
        de acordo com cada modelo e capacidade de impressão."
        ></Serviço>
      </section>
      <footer className="text-sm mt-10">Copyright © 2024</footer>
    </div>
  );
}

export default App;
