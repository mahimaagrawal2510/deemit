import { ReactNode } from "react";
import Header from "../Header/Header";
import Link from "next/link";

export default function Layout({ children }){
    return(
        <>
        <div className="bg-background-light font-display text-gray-800 flex flex-col items-center">
            <div className="flex flex-col min-h-screen w-full">
            {/* Header */}
                <Header/>
                <main className="flex-grow">{children}</main>
                <footer className="bg-white dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
<div className="flex flex-col items-center">
<div className="flex flex-col gap-4 py-12">    
<div className="grid gap-12 lg:grid-cols-3 max-w-7xl px-4 lg:px-8 max-w-[1440px] justify-center">
<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<div className="flex items-center gap-4 text-gray-900">
<div className="text-primary h-8 w-8">
<svg fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"></path></svg>
</div>
<p className="text-lg font-bold">Deemit Funds Mart</p>
</div>
<p className="mt-4 text-md text-gray-500 dark:text-gray-600 max-w-md">Investing involves risk, including the possible loss of principal. Past performance is not a guarantee of future results. Please read the prospectus carefully before investing.</p>
</div>
<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<p className="font-semibold text-gray-800 text-lg">About</p>
<nav className="mt-4 flex flex-col gap-3">
<Link className="text-md font-medium text-gray-800 hover:text-primary transition-colors duration-200" href="/about-deemit-funds-mart">About Us</Link>
<Link className="text-md font-medium text-gray-800 hover:text-primary transition-colors duration-200" href="/contact-deemit-funds-mart">Contact Us</Link>
<Link className="text-md font-medium text-gray-800 hover:text-primary transition-colors duration-200" href="/knowledge-centre">FAQs</Link>
</nav>
</div>
<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<p className="font-semibold text-gray-800 text-lg">Legal</p>
<nav className="mt-4 flex flex-col gap-3">
<Link className="text-md font-medium text-gray-800 hover:text-primary transition-colors duration-200" href="/privacy-policy">Privacy Policy</Link>
</nav>
</div>
{/* <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
<p className="font-semibold text-gray-800 dark:text-white">Stay up to date</p>
<p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Subscribe to our newsletter for the latest market insights.</p>
<form className="mt-4 flex w-full max-w-sm flex-col gap-2 sm:flex-row">
<input className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-primary focus:ring-primary dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400" placeholder="Enter your email" type="email"/>
<button className="flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:w-auto">Subscribe</button>
</form>
</div> */}
</div>
{/* <div className="px-4 lg:px-8 flex lg:justify-end justify-center">
<div className="flex items-center gap-4"><a className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-transform duration-200 hover:-translate-y-1" href="#"><svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" fillRule="evenodd"></path></svg></a><a className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-transform duration-200 hover:-translate-y-1" href="#"><svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg></a><a className="text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary transition-transform duration-200 hover:-translate-y-1" href="#"><svg aria-hidden="true" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path clipRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.206v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H6.328C5.051 1 4 2.053 4 3.328v17.344C4 21.948 5.051 23 6.328 23h11.34c1.277 0 2.327-1.052 2.327-2.328V3.328C20 2.053 18.946 1 17.668 1z" fillRule="evenodd"></path></svg></a></div>
</div> */}
</div>
<hr className="w-full"/>
<div className="w-full max-w-[1440px] px-8 border-gray-200 dark:border-gray-800 py-4 flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
<p className="text-sm text-gray-800">© 2025 Deemit Funds Mart. All rights reserved.</p>

</div>
</div>
</footer>
            </div>
        </div>
        </>
    )
}