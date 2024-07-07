
import Link from "next/link"


export default function NewItem({ data }: {
  data: { slug?: string[] }
}) {

  return (
    <div className="mt-5">
      {data.slug && data.slug.length > 0 ? (
        <Link href={`/addChapter/${data.slug[0]}`}>
          <button className="btn btn-primary btn-outline px-10">

          Create +
        </button>
        </Link>
      ) : (
        <span className="px-7 py-2 bg-blue-600 rounded-md font-bold">Create +</span>
      )}
    </div>
  )
}