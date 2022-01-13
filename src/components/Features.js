import React from 'react'
import protection from '../assets/icons/protection.png'
import install from '../assets/icons/install.png'
import software from '../assets/icons/software.png'
import printer from '../assets/icons/printer.png'

export default function Features() {
    return (
        <div class="bg-white dark:bg-gray-900 mt-40">
        <div class="container px-6 py-10 mx-auto">
          <h1 class="w-full text-3xl font-semibold text-gray-800 lg:text-4xl dark:text-white flex justify-center">
            Какви услуги предлагаме?
          </h1>
          <p class="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300 justify-center flex">
            Нашите специалисти ще Ви предложат професионална, дистанционна поддръжка която включва
          </p>

          <div class="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-2 text-center">
            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              <span class="inline-block text-blue-500 dark:text-blue-400">
                <img src={protection} className='w-12 h-12'/>
              </span>
              <h1 class="text-2xl font-semibold text-gray-700 dark:text-white">
                Почиставане от вируси
              </h1>
              <p class="text-gray-500 dark:text-gray-300">
              Компютърният вирус е програма, която се разпространява в целия компютър и атакува неговото съдържание – програми, файлове и документи. Вирусът подменя, изтрива или разрушава наличната в компютъра информация и инсталирани програми.
              </p>
            </div>

            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl text-center">
              <span class="inline-block text-blue-500 dark:text-blue-400">
                <img src={install} className='w-12 h-12'/>
              </span>
              <h1 class="text-2xl font-semibold text-gray-700 dark:text-white">
              Инсталиране на операционни системи
              </h1>
              <p class="text-gray-500 dark:text-gray-300">
              Стабилността на системата Ви ще е на възможно най-високо ниво, според компонентите на компютъра Ви. Операционната Ви система ще е конфигурирана и инсталирана по възможно най-добрия начин.
              </p>
            </div>
            
            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl text-center">
              <span class="inline-block text-blue-500 dark:text-blue-400">
                <img src={software} className='w-12 h-12'/>
              </span>
              <h1 class="text-2xl font-semibold text-gray-700 dark:text-white">
              Софтуерна диагностика
              </h1>
              <p class="text-gray-500 dark:text-gray-300">
              Софтуерни проблеми може да възникнат от некоректно работещи драйвери на хардуерни устройства, от нежелани програми и вируси, както и от остарели версии на програми, несъвместими с останалите софтуерни компоненти в една операционна система.
              </p>
            </div>

            <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl text-center">
              <span class="inline-block text-blue-500 dark:text-blue-400">
                <img src={printer} className='w-12 h-12'/>
              </span>
              <h1 class="text-2xl font-semibold text-gray-700 dark:text-white">
                Настройка на периферно устройство
              </h1>
              <p class="text-gray-500 dark:text-gray-300">
              Настройката на периферни устройства е услуга, която включва изтегляне на последна версия на драйвер за конкретното устройство (принтер, скенер, копир и др.), проверка на свързаността и инсталиране на драйвера.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
