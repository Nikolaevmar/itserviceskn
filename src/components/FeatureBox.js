import React from 'react'

export default function FeatureBox(props) {
    return (
        <div class="p-8 space-y-3 border-2 border-blue-400 dark:border-blue-300 rounded-xl">
              <span class="inline-block text-blue-500 dark:text-blue-400">
                <img src={props.image} className='w-12 h-12'/>
              </span>
              <h1 class="text-2xl font-semibold text-gray-700 capitalize dark:text-white">
                {props.title}
              </h1>
              <p class="text-gray-500 dark:text-gray-300">
                {props.content}
              </p>
            </div>
    )
}
