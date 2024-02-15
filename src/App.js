import { FaWhatsapp, FaInstagram  } from "react-icons/fa";

import ImageCarousel from "./components/Carousel";
import Buttom from "./components/Buttom";

import React from "react";

const logo = require("./img/hedartes.png");
const perfilcores = require("./img/perfilcores.png");
const catalogo = require("./img/catalogodigital.png");
const corel = require("./img/corel.png");

function App() {
  return (
    <div>
      <header className="flex justify-between max-md:flex-col h-34 items-center bg-gradient-to-r from-sky-300 to-emerald-200 px-[20%] pt-1 w-screen fixed p-0 z-50">
        <img src={logo} className="h-24 w-24" alt="logo" />
        <div className="flex max-md:py-2">
          <a
            href="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Preciso de ajuda.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-white border transition duration-1000 border-1 p-[0.3125rem] relative w-48 h-9 text-[1.0625rem] rounded-full group flex justify-center hover:bg-[#008000]">
              <p className="absolute font-bold transition text-[#008000] transform group-hover:-translate-x-5 group-hover:text-white duration-1000">
                Whatsapp
              </p>
              <FaWhatsapp className="absolute top-[0.45em] right-[0.5em] opacity-0 mr-6 transition h-[1em] fill-[#fff] group-hover:opacity-100 duration-1000" />
            </button>
          </a>
          <a href="https://www.instagram.com/hed.artes.oficial/" target="blank"><FaInstagram className="h-10 w-14 text-pink-500 hover:text-pink-700 duration-500"/></a>
        </div>
      </header>
      <div className="grid grid-cols-8 gap-1 max-2xl:grid-cols-4 max-md:grid-cols-2 bg-gradient-to-r from-sky-300 to-emerald-200 opacity-90 pt-28 pb-4 px-[20%]">
        <Buttom name="Curso corel" link="https://drive.google.com/drive/folders/1Zq2aeZUU2OEcQRR2Nbe2H3c7Dx6se6wT?usp=drive_link"></Buttom>
        <Buttom name="Dicas sublimação" link="https://drive.google.com/drive/folders/1DwlOYtGzt60Gd8xgOoS3rW1jfYcp9rdV?usp=sharing"></Buttom>
        <Buttom name="Reset impressora" link="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Preciso resetar minha impressora.&type=phone_number&app_absent=0"></Buttom>
        <Buttom name="Grupos whatsapp" link="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Tenho interesse nos grupos do wpp.&type=phone_number&app_absent=0"></Buttom>
        <Buttom name="Programas"></Buttom>
        <Buttom name="Fornecedores"></Buttom>
        <Buttom name="Sites de trabalho"></Buttom>
        <Buttom name="Para membros"></Buttom>
      </div>
      <section className="body w-screen">
        <ImageCarousel />
        <h1 className="px-[20%] font-bold text-2xl pt-6">SERVIÇOS QUE REALIZAMOS</h1>
        <div className="px-[20%] my-12 flex">
          <img src={perfilcores} className="h-40 w-80 rounded-3xl" alt="perfilcores" />
          <div className="ml-6">
            <h2 className="font-bold">PERFIL DE CORES</h2>
            <p>O perfil de cor é necessário para as impressoras ou Plotters, pois proporciona a cor correta da mídia. Esta extensão consegue proporcionar economia de tinta pois identifica a quantidade exata de pigmento que será usada.</p>
            <p className="mt-3">Confira no <button className="bg-green-400 hover:bg-green-600 duration-500 rounded-full w-32 ml-4"><a href="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Preciso de ajuda.&type=phone_number&app_absent=0" target="blank">Whatsapp</a></button></p>
          </div>
        </div>
        <div className="px-[20%] my-12 flex">
          <div className="ml-6">
            <h2 className="font-bold">CATÁLOGO DIGITAL</h2>
            <p>O catálogo digital, também chamado de virtual ou online, é uma ferramenta utilizada para apresentar os produtos ou serviços de uma empresa em formato digital.</p>
            <p className="mt-3">Confira no <button className="bg-green-400 hover:bg-green-600 duration-500 rounded-full w-32 ml-4"><a href="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Preciso de ajuda.&type=phone_number&app_absent=0" target="blank">Whatsapp</a></button></p>
          </div>
          <img src={catalogo} className="h-40 w-80 rounded-3xl" alt="perfilcores" />
        </div>
        <div className="px-[20%] my-12 flex">
          <img src={corel} className="h-40 w-80 rounded-3xl" alt="perfilcores" />
          <div className="ml-6">
            <h2 className="font-bold">CURSO COREL</h2>
            <p>O Corel DRAW é um dos principais aplicativos gráficos de editoração utilizado no mercado para desenvolver ilustração vetorial e de arte final, ou seja criar ilustrações para jornais, livros e revistas para todo tipo de mídia, impressa e eletrônica.</p>
            <p className="mt-3">Confira no <button className="bg-green-400 hover:bg-green-600 duration-500 rounded-full w-32 ml-4"><a href="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Preciso de ajuda.&type=phone_number&app_absent=0" target="blank">Whatsapp</a></button></p>
          </div>
        </div>
      </section>
      <footer className="text-sm mt-10">
        Copyright © 2024
      </footer>
    </div>
  );
}

export default App;
