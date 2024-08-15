"use client"

import DocsData from "@/app/components/docsComponents/DocsData";
import DocsLoading from "@/app/components/docsComponents/DocsLoading";
import DeleteDialog from "@/app/components/WarningDialog";
import { useEffect, useState } from "react";
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
  const [isloading, setLoading] = useState(false)
  const [isadmin, setadmin] = useState(true)


  const [warningDialog, setwarningDialog] = useState<delDialog>({
    status: false,
    type: "",
    message: "",
  })




  function getData(slug: string[]) {
    if (params.slug.length == 1){
      console.log('first reuquest running')

      setLoading(true)

      fetch(`/api/contentManageApi?topic=${params.slug[0]}`, {
        method: "GET"
      })
        .then(res => res.json())
        .then(content => {

          console.log(content)
          setcontentData(content.data)
        

          setLoading(false)
          // setdatacome(false)
          // setTimeout(() => {

          // }, 500);
        })
    }
    else {
      console.log("get request running")
      setdatacome(true)
      setLoading(true)
      fetch(`/api/contentManageApi?topic=${slug[0]}&urlname=${slug[1]}`, { cache: "no-store" })
        .then(res => res.json())
        .then(content => {
          
  
          setcontentData(content.data)
          setTimeout(() => {

            setLoading(false)
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


  useEffect(() => {

 
 getData(params.slug)

   

  }, [])



  if (contentData && contentData.content) {
    return (
      <>

        <div className=" relative pb-20">

          <DocsData data={contentData} />


          {isadmin ? <Adminaccess params={params} deleteRecord={deleteRecord} /> : ''}

          {isloading ? <DocsLoading /> : ''}




          <DeleteDialog warningDialog={warningDialog} setwarningDialog={setwarningDialog} />

        </div>


      </>
    )
  } else {

    console.log(isadmin, contentData)
    return (
      <>

        <div className="relative pb-20">


          <p>No Data Added</p>

          {isadmin && !!contentData ? <Adminaccess params={params} deleteRecord={deleteRecord} /> : ''}

          {isloading ? <DocsLoading /> : ''}
          <DeleteDialog warningDialog={warningDialog} setwarningDialog={setwarningDialog} />

        </div>

      </>
    )
  }
}




