import React from "react";

export default function Pricing() {
  return (
    <div className="bg-background mt-32">
      <h1 className="flex justify-center text-2xl lg:text-4xl text-center text-gray-800">
        Колко струва?
      </h1>
      <table class="rounded-xl bg-indigo-50 m-5 w-4/6 mx-auto text-center">
        <tr class="border-b-2 border-indigo-200">
          <th class="pr-36 py-3">Услуги </th>
          <th class="pr-32 py-3">Цени</th>
        </tr>
        <tr class="border-b border-indigo-300">
          <td class="pl-28 py-3 text-left"> ✔️ Инсталация на Windows 10</td>
          <td class="pr-28 py-3">30 лева</td>
        </tr>
        <tr class="border-b border-indigo-300">
          <td class="pl-28 py-3 text-left"> ✔️ Инсталация на Windows 7</td>
          <td class="pr-28 py-3">25 лева</td>
        </tr>
        <tr class="border-b border-indigo-300">
          <td class="pl-28 py-3 text-left">
            ✔️ Настройка на периферно устрийство
          </td>
          <td class="pr-28 py-3">7 лева</td>
        </tr>
        <tr class="border-b border-indigo-300">
          <td class="pl-28 py-3 text-left"> ✔️ Почистване от вируси</td>
          <td class="pr-28 py-3">5 лева</td>
        </tr>
        <tr class="border-b border-indigo-300">
          <td class="pl-28 py-3 text-left"> ✔️ Инсталиране на драйвъри</td>
          <td class="pr-28 py-3">Безплатно</td>
        </tr>
        <tr className="border-b border-indigo-300">
          <td class="pl-28 py-3 text-left">
            {" "}
            ✔️ Инсталиране на пакет от програми
          </td>
          <td class="pr-28 py-3">Безплатно</td>
        </tr>
        <tr>
          <td class="pl-28 py-3 text-left">❌ Инсталация на Windows XP</td>
          <td class="pr-28 py-3 text-right">Услугата е спряна.</td>
        </tr>
      </table>
    </div>
  );
}
