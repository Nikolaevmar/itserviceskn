import React from 'react'
import {Link} from 'react-scroll';
import heroimg from "../assets/images/heroimg.jpg";

export default function Hero() {
    return (
        <div className="container flex flex-col-reverse mb-3 xl:flex-row items-center gap-6 mt-6">
          <div className="flex flex-1 flex-col items-center">
            <h2 className="text-gray-800 text-center text-2xl md:text-3 xl:text-4xl mb-6">
              Запознай се с нас!
            </h2>
            <p className="text-gray-400 lg:text-lg sm:text-sm text-center mb-6 ">
            Нашите специалисти в IT Services ще Ви предложат услуги на високо ниво, за да отстранят всеки един софтуерен или хардуерен проблем с компютрите или лаптопите във вашия дом или офис, на място или изцяло онлайн, без необходимост да ги носите в наш офис ✨
            </p>
            <div className="flex justify-center flex-wrap gap-6 mt-3">
              <button className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                <Link to='form' spy={true} smooth={true}>Пусни заявка</Link>
              </button>
              <button className="bg-gray-300 shadow-2xl hover:bg-indigo-500 hover:text-white font-bold py-2 px-4 rounded-md">
                <Link to='features' spy={true} smooth={true}>Научи повече </Link>
              </button>
            </div>
          </div>
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
            <img src={heroimg} alt=''/>
          </div>
        </div>
    )
}
