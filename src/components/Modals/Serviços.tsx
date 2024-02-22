import React from "react";

import { ModalServices } from "../../components/complexes/ModalServices.tsx";

export const Serviços = () => {
  return (
    <div className="grid grid-cols-5 gap-[0.125rem] my-4">
      <ModalServices
        title="Remover fundo 1"
        linkvideo="https://drive.google.com/file/d/1xlZxxN5oCZ75eyP3jWLspVHv0pGvFgj8/view"
        linkurl="https://www.remove.bg/"
      ></ModalServices>
      <ModalServices
        title="Remover fundo 2"
        linkvideo="https://drive.google.com/file/d/1uWdKq38_e4nh0zv2ogNqv8gy3jT7t5Oq/view"
        linkurl="https://clipdrop.co/remove-background"
      ></ModalServices>
      <ModalServices
        title="Remover marcas"
        linkvideo="https://drive.google.com/file/d/19HamXnvXnYSfxo9iR4Wj6qP4t8KChMUF/view"
        linkurl="https://clipdrop.co/cleanup"
      ></ModalServices>
      <ModalServices
        title="Localizar fonte"
        linkvideo="https://drive.google.com/file/d/1TKoLZl2HomX4zcZLPouH5pdtUYan_csF/view"
        linkurl="https://www.myfonts.com/pages/whatthefont"
      ></ModalServices>
      <ModalServices
        title="Site de fontes"
        linkvideo="https://drive.google.com/file/d/1bCnL6IWJdljZLM3JH6WkV0q8EH4_GtUq/view"
        linkurl="https://www.dafont.com/pt/"
      ></ModalServices>
      <ModalServices
        title="Criar arquivo pdf"
        linkvideo="https://drive.google.com/file/d/15IddNjnWJhCwTsoH9JLCTOKduTmAkiR3/view"
        linkurl="https://drive.google.com/file/d/15IddNjnWJhCwTsoH9JLCTOKduTmAkiR3/view"
      ></ModalServices>
      <ModalServices
        title="Gerador de texto"
        linkvideo="https://drive.google.com/file/d/15IddNjnWJhCwTsoH9JLCTOKduTmAkiR3/view"
        linkurl="https://fontmeme.com/pt/gerador-de-texto/"
      ></ModalServices>
      <ModalServices
        title="Colorindo fotos"
        linkvideo="https://drive.google.com/file/d/1UeKOsn5ghwvJ3wna76R-xT4rzScUy59J/view"
        linkurl="https://www.img2go.com/pt/colorir-imagem"
      ></ModalServices>
      <ModalServices
        title="Melhorar foto"
        linkvideo="https://drive.google.com/file/d/1pKmogLolSEs9dbBkpZKgNabberS0iR3l/view"
        linkurl="https://letsenhance.io/"
      ></ModalServices>
    </div>
  );
};
