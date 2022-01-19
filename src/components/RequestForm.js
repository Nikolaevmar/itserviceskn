import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function RequestForm() {
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm( "gmail", "template_bwsfslr", form.current, "user_4z4ilokKf4J49OHDdukg9")
      .then((result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setIsSubmit(true)
  };

  return (
    <div className="mt-40" id='form'>
      <h1 className="text-2xl lg:text-4xl text-gray-800 flex justify-center">
        Изпрати заявка
      </h1>
      <p className="text-md mt-4 text-gray-500 xl:mt-6 dark:text-gray-300 justify-center flex lg:text-lg text-center">
          Не се колебай и изпрати своята заявка, ние ще се свържем с Вас възможно най-скоро.
        </p>
      <div className="flex justify-center">
        <form onSubmit={sendEmail} className="sm:max-w-lg md:max-w-xl lg:max-w-2xl mt-12 p-20 border-2 border-indigo-300 rounded-lg shadow-xl bg-white">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-900 text-xs mb-2" htmlFor="grid-first-name">
                Име
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" name="name" required/>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-900 text-xs mb-2" htmlFor="grid-last-name">
                Фамилия
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" name="last_name"/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-900 text-xs mb-2" htmlFor="grid-email">
                E-mail
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" name="email" required/>
            </div>
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-900 text-xs mb-2" htmlFor="grid-pn">
                Телефонен номер
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-pn" type="text" name="phone" required/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-900 text-xs mb-2" htmlFor="grid-city">
                Град
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-city" name='city' required>
                  <option>Кюстендил</option>
                  <option>Лом</option>
                  <option>Дупница</option>
                  <option>Благоевград</option>
                  <option>Радомир</option>
                  <option>Перник</option>
                  <option>София</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-900 text-xs mb-2" htmlFor="grid-address">
                Адрес
              </label>
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-address" type="text" name='address' required/>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-900 text-xs mb-2" htmlFor="grid-work">
                Начин на работа
              </label>
              <div className="relative">
                <select className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-work" name='work' required>
                  <option>Онлайн</option>
                  <option>На адрес</option>
                  <option>В наш офис</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <input type="submit" value="Изпрати" className='bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md w-full mt-6 cursor-pointer'/>
          <span>{isSubmit ? <p className='text-center text-green-600 mt-6'>Успешно изпратена заявка, очаквайте отговор скоро ✔️</p> : null}</span>
        </form>
      </div>
    </div>
  );
}
