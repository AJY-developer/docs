"use client"
import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { useRouter } from 'next/navigation';
import DeleteDialog from '@/app/components/WarningDialog';


interface delDialog {
    status: boolean
    type: string,
    message: string
}


export default function App({
    params
}: {
    params: { name: string[] }
}) {


    const [warningDialog, setwarningDialog] = useState<delDialog>({
        status: false,
        type: "",
        message: "",
    })


    const [formState, setFormState] = useState<formdata>({
        topic: params.name[0],
        chapter: "",
        content: ``,
    });
    const initailData = useRef()
    const router = useRouter()













    function handleTopicContent(event: React.ChangeEvent<HTMLInputElement>) {
        let value = event.target.value;

        //    setFormState({...formState,topic:params.name})
        setFormState({ ...formState, chapter: value })

        // console.log(formState)

    }


    function handleEditorContent(content: string) {
        setFormState({ ...formState, content: content })
        // console.log(formState)

    }



    function saveContent() {
        if (!formState.chapter) {

            setwarningDialog(prev => ({ ...prev, status: true, message: "Chapter field can't be empty", type: "warning" }))

            return
        }


        fetch("/api/contentManageApi", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formState)
        })
            .then(res => res.json())
            .then(data => {

                if (data.status != 200) {
                    setwarningDialog(prev => ({ ...prev, status: true, message: data.message, type: "Warning" }))
                    return
                }

                router.push(`/maindata/${params.name[0]}`)
                console.log(data)
            })

    }

    function updateContent() {
        if (!formState.chapter) {
            setwarningDialog(prev => ({ ...prev, status: true, message: "Chapter field can't be empty", type: "warning" }))

            return
        }


        fetch("/api/contentManageApi", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formState)
        })
            .then(response => response.json())
            .then(data => {

                // console.log(data)
                if (data.status != 200) {
                    setwarningDialog(prev => ({ ...prev, status: true, message: data.message, type: "Warning" }))
                    return
                }

                router.push(`/maindata/${params.name[0]}`)
            })




    }



    useEffect(() => {

        console.log(params.name)
        console.log(params.name.length)
        if (params.name[1] == "undefined") {
            // console.log('in the first blxik')
            router.push(`/addChapter/${params.name[0]}`)
            return
        }
        if (params.name.length == 2) {

            fetch(`/api/contentManageApi?topic=${params.name[0]}&urlname=${params.name[1]}`)
                .then(res => res.json())
                .then(content => {
                    // console.log(content)


                    initailData.current = content.data.content;
                    // initailChapter.current = content.data.chapter;

                    setFormState({ ...formState, content: content.data.content, chapter: content.data.chapter })
                })
        }


    }, [])



    return (

        <div className="h-{100vh} container overflow-scroll mx-auto mb-12">

            <form action="" onSubmit={(e: any) => e.preventDefault()} className='flex flex-col gap-3 p-5 mb-10 '>

                <label htmlFor="topic">Topic:</label>
                <input name="topic" type="text" placeholder='Topic' className="outline-none p-2 bg-slate-800 rounded" value={params.name[0]} readOnly />
                <label htmlFor="chapter">Chapter:</label>
                <input name="urlname" type="text" onChange={handleTopicContent} value={formState.chapter} placeholder='Chapter-Name' className='outline-none p-2 rounded bg-slate-800' />

                <Editor
                    apiKey='3s69a2q1um86fgrm1opt983yd3i09en5c05anqkmljtyh1n8'

                    init={{
                        skin: 'oxide-dark',
                        content_css: 'dark',
                        height: 450,
                        plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate ai mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss markdown',
                        toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                        tinycomments_mode: 'embedded',
                        tinycomments_author: 'Author name',
                        mergetags_list: [
                            { value: 'First.Name', title: 'First Name' },
                            { value: 'Email', title: 'Email' },
                        ],
                        ai_request: (request: any, respondWith: any) => respondWith.string(() => Promise.reject("See docs to implement AI Assistant")),
                    }}
                    initialValue={initailData.current}
                    onEditorChange={handleEditorContent}
                />

                <div>

                    <button
                        type="submit"
                        onClick={(params.name.length == 1) ? saveContent : updateContent}
                        className='btn btn-success mb-12 '
                    >
                        {(params.name.length == 1) ? "Save" : "Update"}
                    </button>

                </div>
            </form>

            <DeleteDialog warningDialog={warningDialog} setwarningDialog={setwarningDialog} />



        </div>

    );
}


