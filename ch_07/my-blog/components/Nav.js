import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="flex flex-wrap items-center mx-auto py-3">
        <div className="pl-4">
          <Link href="/">
            <a className="font-extrabold text-xl">My Blog</a>
          </Link>
        </div>
        <div className="flex-grow lg:mt-0 lg:w-auto">
          <ul className="justify-end lg:flex">
            <li className="mr-3">
              <Link href="/add">
                <a className="font-bold inline-block px-4 py-2">Add Blog</a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
