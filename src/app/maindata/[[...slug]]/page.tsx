"use client"

import DocsData from "@/app/components/docsComponents/DocsData";
import DocsLoading from "@/app/components/docsComponents/DocsLoading";
import DeleteDialog from "@/app/components/WarningDialog";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { setTimeout } from "timers";
import Adminaccess from "@/app/components/adminComponents/AdminDelEdit";

interface content {
  content: string | null
}

interface delDialog {
  status: boolean
  type: string,
  message: string
}





export default function MainData({ params }: { params: { slug: string[] } }) {

  const router = useRouter()
  const [contentData, setcontentData] = useState<content>()
  const [isdatacome, setdatacome] = useState(false)
  const [isadmin, setadmin] = useState(false)


  const [warningDialog, setwarningDialog] = useState<delDialog>({
    status: false,
    type: "",
    message: "",
  })




  function getData(slug: string[]) {
    if (params.slug.length == 2) {
      setdatacome(true)
      fetch(`/api/contentManageApi?topic=${slug[0]}&urlname=${slug[1]}`, { cache: "no-store" })
        .then(res => res.json())
        .then(content => {

          setcontentData(content.data)
          setTimeout(() => {

            setdatacome(false)
          }, 500);
        })


    }
  }


  function deleteRecord() {
    if (params.slug.length == 1) {
      fetch(`/api/contentManageApi?topic=${params.slug[0]}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(content => {


          if (content.status != 200) {

            setwarningDialog(prev => ({ ...prev, status: true, message: content.message, type: "Error" }))

          }
          router.push(`/maindata/${params.slug[0]}`)
          router.refresh()

        })
    }
    else {

      console.log(params.slug[1])
      fetch(`/api/contentManageApi?topic=${params.slug[0]}&urlname=${params.slug[1]}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(content => {


          if (content.status != 200) {

            setwarningDialog(prev => ({ ...prev, status: true, message: content.message, type: "Error" }))
          }
          router.push(`/maindata/${params.slug[0]}`)
          router.refresh()

        })


    }
  }



  function firstChapter() {
    if (params.slug.length == 1) {
      setdatacome(true)

      fetch(`/api/contentManageApi?topic=${params.slug[0]}`, {
        method: "GET"
      })
        .then(res => res.json())
        .then(content => {

          setcontentData(content.data)
          setTimeout(() => {

            setdatacome(false)
          }, 500);
        })
    }
  }

  useEffect(() => {


    getData(params.slug)
    firstChapter()


    // router.refresh()


  }, [])



  if (contentData && contentData.content) {
    return (
      <>

        <div className=" relative">

          <DocsData data={contentData} />

         
          {isadmin ? <Adminaccess params={params} deleteRecord={deleteRecord} /> : ''}

          {isdatacome ? <DocsLoading /> : ''}




          <DeleteDialog warningDialog={warningDialog} setwarningDialog={setwarningDialog} />

        </div>


      </>
    )
  } else {

    return (
      <>

        <div className="relative">


          <p>No Data Added</p>

          <div className="actions text-center mb-20">
            <Link

              href={`/addChapter/${params.slug[0]}/${params.slug[1]}`}
            ><button className="btn btn-accent btn-outline px-10">Edit</button> </Link>

            <button
              className="btn border-2 border-red-600 hover:bg-red-600 hover:text-slate-900  px-8 text-red-600"
              onClick={deleteRecord}
            >Delete</button>

          </div>

          {isdatacome ? <DocsLoading /> : ''}
          <DeleteDialog warningDialog={warningDialog} setwarningDialog={setwarningDialog} />

        </div>

      </>
    )
  }
}




