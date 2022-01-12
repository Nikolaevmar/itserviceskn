import React from "react";
import featuresbg from "../assets/images/featuresbg.png";
import featuresbg1 from "../assets/images/featuresbg1.png";
import heroimg from "../assets/images/heroimg.png";
import heroimgbg from "../assets/images/heroimgbg.png";

export default function Home() {
  return (
    <div className="bg-background bg-cover bg-no-repeat">
      {/* Hero section */}
      <section className="relative">
        <div className="container flex flex-col-reverse mb-3 xl:flex-row items-center gap-6 mt-6">
          <div className="flex flex-1 flex-col items-center">
            <h2 className="text-gray-800 text-center text-2xl md:text-3 xl:text-4xl mb-6">
              Запознайте се с нас!
            </h2>
            <p className="text-gray-400 lg:text-lg sm:text-sm text-center mb-6 ">
              IT Services предлага професионална, дистанционна поддръжка която
              включва: почистване от вируси, решаване на софтуерни проблеми,
              инсталация на драйвери, инсталация на софтуер, софтуерна
              диагностика, и помощ при разрешаване на вашите проблеми
            </p>
            <div className="flex justify-center flex-wrap gap-6 mt-3">
              <button class="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                Пусни своята заявка
              </button>
              <button class="bg-gray-300 shadow-2xl hover:bg-indigo-500 text-black font-bold py-2 px-4 rounded-md">
                Имате запитване?
              </button>
            </div>
          </div>
          <div className="flex justify-center flex-1 mb-10 md:mb-16 lg:mb-0">
            <img src={heroimg} className="w-4/6 h-4/6" />
          </div>
        </div>
      </section>
    </div>
  );
}
