import React from "react";

import { PiVideoFill } from "react-icons/pi";
import { FaGlobe } from "react-icons/fa";

interface props {
  title: String;
  linkvideo?: String;
  linkurl?: String;
}

export const ModalServices: React.FC<props> = ({
  title,
  linkvideo,
  linkurl,
}) => {
  return (
    <>
      <div className="h-20 w-40 p-2 mt-[0.3125rem] bg-slate-900 rounded-xl text-white duration-500 font-bold grid justify-center">
        <h1>{title}</h1>
        <div className="flex justify-evenly">
          <button>
            <a href={`${linkvideo}`} target="_blank" rel="noreferrer">
              <PiVideoFill className="w-8 h-8 hover:text-gray-500 duration-500" />
            </a>
          </button>
          <button>
            <a href={`${linkurl}`} target="_blank" rel="noreferrer">
              <FaGlobe className="w-7 h-7 hover:text-gray-500 duration-500" />
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
