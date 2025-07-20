import React from 'react';
import Script from "next/script";

export const metadata = {
    title: "Contact Facebook",
    description: "This is Facebook Contact Page",
};

const contact = () => {
    return (
        <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
            <Script>{`alert ("Welcome to Script page")`}</Script>
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <h1 className="text-xl">This is contact page</h1>
            </main>
        </div>
    )
}

export default contact