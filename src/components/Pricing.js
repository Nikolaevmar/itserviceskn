import React from "react";

export default function Pricing() {
  return (
    <div className="bg-background mt-28">
      <h1 className="text-2xl lg:text-4xl text-gray-800 flex justify-center">
        Колко струва?
      </h1>
      <p className="text-md mt-4 text-gray-500 xl:mt-6 dark:text-gray-300 justify-center flex lg:text-lg text-center">
          Имате проблем който не е вписан тук? Свържете се с нас.
        </p>
      <table className="rounded-xl bg-indigo-50 m-5 w-4/6 mx-auto text-center shadow-xl">
      <tbody>
        <tr className="border-b-2 border-indigo-200">
          <th className="pr-36 py-3">Услуги </th>
          <th className="pr-32 py-3">Цени</th>
        </tr>
        </tbody>
        <tbody>
        <tr className="border-b border-indigo-300">
          <td className="lg:pl-28 py-3 text-left pl-6"> ✔️ Инсталация на Windows 10</td>
          <td className="pr-28 py-3">30 лева</td>
        </tr>
        </tbody>
        <tbody>
        <tr className="border-b border-indigo-300">
          <td className="lg:pl-28 py-3 text-left pl-6"> ✔️ Инсталация на Windows 7</td>
          <td className="pr-28 py-3">25 лева</td>
        </tr>
        </tbody>
        <tbody>
        <tr className="border-b border-indigo-300">
          <td className="lg:pl-28 py-3 text-left pl-6">
            ✔️ Настройка на периферно устрийство
          </td>
          <td className="pr-28 py-3">7 лева</td>
        </tr>
        </tbody>
        <tbody>
        <tr className="border-b border-indigo-300">
          <td className="lg:pl-28 py-3 text-left pl-6"> ✔️ Почистване от вируси</td>
          <td className="pr-28 py-3">5 лева</td>
        </tr>
        </tbody>
        <tbody>
        <tr className="border-b border-indigo-300">
          <td className="lg:pl-28 py-3 text-left pl-6"> ✔️ Инсталиране на драйвъри</td>
          <td className="pr-28 py-3">Безплатно</td>
        </tr>
        </tbody>
        <tbody>
        <tr className="border-b border-indigo-300">
          <td className="lg:pl-28 py-3 text-left pl-6">
            ✔️ Инсталиране на пакет от програми
          </td>
          <td className="pr-28 py-3">Безплатно</td>
        </tr>
        </tbody>
        <tbody>
        <tr>
          <td className="lg:pl-28 py-3 text-left pl-6">❌ Инсталация на Windows XP</td>
          <td className="pr-28 py-3 text-right">Услугата е спряна.</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}
