import { FcAbout } from "react-icons/fc";

export const Items = (props) => {
    return (
      <a href={`${props.link}`} className="flex-col ml-1 pt-2">
        <FcAbout className="h-10 w-10"/> 
        <p className="pl-1">
          {props.name}
        </p>
      </a>
    );
  };
