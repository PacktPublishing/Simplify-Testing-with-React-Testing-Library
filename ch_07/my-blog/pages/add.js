import Link from 'next/link'
import Router from 'next/router'
import { useState } from 'react'
import CustomHead from '../components/CustomHead'

const Add = () => {
  const defaultValues = {
    title: '',
    category: '',
    image_url: '',
    content: ''
  }
  const [newBlog, setNewBlog] = useState(defaultValues)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e => {
    const { name, value } = e.target
    setNewBlog(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    const res = await fetch('/api/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBlog)
    })

    if (res.status === 200) {
      setNewBlog(defaultValues)
      Router.push('/')
    } else {
      const resData = await res.json()
      setErrorMsg(resData.message)
    }
  }

  return (
    <>
      <CustomHead title="Add" />
      <main className="m-auto pb-10 w-10/12">
        <h1 className="text-4xl text-center">Add a new blog</h1>{' '}
        <form onSubmit={handleSubmit}>
          <div className="my-5 text-sm">
            <label htmlFor="title" className="block text-black text-3xl">
              Title
            </label>
            <input
              type="text"
              autoFocus
              id="title"
              name="title"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full text-2xl border-4"
              placeholder="Blog Title"
              value={newBlog.title}
              onChange={handleChange}
            />
          </div>
          <div className="my-5 text-sm">
            <label htmlFor="category" className="block text-black text-3xl">
              Category
            </label>
            <input
              type="text"
              id="category"
              name="category"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full text-2xl border-4"
              placeholder="category"
              value={newBlog.category}
              onChange={handleChange}
            />
            <label htmlFor="image_url" className="block text-black text-3xl">
              Image Link
            </label>

            <input
              type="text"
              id="image_url"
              name="image_url"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full text-2xl border-4"
              placeholder="image link"
              value={newBlog.image_url}
              onChange={handleChange}
            />

            <label htmlFor="content" className="block text-black text-3xl">
              Content
            </label>
            <textarea
              type="text"
              id="content"
              name="content"
              className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full border-4"
              value={newBlog.content}
              onChange={handleChange}
            />
          </div>

          <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full mb-2">
            Submit
          </button>
          <Link href="/">
            <button className="block text-center text-white bg-red-600 p-3 rounded-sm hover:bg-red-700 w-full">
              <a>Cancel</a>
            </button>
          </Link>
          {errorMsg ? <span className="text-red-700">{errorMsg}</span> : null}
        </form>
      </main>
    </>
  )
}

export default Add
