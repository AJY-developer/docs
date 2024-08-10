import Link from 'next/link';
import React from 'react'

interface adminParam {
  params: { slug: string[] }
  deleteRecord: () => void;
}

export default function Adminaccess({ params, deleteRecord }:adminParam) {

  console.log(params)
  return (
    <div className="actions text-center mb-20">
      <Link
        href={`/addChapter/${params.slug[0]}/${params.slug[1]}`}
      >
        <button className="btn btn-accent btn-outline px-10">
          Edit
        </button>
      </Link>

      <button
        className="btn border-2 border-red-600 hover:bg-red-600 hover:text-slate-900  px-8 text-red-600"
        onClick={deleteRecord}
      >Delete</button>

    </div>
  )
}
