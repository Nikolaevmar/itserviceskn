import { React, useState } from "react";
import {Transition} from '@headlessui/react'
import { Link } from "react-router-dom";

export default function Navbar() {
  let [open, setOpen] = useState(false);
  return (
      <div className="bg-gray-800" id='nav'>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <div className="flex items-center w-full justify-between">
              <div className='flex items-center'>
                <span className="text-3xl text-white mr-2 pt-2">
                <ion-icon name="radio-outline"></ion-icon>
                </span>
                  <Link to="/" className="text-xl text-white">IT Services</Link>
                </div>
               <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                <div className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  <Link to="/">Начало</Link>
                  </div>
                  <div className="text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  <Link to="/contacts">Контакти</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button onClick={()=> setOpen(!open)} type="button" className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span className="sr-only"></span>
                {!open ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                  </svg>
                  ) : ( <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                  )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={open}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <div className="text-white  px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  <Link to="/">Начало</Link>
                  </div>
                  <div className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700">
                  <Link to="/contacts">Контакти</Link>
                  </div>
              </div>
            </div>
          )}
        </Transition>
      </div>
  );
}
