'use client'
import Link from "next/link"
import { redirect } from "next/navigation"


export default function Terimakasih() {
  // if(typeof window !== undefined) {
  //    const session = sessionStorage.getItem('data')
  //   if(!session) {
  //     redirect('/')
  //   } else {
  //     setTimeout(()=>{
  //       sessionStorage.clear()    
  //     },3000)
  //   }

  // }

   return (
    <>
    <div className="hero min-h-screen bg-[#ffa500]">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className="text-5xl font-bold font-bold text-3xl uppercase">Terima Kasih</h1>
      <p className="py-6">pesanan sedang diproses yaa.. selamat menikmati seblak kami.. salam pedassss 🔥🔥🔥</p>
     <Link href={'/'}> <button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-400 ">Beranda</button></Link>
     <Link href={'/pages/list_menu'}> <button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-400">Beli Lagi</button></Link>

    </div>
  </div>
</div>
    </>
   )
 }