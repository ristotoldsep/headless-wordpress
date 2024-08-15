import React from "react";
// import Link from "next/link";
import { Link } from 'next-view-transitions'


const Navigation = () => {
  return (
    <nav className="flex justify-center gap-8 mb-5">
      <Link href="/" className="font-semibold text-teal-800">
        Home
      </Link>
      <Link href="/products" className="font-semibold text-teal-800">
        Products
      </Link>
      <Link href="/blog" className="font-semibold text-teal-800">
        Blog
      </Link>
      <Link href="/about" className="font-semibold text-teal-800">
        About
      </Link>
      <Link href="/contact" className="font-semibold text-teal-800">
        Contact
      </Link>
    </nav>
  );
};

export default Navigation;
