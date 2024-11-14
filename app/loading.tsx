import React from 'react'
import Image from 'next/image'
import logo from '/public/logo.png' // Ensure the path is correct

const Loading = () => {
    return (
        <main className='text-center h-screen w-full flex items-center justify-center bg-transparent'>
            <div className='w-52 h-52 flex flex-col items-center justify-center'>
                {/* <h1 className='font-semibold mb-1'>System Busy</h1> */}
                <div className="animate-blink">
                    <Image src={logo} alt="Loading..." width={500} height={500} className="rounded-[5px]" />
                </div>
            </div>
        </main>
    )
}

export default Loading
