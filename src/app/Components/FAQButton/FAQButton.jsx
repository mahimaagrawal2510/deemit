"use client"
import {useState} from "react";
export default function FAQButton({comp, i}){
    const [isShow, setIsShow] = useState(false)
    const {header, content} = comp
    return <>
   <details key={i} className="group rounded-lg bg-white dark:bg-background-dark/50 shadow-sm" open="">
        <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4">
        <p className="text-xl font-semibold text-gray-900">{header}</p>
        </summary>
        <div className="border-t border-gray-200 dark:border-gray-700 p-4">
        <p className="text-lg leading-relaxed text-gray-900" dangerouslySetInnerHTML={{ __html: content }}></p>
        <div ></div>
        </div>
        </details>
    </>
}