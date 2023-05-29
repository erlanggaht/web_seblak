import Image from "next/image";
import arrow_right from '../assets/icons/arrow_right.svg'

export default function Button_order({text}) {
  return (
    <button className='uppercase bg-[#d33f01] px-6 py-3 flex gap-2 rounded-sm text-white'>{text} <Image src={arrow_right} width={27} height={27} alt="arrow" /></button>
  )
}
