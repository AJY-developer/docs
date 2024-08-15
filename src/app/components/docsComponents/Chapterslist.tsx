"use client"
import Link from "next/link";
import CreateChapter from "../adminComponents/CreateChapter";
import { RxCross2 } from "react-icons/rx";
import { FaArrowCircleRight } from "react-icons/fa";
import {  useState } from "react";
import { usePathname } from "next/navigation";



interface data {
    chapter: string
    urlname:string
    id: number
}

export default function Chapterslist({
    data, contentData
}: {
    contentData: data[]
    data: { slug?: string[] }
}) {

const pathname = usePathname()
const [isadmin, setadmin] = useState(true)
const urlarray = pathname.split('/')




    function togglebar() {
        const element = document.querySelector('.chapter-bar')
        const arrow = document.querySelector('.arrow')
        element?.classList.toggle("-translate-x-[250px]")
        arrow?.classList.toggle("hidden")
        console.log(data.slug)
    }


    return (
        <>
            <div className=" border-r-2 h-[100vh] border-r-slate-700 overflow-scroll flex flex-col items-center -translate-x-[250px] md:translate-x-0 p-0 w md:relative absolute w-[250px] md:w-full bg-[#16171f] z-10 transition-transform chapter-bar" >
                <div className="flex gap-8 items-cente ">
                    <h3 className="w-full  text-center py-2 uppercase font-bold">{data.slug && data.slug[0]}</h3>
                    <RxCross2 size={40} onClick={togglebar} className="md:hidden [cursor:pointer]" />
                </div>
                <ul className="w-full mt-4 text-sm font-medium capitalize cursor-pointer mb-16 chapter-list">

                    {contentData?.map((e: any) => {

                                let isActive = (urlarray&&(urlarray[urlarray.length-1]==e.urlname))?"text-blue-600":"text-gray-400";

                               return <Link href={`/maindata/${data.slug && data.slug[0]}/${e.urlname}`} key={e.id} ><li className={`hover:text-blue-600 p-1 ${isActive}` }key={e.id} >{e.chapter}</li></Link>
                    })}

                    {isadmin?<CreateChapter data={data} />:''}
                </ul>
            </div>
            <FaArrowCircleRight size={30} className="absolute arrow z-10 -left-0 top-4 md:hidden [cursor:pointer]" onClick={togglebar} />
        </>
    )
}
