import React from 'react'
import Default from '../Components/Default'
import Sidebar from '../Components/Sidebar'
import WritingSection from '../Components/WritingSection'

export default function Homepage() {
  return (
    <div className="flex">      
       <Sidebar/>
       {/* <Default/> */}
       <WritingSection/>
    </div>
  )
}
