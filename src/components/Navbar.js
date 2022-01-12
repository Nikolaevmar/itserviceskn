import { React, useState } from "react";
import { Link } from "react-router-dom";
import hamburger from "../assets/images/hamburger.png";

export default function Navbar() {
  let [open, setOpen] = useState(false);

  return (
    <div className="w-full top-0 left-0">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
          <span className="text-3x1 text-indigo-600 mr-2 pt-2">
            <ion-icon name="desktop-outline"></ion-icon>
          </span>
          <Link to="/">IT Services</Link>
          <div onClick={() => setOpen(!open)} className="absolute right-8 top-6 cursor-pointer md:hidden">
            <img src={hamburger} name={open ? "close" : "menu"} alt="hamburger"/>
          </div>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] w-full left-0 md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20" : "top-[-490px]"}`}>
          <li className="mr-6 md:my-0 my-7 text-gray-500 hover:text-indigo-600">
            <Link to="/contacts">Контакти</Link>
          </li>
          <li className="mr-6 md:my-0 my-7 text-gray-500 hover:text-indigo-600">
            <Link to="/pricing">Услуги</Link>
          </li>
          <li className="mr-6 md:my-0 my-7 text-gray-500 hover:text-indigo-600">
            <Link to="/apply">Работи от вкъщи</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
