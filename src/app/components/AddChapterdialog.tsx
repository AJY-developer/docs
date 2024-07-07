"use client"

interface dialogParam{
    dialog:boolean,
    setdialog:(op:boolean)=>boolean|void
}

export default function AddChapterdialog({setdialog,dialog}:dialogParam) {


    return (
        <dialog id="my_modal_1" className={`modal ${dialog?"modal-open":""}`}>
            <div className="modal-box">
                <h3 className="font-bold text-lg text-red-500">Warning!</h3>
                <p className="py-4">Chapter must not be empty</p>
                <div className="modal-action">

                        <button className="btn  btn-success" onClick={()=>setdialog(false)}>OK</button>
                </div>
            </div>
        </dialog>
    )
}
