import React from "react";
import Buttom from "../Buttom.tsx";

import { Modal } from "../Modals/Modal.tsx";
import { Serviços } from "../Modals/Serviços.tsx";
import { Drive } from "../Modals/Drive.tsx";
import { Pastas } from "../Modals/Pastas.tsx";

const Nav = () => {
  const [ModalPastasIsOpen, setModalPastasIsOpen] = React.useState(false);
  const [ModalDriveIsOpen, setModalDriveIsOpen] = React.useState(false);
  const [ModalServiçosIsOpen, setModalServiçosIsOpen] = React.useState(false);

  return (
    <div className="grid grid-cols-8 gap-1 max-2xl:grid-cols-4 max-md:grid-cols-2 bg-gradient-to-r from-sky-300 to-emerald-200 opacity-90 pt-28 max-md:pt-[10.5rem] pb-4 px-[20%]">
      <Buttom
        locale="top"
        link="https://drive.google.com/drive/folders/1Zq2aeZUU2OEcQRR2Nbe2H3c7Dx6se6wT?usp=drive_link"
      >
        Curso corel
      </Buttom>
      <Buttom
        locale="top"
        link="https://drive.google.com/drive/folders/1DwlOYtGzt60Gd8xgOoS3rW1jfYcp9rdV?usp=sharing"
      >
        Dicas sublimação
      </Buttom>
      <Buttom
        locale="top"
        link="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Preciso resetar minha impressora.&type=phone_number&app_absent=0"
      >
        Reset impressora
      </Buttom>
      <Buttom
        locale="top"
        link="https://api.whatsapp.com/send/?phone=5521995229284&text=Olá! Tenho interesse nos grupos do wpp.&type=phone_number&app_absent=0"
      >
        Grupos whatsapp
      </Buttom>
      <Buttom locale="top">Fornecedores</Buttom>
      <button
        className="h-12 w-38 mt-[0.3125rem] bg-slate-900 hover:bg-slate-700 rounded-xl text-white duration-500 font-bold"
        onClick={() => setModalPastasIsOpen(true)}
      >
        Acesse as pastas
      </button>
      <button
        className="h-12 w-38 mt-[0.3125rem] bg-slate-900 hover:bg-slate-700 rounded-xl text-white duration-500 font-bold"
        onClick={() => setModalDriveIsOpen(true)}
      >
        Links drive
      </button>
      <button
        className="h-12 w-38 mt-[0.3125rem] bg-slate-900 hover:bg-slate-700 rounded-xl text-white duration-500 font-bold"
        onClick={() => setModalServiçosIsOpen(true)}
      >
        Serviços diversos
      </button>
      {ModalPastasIsOpen && (
        <Modal
          closeModal={() => setModalPastasIsOpen(false)}
          title="Pastas do drive"
        >
          <Pastas />
        </Modal>
      )}
      {ModalDriveIsOpen && (
        <Modal
          closeModal={() => setModalDriveIsOpen(false)}
          title="Links do drive"
        >
          <Drive />
        </Modal>
      )}
      {ModalServiçosIsOpen && (
        <Modal
          closeModal={() => setModalServiçosIsOpen(false)}
          title="Serviços diversos"
        >
          <Serviços />
        </Modal>
      )}
    </div>
  );
};

export default Nav;
