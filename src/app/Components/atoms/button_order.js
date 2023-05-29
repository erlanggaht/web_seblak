import Image from "next/image";
import arrow_right from '../assets/icons/arrow_right.svg'
import Link from "next/link";

export default function Button_order({text,Links}) {
  return (
    <>
    <Link href={`${Links}`}><button className='uppercase bg-[#d33f01] px-6 py-3 flex gap-2 rounded-sm text-white'>{text} <Image src={arrow_right} width={27} height={27} alt="arrow" /></button></Link>
    </>
  )
}
