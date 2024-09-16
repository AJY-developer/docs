
import type { Metadata } from "next";
import DocsChapter from "@/app/components/docsComponents/DocsChapter";

// import { ReactElement, JSXElementConstructor, ReactNode, AwaitedReactNode, Key } from "react";




export const generateMetadata = ({ params }: { params: { slug?: string[] } }): Metadata => {
    const slug = params.slug || [];


    return {

        title: params.slug ? params.slug[0] : "language",
        description: `About the ${params.slug ? params.slug[0] : "language"}`,
    }
};



export default function RootLayout({
    children,
    params
}: Readonly<{
    children: React.ReactNode;
    params: { slug?: string[] }
}>) {




    return (
        <>
            <div className="container mx-auto xl:w-3/4  w-full lg:w-[80%] overflow-hidden md:grid  relative md:grid-cols-[180px,1fr] ">
            <DocsChapter key={params.slug?.join('-')} data={params} />
                <div className="content h-[100vh] overflow-scroll py-12">
           
                    {children}
                
                </div>
            </div>
        </>
    );
}
