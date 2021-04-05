import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav className="flex flex-wrap items-center mx-auto py-3">
        <div className="ml-4">
          <Link href="/" passHref>
            <a>
              <Image
                src="/logo.png"
                className="font-extrabold text-xl cursor-pointer"
                alt="My blog logo"
                width={80}
                height={80}
              />
            </a>
          </Link>
        </div>
        <div className="flex-grow lg:mt-0 lg:w-auto">
          <ul className="text-right">
            <li className="mr-3">
              <Link href="/add">
                <a className="font-bold inline-block px-4 py-2 text-3xl">
                  New Post
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Nav
