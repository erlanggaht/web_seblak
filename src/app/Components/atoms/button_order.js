'use client'
import Image from "next/image";
import arrow_right from '../assets/icons/arrow_right.svg'
import Link from "next/link";
import { loading } from "../molecules/navigation";
import { useState } from "react";
import Loading from "./loading";

export default function Button_order({text,Links}) {  
  // Loading UI
  const [loading_btn,setLoading_btn] = useState(false)
  const loadingset = loading_btn && <Loading/>

  return (
    <>
    <Link href={`${Links}`} onClick={()=>loading(setLoading_btn)}><button className='uppercase bg-[#d33f01] px-6 py-3 flex gap-2 rounded-sm text-white'>{text} {loading_btn ? <Loading/>:<Image src={arrow_right} width={27} height={27} alt="arrow" /> }</button></Link>
    </>
  )
}
