import React,{useState} from 'react'
import Arrow from './Assets/Arrow.png'
export default function WritingSection() {
const [name,setName] = useState("CU");
const [fName,setfName] = useState("Cuvette Notes");
const [time,setTime] = useState("");
  return (
    <div className="w-[75%] h-[100vh]">
        <div className="heading h-[10vh] w-full bg-[#E8E8E8] flex justify-start items-center">
          <p className="m-4 bg-[#0047FF] rounded-full p-2 text-white text-[24px] w-[69px] h-[69px] flex justify-center items-center ">{name}</p>
          <h1 className="m-2 font-medium text-[24px]">{fName}</h1>
        </div>
        <div className="description h-[65vh] w-full bg-[#F7ECDC] ">

        </div>
        <div className="InputSection bg-[#E8E8E8] h-[25vh] w-full flex justify-center items-center">
            <textarea type="text" className="w-[95%] h-[20vh] outline-none border rounded-[9px] border-[#CCCCCC] text-[28px] text-[#9A9A9A] p-2" style={{ resize: 'none' }} placeholder='Enter your text here...........' ></textarea>
            <button className=""><img src={Arrow} alt="" className="absolute right-14 bottom-14" /></button>
        </div>

    </div>
  )
}
