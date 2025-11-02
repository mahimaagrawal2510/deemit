import Link from "next/link"

export default function Header() {
    return (
<header className="bg-background-light backdrop-blur-sm sticky top-0 z-50 shadow-sm">
<div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1440px]">
  <div className="flex items-center justify-between h-16">
    <Link className="flex items-center gap-4" href="/">
      <div className="text-primary text-blue-800">
        <svg
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <h2 className="text-xl font-bold text-gray-900">
        DFM
      </h2>
    </Link>

    <nav className="hidden md:flex items-end gap-8">
      <Link
        href="/"
        className="text-lg font-bold hover:text-primary transition-colors"
      >
        Home
      </Link>
      <Link
        href="contact-deemit-funds-mart"
        className="text-lg font-bold hover:text-primary transition-colors"
      >
        Contact Us
      </Link>
      {/* <Link
        href="#"
        className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
      >
        Funds
      </Link>
      <Link
        href="#"
        className="text-sm font-medium text-gray-600 hover:text-primary transition-colors"
      >
        Insights
      </Link> */}
      <Link
        href="/knowledge-centre"
        className="text-lg font-bold text-primary"
      >
        FAQs
      </Link>
    </nav>

   
  </div>
</div>
</header>
    )
}


