import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="w-full border-t bg-white pt-12 pb-12 text-center ">
        <div className="uppercase pb-6">
          &#169; Copyright myblog.com {new Date().getFullYear()}{' '}
        </div>
      </footer>
    </>
  )
}

export default Footer
