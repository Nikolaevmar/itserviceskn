import React from "react";

export default function FeatureBox(props) {
  return (
    <div className="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl shadow-md">
      <span className="inline-block text-blue-500 dark:text-blue-400">
        <img src={props.image} className="w-12 h-12" alt="" />
      </span>
      <h1 className="text-2xl font-semibold text-gray-700 dark:text-white">
        {props.title}
      </h1>
      <p className="text-gray-500 dark:text-gray-300">{props.content}</p>
    </div>
  );
}
