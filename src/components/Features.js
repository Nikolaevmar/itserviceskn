import React from "react";
import FeatureBox from "./FeatureBox";
import protection from "../assets/icons/protection.png";
import install from "../assets/icons/install.png";
import software from "../assets/icons/software.png";
import printer from "../assets/icons/printer.png";
import teamviewer from "../assets/icons/teamviewer.png";
import ultraviewer from "../assets/icons/ultraviewer.png";

export default function Features() {
  return (
    <div className="bg-white mt-28">
      <div className="container px-6 py-10 mx-auto">
        <h1 className="text-2xl lg:text-4xl text-gray-800 flex justify-center">
          Какви услуги предлагаме?
        </h1>
        <p className="text-md mt-4 text-gray-500 xl:mt-6 dark:text-gray-300 justify-center flex lg:text-lg text-center">
          Нашите специалисти ще Ви предложат професионална, дистанционна
          поддръжка която включва
        </p>
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2 text-center">
          <FeatureBox
            image={protection}
            title="Почиставане от вируси"
            content="Компютърният вирус е програма, която се разпространява в целия компютър и атакува неговото съдържание – програми, файлове и документи. Вирусът подменя, изтрива или разрушава наличната в компютъра информация и инсталирани програми."
          />
          <FeatureBox
            image={install}
            title="Инсталиране на операционни системи"
            content="Стабилността на системата Ви ще е на възможно най-високо ниво, според компонентите на компютъра Ви. Операционната Ви система ще е конфигурирана и инсталирана по възможно най-добрия начин."
          />
          <FeatureBox
            image={software}
            title="Софтуерна диагностика"
            content="Софтуерни проблеми може да възникнат от некоректно работещи драйвери на хардуерни устройства, от нежелани програми и вируси, както и от остарели версии на програми, несъвместими с останалите софтуерни компоненти в една операционна система."
          />
          <FeatureBox
            image={printer}
            title="Настройка на периферно устройство"
            content="Настройката на периферни устройства е услуга, която включва изтегляне на последна версия на драйвер за конкретното устройство (принтер, скенер, копир и др.), проверка на свързаността и инсталиране на драйвъра."
          />
        </div>
        <p className="text-md mt-4 text-gray-500 xl:mt-6 dark:text-gray-300 justify-center flex lg:text-lg text-center">
          *Изискване за онлайн услуги е да имате една от следните програми
          инсталирани и добра интернет връзка*
        </p>
        <div className="flex mt-3 justify-center">
          <a
            href="https://www.teamviewer.com/en/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={teamviewer}
              className="w-12 h-12 lg:w-16 lg:h-16 mr-8"
              alt=""
            />
          </a>
          <a
            href="https://www.ultraviewer.net/en/download.html"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={ultraviewer}
              className="w-12 h-12 lg:w-16 lg:h-16"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}
