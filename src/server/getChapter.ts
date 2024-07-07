"use server"
import prisma from "../DB/prisma"

export const getContent = async (param: string) => {


  try {
    if (!param) return ({ status: 400, message: "Bad request" })

    const content = await prisma.chapter.findMany({
      where: {
        topic: {
          equals: param,
          mode: 'insensitive'
        }
      },
      select: {
        chapter: true
      }

    })

    
    // console.log(content)


    if (content) return ({ status: 200, message: "data fetched succussfully", data: content })

  } catch (error: any) {
    console.log(error)
    return ({ status: 500, message: "internal server error", error: error })
  }

}