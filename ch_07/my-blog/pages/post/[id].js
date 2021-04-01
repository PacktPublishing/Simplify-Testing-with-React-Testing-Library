import Link from 'next/link'
import Router, { useRouter } from 'next/router'
import useSwr from 'swr'
import CustomHead from '../../components/CustomHead'

const fetcher = url => fetch(url).then(res => res.json())

export default function Post() {
  const router = useRouter()
  const { data, error } = useSwr(
    router.query.id ? `/api/post/${router.query.id}` : null,
    fetcher
  )

  if (error)
    return (
      <>
        <CustomHead title="failed loading blog" />
        <div>Failed to load blog post</div>
      </>
    )
  if (!data)
    return (
      <>
        <CustomHead title="Loading..." />
        <div>Loading...</div>
      </>
    )

  const handleDelete = async e => {
    e.preventDefault()
    const res = await fetch(`/api/delete/${data.post.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: data.post.id, title: data.post.title })
    })

    if (res.status === 200) {
      Router.push('/')
    }
  }

  return (
    <div>
      <CustomHead title={data.post.title} />
      <div className="md:max-w-3xl mx-auto">
        <div className="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal">
          <div>
            <div className="flex justify-between">
              <Link href="/">
                <p className="text-base md:text-sm text-green-500 font-bold cursor-pointer">
                  &lt;
                  <a className="text-base md:text-sm text-green-500 font-bold no-underline hover:underline">
                    BACK TO BLOG
                  </a>
                </p>
              </Link>

              <a
                onClick={handleDelete}
                className="cursor-pointer font-bold text-base text-red-700 hover:underline"
              >
                Delete post&#62;
              </a>
            </div>
            <h1 className="font-bold font-sans break-normal text-gray-900 pt-6 pb-2 text-3xl md:text-4xl">
              {data.post.title}
            </h1>
            <p className="text-sm md:text-base font-normal text-gray-600">
              Published {data.post.created}
            </p>
            <img
              className="rounded"
              src={data.post.image_url}
              alt={data.post.title}
            />
          </div>
          <p className="py-6">{data.post.content}</p>
        </div>
      </div>
    </div>
  )
}
