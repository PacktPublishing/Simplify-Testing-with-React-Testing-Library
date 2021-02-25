import Link from 'next/link'
import useSwr from 'swr'
import CustomHead from '../components/CustomHead'

const fetcher = url => fetch(url).then(res => res.json())

export default function Index() {
  const { data, error } = useSwr('/api/posts', fetcher)

  if (error) return <div>Failed to load blog posts</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <CustomHead title="Home" />
      <ul>
        {data.posts.map(post => (
          <li key={post.id}>
            <Link href="/post/[id]" as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/add">
        <button className="bg-green-500 p-1.5 rounded-lg">Add new post</button>
      </Link>
    </>
  )
}
