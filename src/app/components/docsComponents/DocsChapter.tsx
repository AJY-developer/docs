
import prisma from '@/DB/prisma'
import Chapterslist from './Chapterslist';






export default async function DocsChapter({ data }: {
    data: { slug?: string[] }
}) {
    let contentData: any = [];

    const topic = (data.slug) ? data.slug[0] : "";



    if (data.slug) {

        const normalizedInput = topic.replace(/-/g, " ");

        contentData = await prisma.chapter.findMany({
            where: {
                OR: [
                    {
                        topic: {
                            equals: topic,
                            mode: "insensitive"
                        }
                    },
                    {
                        topic: {
                            equals: normalizedInput,
                            mode: "insensitive"
                        }
                    }
                ]
            },
            select: {
                urlname:true,
                chapter:true,
                id: true
            },
            orderBy: {
                id: 'asc'
            }
        })
    }


    console.log("chapter-List",contentData)



    return (

      <Chapterslist data={data} contentData={contentData}/>

    )
}