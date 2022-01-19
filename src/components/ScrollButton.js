import React from "react";
import {Link} from 'react-scroll'
import arrows from "../assets/icons/arrows.png";

export default function ScrollButton() {
  return (
    <div className="mt-16 flex justify-center">
      <Link to="nav" spy={true} smooth={true}>
        <img className="w-9 h-9 flex justify-center cursor-pointer" src={arrows} alt=''/>
      </Link>
    </div>
  );
}
