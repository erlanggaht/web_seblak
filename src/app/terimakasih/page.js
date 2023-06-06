'use client'
import Image from "next/image"
import Link from "next/link"
import {  usePathname, useRouter } from "next/navigation"
import keranjang from '../Components/assets/icons/keranjang.svg'
import id from '../Components/assets/icons/id.svg'
import Table from "../Components/atoms/table_thanks"
import { useEffect, useState } from "react"
import Get_data from "../config/Tamu/get_data"


export default function Terimakasih() {
  const [keranjangTamu,setKeranjangTamu] = useState()
  const [id_resi_modal,setID_Modal] = useState()
  const [ID_resi,setID_resi] = useState('')
  const [dataTamu,setDataTamu] = useState()
  const path = usePathname()
  const router = useRouter()
  
  if(typeof window !== "undefined") {
     const session = sessionStorage.getItem('data') 
    if(!session) {
      router.replace('/')
    } else {
      setTimeout(()=>{
        sessionStorage.clear()    
      },3.6e+6)
    }

  }

  useEffect(() =>{
     async function getData  () {
      if(typeof window !== 'undefined'){
        const ID_user = sessionStorage.getItem('id_user')  
        setID_resi(ID_user)
        if(!ID_user) return alert('nodata')
         const user_data = await Get_data({ID_user})
         setDataTamu(user_data)
      }
    }
    getData()
  
  },[])
   return (
    <>
     <div className={`fixed ${id_resi_modal ? '-top-2 right-0 sm:right-6' : '-top-36 right-0 sm:right-6 transition' } pt-3 pb-2 sm:pt-6 sm:pb-4 shadow-md w-full sm:w-[360px] mx-auto  grid place-items-center z-50 bg-white text-neutral-700 tr`}>
   <span> ID RESI :</span><p  className="font-bold font-xl py-1 sm:py-3 text-neutral-900"> {ID_resi ? ID_resi :  "Tidak ada id resi." }</p>
      <p className="text-neutral-700">Simpan id resi di atas dengan baik yaa.</p>
      </div>
    <div className="hero min-h-screen bg-[#ffa500] relative">
  <div className="hero-content text-center">
    <div className="max-w-md">
      <h1 className=" font-bold text-3xl uppercase">Terima Kasih</h1>
      <p className="py-6">pesanan sedang diproses yaa..silahkan klik <span className="font-bold uppercase text-neutral-900">id resi</span> dan simpan selamat menikmati seblak kami.. salam pedassss 🔥🔥🔥</p>
     <Link href={'/'}> <button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-400 ">Beranda</button></Link>
     <Link href={'/pages/list_menu'}> <button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-400">Beli Lagi</button></Link>

    </div>
  </div>
</div>

<div className="absolute sm:bottom-5 sm:right-8 bottom-5 right-0 left-0 text-center sm:text-right ">
<button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-400 mr-2" onClick={() => setID_Modal(!id_resi_modal ||false)}> <Image src={id} alt="keranjang" width={23} height={23}/><span className="pl-1">ID RESI</span></button>

<Link href={`${path}#tbl_pesan`}><button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-400" onClick={() => setKeranjangTamu(!keranjangTamu ||false)}> <Image src={keranjang} alt="keranjang" width={23} height={23}/><span className="pl-1">Pesanan Saya</span></button></Link>
</div>

{keranjangTamu && <div className="place-items-center grid py-12 min-h-screen bg-[#f6f6f6] relative">
    <Table props={{bg_head:"#ffa500"}} dataTamu={dataTamu}/>
    <Link href={`${path}`} className="absolute bottom-5 right-8" id="tbl_pesan"><button className="btn btn-primary bg-orange-600 border-none hover:bg-orange-400 " onClick={() => setKeranjangTamu(!keranjangTamu ||false)}><span>Tutup</span></button></Link>
</div> }


    </>
   )
 }