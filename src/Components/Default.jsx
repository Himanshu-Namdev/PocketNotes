import React from 'react'
import MainLogo from './Assets/MainLogo.png'
import Lock from './Assets/Lock.png'
export default function Default() {
  return (
    <div className="bg-[#F7ECDC] h-[100vh] w-[75%] flex justify-center items-center">
        <div className="w-[40%] text-center">
          <img src={MainLogo} alt="" className="" />
          <h1 className="font-[roboto] font-normal text-[40px]">Pocket Notes</h1>
          <p className="text-black text-[22px] font-normal font-[roboto]">Send and receive messages without keeping your phone online. Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
          <p className="text-[22px] font-[roboto] flex justify-center items-center absolute bottom-4 mx-auto ml-[8%]"><img src={Lock} alt="" className="mx-2" />end-to-end encrypted</p>
          
        </div>
    </div>
  )
}
