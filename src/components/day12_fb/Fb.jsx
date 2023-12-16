import React from 'react'
import logo from'./logo.svg'

export default function Fb() {
    const gotofb = () => {
        window.open("https://fb.com", "_blank")
    }
  return (
    <>
    <div className='flex'>
    <div className='flex w-1/2 h-screen bg-[#f0f2f5]'>
        <div className="fblogo my-40 ml-28 flex flex-col">
            <img className='w-80' src={logo} alt="facebook" />
            <h2 className='text-3xl ml-7'>Facebook helps you connect and share with the people in your life.</h2>
        </div>
    </div>
    <div className='flex w-1/2 h-screen bg-[#f0f2f5]'>
        <div className="login flex flex-col bg-white px-8 py-6 mx-20 my-20 h-[65vh] rounded-xl shadow-lg">
             <input className='my-2 p-5 w-96 rounded-lg border-2 text-lg' type="text" placeholder='Email address or phone number' />
             <input className='my-2 p-5  rounded-lg border-2 text-lg' type="password" placeholder='Password' />
             <button className='my-2 py-4 text-lg bg-blue-600 font-bold'>Log in</button>
             <span className='text-center my-2 text-blue-600 cursor-pointer hover:underline'>Forgotten password?</span>
             <hr className='my-2'/>
             <button onClick={gotofb} className='my-3 py-4 text-lg w-2/3 ml-14 bg-green-600 font-bold'>Create new account</button>
             <span className='my-9 text-center'><b className='hover:underline cursor-pointer'>Create a Page</b> for a celebrity, brand or business.</span>
       </div>
    </div>
    </div>
    </>
  )
}
