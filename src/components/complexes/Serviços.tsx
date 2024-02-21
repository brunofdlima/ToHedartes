import React from 'react';

import { FaWhatsapp } from "react-icons/fa";

interface Props {
  imageUrl: string;
  title: string;
  description: string;
  edit?:string;
  whatsappLink?: string;
}

const Serviço: React.FC<Props> = ({ imageUrl, title, description, edit, whatsappLink }) => {

  const classes = `px-[20%] my-12 flex ${edit} max-md:flex-col`;

  return (
    <div className={classes}>
      <img src={imageUrl} className="h-40 w-80 rounded-3xl" alt="perfilcores" />
      <div className="mx-[2%]">
        <h2 className="font-bold">{title}</h2>
        <p>{description}</p>
        <button className="bg-sky-300 hover:bg-sky-500 duration-500 rounded-md w-38 h-7 mt-4 font-bold px-4"><a href={whatsappLink} target="blank" className='flex'>Confira aqui <FaWhatsapp className='ml-4 mt-1'/></a></button>
      </div>
    </div>
  );
}

export default Serviço;
