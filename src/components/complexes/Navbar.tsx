import React from "react";
import Buttom from "../Buttom";

const Nav = () => {
    return (
        <div className="grid grid-cols-8 gap-1 max-2xl:grid-cols-4 max-md:grid-cols-2 bg-gradient-to-r from-sky-300 to-emerald-200 opacity-90 pt-28 max-md:pt-[10.5rem] pb-4 px-[20%]">
            <Buttom name="Curso corel" link="https://drive.google.com/drive/folders/1Zq2aeZUU2OEcQRR2Nbe2H3c7Dx6se6wT?usp=drive_link"></Buttom>
            <Buttom name="Dicas sublimação" link="https://drive.google.com/drive/folders/1DwlOYtGzt60Gd8xgOoS3rW1jfYcp9rdV?usp=sharing"></Buttom>
            <Buttom name="Reset impressora" link="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Preciso resetar minha impressora.&type=phone_number&app_absent=0"></Buttom>
            <Buttom name="Grupos whatsapp" link="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Tenho interesse nos grupos do wpp.&type=phone_number&app_absent=0"></Buttom>
            <Buttom name="Programas"></Buttom>
            <Buttom name="Fornecedores"></Buttom>
            <Buttom name="Sites de trabalho"></Buttom>
            <Buttom name="Para membros"></Buttom>
      </div>
    )
};

export default Nav;
