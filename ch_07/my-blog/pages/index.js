import Link from 'next/link'
import useSwr from 'swr'
import CustomHead from '../components/CustomHead'

const fetcher = url => fetch(url).then(res => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/posts', fetcher)

  if (error) return <div>Failed to load blog posts</div>
  if (!data) return <div>Loading...</div>
  if (!data.posts.length) return <div>Add a new post to get started!</div>

  return (
    <>
      <CustomHead title="Home" />
      <div className="flex flex-col items-center py-12">
        <a
          className="font-bold text-gray-800 uppercase hover:text-gray-700 text-5xl"
          href="#"
        >
          My Blog
        </a>
      </div>
      <ul className="m-auto md:w-2/3">
        {data.posts.map(post => (
          <li
            key={post.title}
            className="bg-white flex flex-col justify-start p-6 mb-3 shadow-md"
          >
            <p className="text-blue-700 text-sm font-bold uppercase pb-4">
              {post.category}
            </p>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
              <a className="text-3xl font-bold hover:text-gray-700 pb-4">
                {post.title}
              </a>
            </Link>
            <p href="#" className="text-sm pb-3">
              Published on {post.created}
            </p>
            <p className="pb-6">{`${post.content.substring(0, 185)}...`}</p>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
              <a className="uppercase text-gray-800 hover:text-black">
                Continue Reading&rarr;
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  )
}
