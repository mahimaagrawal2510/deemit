"use client"
import FAQButton from "../Components/FAQButton/FAQButton"
import Layout from "../Components/Layout/Layout";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {data} from "./data.js";
import { faPaperPlane} from "@fortawesome/free-solid-svg-icons";
export default function KnowledgeCenter(){


    return (
        <Layout>
       <main className="flex-grow">
<div className="container mx-auto max-w-4xl px-4 py-12 sm:py-16">
<div className="flex flex-col gap-8">

<div className="text-center">
<h1 className="text-5xl font-black tracking-tighter text-gray-900">Frequently Asked Questions</h1>
<p className="mt-4 text-lg text-gray-600 dark:text-gray-400">Find answers to common inquiries related to our mutual funds and services.</p>
</div>

<div className="flex flex-col gap-4 p-4">
   
    {data.map((ele, i) => {
        return <FAQButton comp={ele} key={i}/>
    })}


</div>

<div className="rounded-xl bg-primary/10 p-8 text-center flex flex-col gap-4 items-center">
<div>
<h3 className="text-2xl font-bold text-gray-900">Still have questions?</h3>
<p className="text-base text-gray-600">Our support team is ready to assist you. Get in touch with us today.</p>
</div>
<button className="bg-blue-800 text-white py-3 px-8 rounded-lg w-fit flex gap-4 justify-center items-center text-xl" type="submit">
<Link href="/contact-deemit-funds-mart"><FontAwesomeIcon icon={faPaperPlane} className="h-[16px]"/> Send Message</Link>
</button>
</div>
</div>
</div>
</main>
        </Layout>
    )
}