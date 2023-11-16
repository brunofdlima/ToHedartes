/* eslint-disable jsx-a11y/alt-text */
import { FaWhatsapp } from "react-icons/fa";
import { RiInstagramLine } from "react-icons/ri";

import React from "react";

const logo = require("./img/hedartes.png");

function App() {
  return (
    <div className="bg-gradient-to-r from-sky-300 to-emerald-200 h-screen px-[12%] pt-10">
      <header className="flex justify-between h-10 items-center">
        <img src={logo} className="h-24 w-24" />
        <div className="flex">
          <a
            href="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Preciso de ajuda.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <button className="bg-green-500 w-36 h-9 ml-4 rounded-full flex items-center justify-center hover:bg-green-600 duration-[500ms] hover:duration-[500ms]">
              <p className="text-xl">Contato</p>
              <FaWhatsapp className="h-7 w-7 ml-2"/>
            </button>
          </a>
          <a
            href="https://www.instagram.com/hedartesoficial/"
            target="_blank"
            className="ml-4 hover:text-[#FF0069] hover:duration-500 duration-500"
            rel="noreferrer"
          >
            <RiInstagramLine className="h-10 w-10" />
          </a>
        </div>
      </header>
      <section className="body">
        <div className="h-[700px] rounded-xl mt-14 bg-white bg-opacity-20 backdrop-blur-lg drop-shadow-lg flex justify-center items-center">
          <div className="font-bold">CONTEÚDO AQUI</div>
        </div>
      </section>
      <footer className="text-sm mt-10">
        Copyright © 2023 github.com/brunofdlima.
      </footer>
    </div>
  );
}

export default App;
