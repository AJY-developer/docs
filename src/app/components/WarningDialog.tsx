"use client"
import {  Dispatch, SetStateAction } from 'react';

interface dialogParam{
    warningDialog:{
        type:string,
        status:boolean
        message:string
    },
    setwarningDialog: Dispatch<SetStateAction<{
        type:string,
        status:boolean
        message:string
    }>>
}

export default function AddChapterdialog({warningDialog,setwarningDialog}:dialogParam) {

    return (
        <dialog id="my_modal_1" className={`modal ${warningDialog.status?"modal-open":""}`}>
            <div className="modal-box">
                <h3 className={`font-bold text-lg capitalize text-red-500`}>{warningDialog.type}</h3>
                <p className="py-4">{warningDialog.message}</p>
                <div className="modal-action">
                <button className="btn btn-success" onClick={() => setwarningDialog(prev => ({ ...prev, status: false }))}>OK</button>
                </div>
            </div>
        </dialog>
    )
}
