
// Home component
import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-32 lg:items-center">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl font-extrabold sm:text-9xl">
            Headless
            <strong className="font-extrabold text-teal-800 sm:block">Wordpress</strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
            numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              className="block w-full rounded bg-teal-800 px-12 py-3 text-sm font-medium text-white shadow hover:bg-teal-900 focus:outline-none focus:ring active:bg-teal-900 sm:w-auto"
              href="/products"
            >
              Our products
            </Link>

            <Link
              className="block w-full rounded px-12 py-3 text-sm font-medium text-teal-600 shadow hover:text-teal-900 focus:outline-none focus:ring active:text-teal-900 sm:w-auto"
              href="/about"
            >
              About us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home