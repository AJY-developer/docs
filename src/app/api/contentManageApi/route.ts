
import { NextRequest } from "next/server";
import prisma from "@/DB/prisma";





export async function POST(request: NextRequest) {


  const { content, chapter, topic } = await request.json();




  try {

    const urlname = chapter.replace(/ /g, "-");

    const checkIfAlreadyExit = await prisma.chapter.findFirst({
      where: {
        topic,
        chapter
      }
    })

    if (checkIfAlreadyExit) return Response.json({ status: 409, message: "Record alreday Exist" })


    const addedData = await prisma.chapter.create({
      data: {
        content,
        chapter,
        topic,
        urlname

      }
    })


    if (addedData) return Response.json({ status: 200, message: "content added successfully" })

    return Response.json({ status: 400, message: "bad request" })

  } catch (error) {
    console.log(error)
    return Response.json({ status: 500, message: "internal server error" })
  }
}







export async function GET(request: NextRequest) {



  try {
    const params = request.nextUrl.searchParams
    const topic = params.get("topic")


    if (!params.has('urlname')) {
      const content = await prisma.chapter.findFirst({
        where: {
          topic: {
            equals: topic,
            mode: "insensitive"
          }
        } as any,
        select: {
          content: true,
          chapter: true
        }
      })


      if (content) return Response.json({ status: 200, message: "data fetched succussfully", data: content })

    }




    const urlname = params.get("urlname")

    if (!topic || !urlname) return Response.json({ status: 400, message: "Bad request" })




    const content = await prisma.chapter.findUnique({
      where: {
        topic: topic,
        urlname: urlname
      },
      select: {
        content: true,
        chapter: true
      }
    })



    if (content) return Response.json({ status: 200, message: "data fetched succussfully", data: content })
    return Response.json({ status: 404, message: "bad request" })

  } catch (error: any) {

    return Response.json({ status: 500, message: "internal server error", error: error })
  }
}








export async function PATCH(
  request: Request,
) {



  try {
    const { content, chapter, topic } = await request.json();

    const urlname = chapter.replace(/ /g, "-").toLowerCase();

    // const updateData = await prisma.chapter.update({
    //   where: {
    //     urlname_topic: {
    //       topic: topic,
    //       urlname: chapter
    //     }

    //   },
    //   data: {
    //     content,
    //     urlname
    //   }
    // })


    const updateData = await prisma.chapter.upsert({
      create: {
        topic,
        content,
        chapter,
        urlname
      },
      update: {
        content,
      },
      where: {
        urlname_topic: {
          topic: topic,
          urlname: urlname
        }
      }
    })



    if (updateData) return Response.json({ status: 200, message: "content updated successfully" })

    return Response.json({ status: 400, message: "bad request" })

  } catch (error) {

    console.log(error)
    return Response.json({ status: 500, message: "internal server error" })
  }

}




export async function DELETE(
  request: NextRequest,
) {



  try {
    const params = request.nextUrl.searchParams



    const urlname = params.get("urlname")
    const topic = params.get("topic")

    if (!topic) return Response.json({ status: 400, message: "Record not found" })

    console.log('coming')
    console.log(urlname)


    if (!params.has('urlname')) {

      console.log("in the find request")

      const firstrecord = await prisma.chapter.findFirst({
        where: {
          topic: topic,
        } as any,
      });

      console.log(firstrecord)


      if (!firstrecord) return Response.json({ status: 200, message: "record not found" })

      const deleteRecord = await prisma.chapter.delete({
        where: {
          id: firstrecord.id,
        } as any,
      })

      if (deleteRecord) return Response.json({ status: 200, message: `${deleteRecord.chapter} record deleted successfully` })

      return Response.json({ status: 400, message: "Record not deleted, try after sometime" })

    }








    if (!topic || !urlname) return Response.json({ status: 400, message: "Bad request" })

    console.log(topic, urlname)

    const deleteRecord = await prisma.chapter.delete({
      where: {
        urlname_topic: {
          topic: topic,
          urlname: urlname
        }
      },
    })




    if (deleteRecord) return Response.json({ status: 200, message: "record deleted successfully" })
    return Response.json({ status: 400, message: "Record not deleted, try again later" })

  } catch (error: any) {

    console.log(error.message)
    return Response.json({ status: 500, message: "internal server error, sorry for that" })
  }

}


