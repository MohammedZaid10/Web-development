import React from 'react'

const about = () => {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="p-8 text-center">
                <h1 className="text-3xl font-bold">Features of Next.js : </h1>
                <ol>
                    <li>Full Stack Solution</li>
                    <li>File based Routing</li>
                    <li>Additional features like router from next/navigation</li>
                    <li>Optimized rendering</li>
                </ol>
            </div>
        </div>
    )
}

export default about