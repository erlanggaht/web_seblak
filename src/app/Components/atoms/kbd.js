import React from 'react'

export default function Kbd({props}) {
    const {text1,text2} = props
  return (
    <>
   <kbd className="kbd kbds text-sm  cursor-text hover:bg-white-400 bg-white text-orange-500 border-none outline-none ">{text1}</kbd>
    <kbd className="kbd text-sm  cursor-text hover:bg-white-400 bg-white text-orange-500 border-none outline-none">{text2}</kbd>
    </>
  )
}
