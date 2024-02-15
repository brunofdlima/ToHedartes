import React from 'react';

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
        <p className="mt-3 font-bold">Confira no <button className="bg-green-500 hover:bg-green-600 duration-500 rounded-full w-32 ml-4 font-normal"><a href={whatsappLink} target="blank">Whatsapp</a></button></p>
      </div>
    </div>
  );
}

export default Serviço;