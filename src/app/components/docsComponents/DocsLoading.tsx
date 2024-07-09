import React from 'react'

function DocsLoading() {
    return (
        <div className={`flex w-full h-[100vh] flex-col gap-4 absolute top-0 left-0 right-0 bottom-0 `}>
            <div className="skeleton h-64 w-full"></div>
            <div className="skeleton h-8 w-28"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
            <div className="skeleton h-8 w-full"></div>
        </div>
    )
}

export default DocsLoading