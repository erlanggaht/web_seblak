'use client'

import Breadcump from "@/app/Components/atoms/breadcump"
import Add_Data from "@/app/config/add_data"
import Image from "next/image"
import { redirect, useParams, } from "next/navigation"
import { parse } from "postcss"
import { useEffect, useState } from "react"


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



export default function Order() {
  const {path} = ErrorParams_Not()
  const {image,title,desc,harga} = DataSave()
  const [harga_seblak_tambah,setHarga] = useState(0)
  const [total_harga,setTotal_harga] = useState(1)
  const [input,setInputs] = useState({
    nama : "",
    alamat : "",
    jumlah :parseInt(1),
    level_pedas : "",
    total_harga : harga
  })
  if(path.order_now !== 'order_now') redirect('/notfound')


  const setInput = (e) => {
    const targets = e.target
    const name = targets.name
    
    setInputs({
      ...input,
      [name] : targets.value,
      total_harga : rupiah((harga*input.jumlah)+harga_seblak_tambah).split('Rp')[1].split(',')[0],

        })
  }

 
console.log(input)
  const pesanSubmit = async (e) => {
    e.preventDefault();
   await Add_Data()
  //  redirect('/pages/list_menu')
  }
  return (
    <section className='container mx-auto my-20 text-neutral-900'>
          <section className='p-3 shadow-sm border rounded-md text-slate-900'>
    <Breadcump props={{page1:"pages",page2:"list_menu",page3:path.order_now}}/>
    </section>
    <div className="card card-side bg-base-100 shadow-xl my-12 flex-col md:flex-row mx-6 ">
  <figure className="w-full md:w-[310px] max-h-[400px] rounded-r-xl"><Image src={`${image}`} width={200} height={360} className="w-full h-full object-cover" alt="Movie"/></figure>
  <div className="card-body">
    <div className="flex justify-between ">
     <div>
   <h2 className="card-title">{title}</h2>
    <p className="flex-grow-0">{desc}</p>
    </div>
    <p className="text-right text-xl font-bold text-orange-500">{rupiah(harga).split(',')[0]} {harga_seblak_tambah ? "+ " + harga_seblak_tambah : ""}</p>
    </div>
    <form className="h-full relative mt-2 mx-6" onSubmit={(e) => pesanSubmit(e)}>
      <section>
    <span className="label-text-alt p-1">Nama : </span><br/>
    <input name="nama" type="text" placeholder="Nama pemesan" className="input input-bordered border-orange-500 focus:outline-orange-300 input-primary w-[200px] max-w-xs" 
    onChange={(e) => setInput(e)}/>    
    <input type="number" value={input.jumlah} name="jumlah" placeholder="Jumblah pesan" min={1} max={10} minLength={0} maxLength={10} className="inp_number input input-bordered border-orange-500 focus:outline-orange-300 input-primary w-[200px] max-w-xs mx-2" onChange={(e)=>setInput(e)} />  
    </section>
   
    <section>
    <span className="label-text-alt p-1">Alamat : </span><br/>
    <input name="alamat" type="text" placeholder="Alamat pemesan" className="input input-bordered border-orange-500 focus:outline-orange-300 input-primary w-[200px] max-w-xs"
    onChange={(e) => setInput(e)} />  
    </section>  
    
    <section className="mt-2">
    <span className="label-text-alt p-1">Level pedas : </span><br/>
    <select name="level_pedas" className="input input-bordered border-orange-500 focus:outline-orange-300 input-primary w-[200px] max-w-xs" onChange={(e) => setInput(e)}>
  <option onClick={() => setHarga(0)}>Ezyyy</option>
  <option onClick={() => setHarga(0)}>Normal</option>
  <option onClick={() => setHarga(0)}>Pedas biasa</option>
  <option onClick={() => setHarga(0)}>Pedas bgt</option>
  <option onClick={() => setHarga(2000)}>Pedas setan</option>
</select>

    </section>  
    <div className="absolute bottom-0 right-0">
      <span className="px-2">Total : {input.jumlah == 1 ? rupiah(harga) : rupiah((harga*input.jumlah)+harga_seblak_tambah)}  </span>
      <button type="submit" className="btn btn-primary bg-orange-500 border-none hover:bg-oren-seblak">Pesan</button>
    </div>
    </form>
  
  </div>
</div>
    </section>
  )
}
