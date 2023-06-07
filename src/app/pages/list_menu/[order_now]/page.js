'use client'

import Breadcump from "@/app/Components/atoms/breadcump"
import Loading from "@/app/Components/atoms/loading"
import { loading } from "@/app/Components/molecules/navigation"
import Add_Data from "@/app/config/Tamu/add_data"
import { db } from "@/app/config/firebase"
import Image from "next/image"
import { redirect, useParams,useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import {addDoc, doc, setDoc} from 'firebase/firestore'
import keranjangicon from '@/app/Components/assets/icons/basket_add.svg'
import Login_csr_true from "@/app/config/Users/login.csr"
import Add_data from "@/app/config/Users/add_data"
import TanggalIndoensia from "@/app/config/datetime"


const rupiah = (number)=>{
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR"
  }).format(number);
}

export const DataSave = () => {
  if(typeof window  !== 'undefined') {
    const data = sessionStorage.getItem('data')
    return JSON.parse(data)
  }else {
    return false
  }
}

export const ErrorParams_Not = () => {
   const path = useParams()
  return {
    path
  }
}

const {  hari,bulan,tanggal,jam,menit,detik,tahun  } = TanggalIndoensia()

export default function Order() {
 
  const login = Login_csr_true()
  const {path} = ErrorParams_Not()
  const router = useRouter()
  const {image,title,desc,harga} = DataSave()
  const [harga_seblak_tambah,setHarga] = useState(0)
  const [loading_btn,setLoading_btn] = useState(false)
  const loadingset = loading_btn && <Loading/>

 
  const [input,setInputs] = useState({
    nama : "",
    alamat : "",
    jumlah :parseInt(1),
    level_pedas : "Ezyyy",
  })
  const [total_harga,setTotal_harga] = useState()
  if(
  path.order_now !== 'order_now') redirect('/notfound')


  const setInput = (e) => {
    const targets = e.target
    const name = targets.name
      setInputs({
        ...input,
        [name] : targets.value,
        })
  }

  useEffect(()=>{
   setTotal_harga(rupiah((harga*input.jumlah)))
  },[input])

  //Tamu Submit
  const pesanSubmit = async (e) => {
    e.preventDefault();
   await Add_Data({
    nama : input.nama,
    alamat : input.alamat,
    jumlah : input.jumlah,
    level_pedas : input.level_pedas,
    total_harga : input.jumlah == 1 ? rupiah(harga+(input.level_pedas === 'Pedas setan' && 2000)) : rupiah((harga*input.jumlah)+(input.level_pedas === 'Pedas setan' && 2000)),
    nama_seblak : title,
   })
   if(confirm('yakin ?')) {
     setTimeout(()=>{
       loading(setLoading_btn)       
    },1200)
    router.replace('/terimakasih')
  }
  }


  // Codition user login sumbit
  function PesanSubmit_UserLogin () {
   

    Add_data({props : docDataSchema_user})
  }


//Rendering
  return (
    <section className='container mx-auto mt-20 pb-6 text-neutral-900 dark:text-white'>
          <section className='p-3 shadow-sm border rounded-md text-slate-900 bg-white'>
    <Breadcump props={{page1:"pages",page2:"list_menu",page3:path.order_now}}/>
    </section>
    <div className="card card-side  shadow-xl my-12 flex-col md:flex-row mx-6 dark:bg-white bg-white dark:text-slate-700 ">
  <figure className="w-full md:w-[300px] md:h-[300px] md:p-4 md:m-auto max-h-[400px] rounded-r-xl">
    <Image src={`${image}`} width={200} height={360} className="w-full h-full object-cover md:rounded-full" alt="Movie"/></figure>
  <div className="card-body">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between ">
     <div>
   <h2 className="card-title">{title}</h2>
    <p className="flex-grow-0">{desc}</p>
    </div>
    <p className="text-left sm:text-right sm:my-0 my-2 text-xl font-bold ">{rupiah(harga).split(',')[0]} {harga_seblak_tambah ? "+ " + harga_seblak_tambah : ""}</p>
    </div>
    <form className="sm:h-full relative mt-2 mx-1 sm:mx-0 dark:text-white" onSubmit={(e) => pesanSubmit(e)}>
      <section className="flex flex-col justify-center">
        <section>
    <span className="label-text-alt p-1">Nama : </span><br/>
    <input name="nama" type="text" placeholder="Nama pemesan" required className="input input-bordered border-orange-500 focus:outline-orange-300 input-primary lg:w-[200px] w-full max-w-xs bg-white dark:text-slate-700 " 
    onChange={(e) => setInput(e)}/> 
     </section>  
     <span className="label-text-alt p-1 mt-3">Berapa piring/bungkus : </span><br/>
    <input type="number" value={input.jumlah} name="jumlah" placeholder="Jumblah pesan" min={1} max={10} minLength={0} maxLength={10} className="inp_number input input-bordered border-orange-500 focus:outline-orange-300 input-primary lg:w-[200px] w-full max-w-xs bg-white dark:text-slate-700 mb-3 sm:mb-0" onChange={(e)=>setInput(e)} />  
    </section>

    <section>
    <span className="label-text-alt p-1">Alamat : </span><br/>
    <input name="alamat" required type="text" placeholder="Alamat pemesan" className="input input-bordered border-orange-500 focus:outline-orange-300 input-primary lg:w-[200px] w-full max-w-xs bg-white dark:text-slate-700"
    onChange={(e) => setInput(e)} />  
    </section>  
    
    <section className="mt-2">
    <span className="label-text-alt p-1">Level pedas : </span><br/>
    <select name="level_pedas" className="input input-bordered border-orange-500 focus:outline-orange-300 input-primary lg:w-[200px] w-full max-w-xs bg-white dark:text-slate-700" onChange={(e) => setInput(e)}>
  <option>Ezyyy</option>
  <option>Normal</option>
  <option>Pedas biasa</option>
  <option>Pedas bgt</option>
  <option>Pedas setan (+2.000)</option>
</select>

    </section>  
    <div className="static flex justify-center items-center mt-12 mb-2 sm:-bottom-3 sm:right-0 lg:absolute">
    <div className="px-5 dark:text-slate-800">Total :<span className=" text-orange-500 font-bold"> {input.jumlah == 1 ? rupiah(harga+(input.level_pedas === 'Pedas setan' && 2000)) : rupiah((harga*input.jumlah)+(input.level_pedas === 'Pedas setan' && 2000))}  </span></div>
     {login && <Image src={keranjangicon} alt="keranjangsvg" height={39} width={39} className="hover:bg-transparent hover:opacity-80 cursor-crosshair"/> }
      {login ? <button className="btn btn-primary bg-orange-500 border-none hover:bg-oren-seblak mx-5" onClick={() => PesanSubmit_UserLogin()}>{<Loading/> && 'Pesan'}</button> :
      <button type="submit" className="btn btn-primary bg-orange-500 border-none hover:bg-oren-seblak mx-5">{<Loading/> && 'Pesan'}</button>}

    </div>
    </form>
  
  </div>
</div>
    </section>
  )
}

export const docDataSchema_user = {
  nama_lengkap : "",
  nama_id : "",
  alamat : "",
  jenis_seblak : {
      seblak_ceker : {
          nama_seblak : "Seblak Ceker",
          jumlah : 1,
          level_pedas : "",
          total_harga : "",
          tanggal_pembelian :'',
          waktu_pembelian : '',
            },
         
            seblak_seafod : {
                nama_seblak : "Seblak Seafood",
                jumlah : 1,
                    level_pedas : "",
                    total_harga : "",
                    tanggal_pembelian :'',
                    waktu_pembelian : '',
            },
           
    
       
      
      seblak_kering: {
          nama_seblak : "Seblak Kering",
          jumlah : 1,
           level_pedas : "",
            total_harga : "",
              tanggal_pembelian :'',
              waktu_pembelian : '',
          
          
      },
      
      seblak_baso : {
          nama_seblak : "Seblak Baso",
          jumlah : 1,
              level_pedas : "",
              total_harga : "",
              tanggal_pembelian :'',
              waktu_pembelian : '',
      },
  }
};
