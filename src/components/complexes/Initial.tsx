import React from "react";

import { FaWhatsapp, FaInstagram  } from "react-icons/fa";

import logo from "../../img/hedartes.png";

const Initial = () => {
    return (
        <div className="flex justify-between max-md:flex-col h-34 items-center bg-gradient-to-r from-sky-300 to-emerald-200 px-[20%] pt-1 w-screen fixed p-0 z-50">
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
      </div>
    )
};

export default Initial;
