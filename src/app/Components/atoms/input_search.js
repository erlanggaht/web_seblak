'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function InputSearch({props}) {
  const {searchkey} = props
  const [id,setId] = useState('')
  const router = useRouter()
  const [placholder,setPlaceholder] = useState('cari pesanan saya')
  if(searchkey) document.querySelector('.input-search').focus()


  useEffect(()=>{
    setTimeout(()=>{
      setPlaceholder('masukan ID dan ENTER')
      setTimeout(()=>{
        clearTimeout()
        setPlaceholder('cari pesanan saya')
      },3000)
    },2000)
    
  },[])

  function CariPesanan (e) {
    e.preventDefault()
    router.push('/pages/pesanan_tamu?ID='+id)
  }

  return (
    <div className="tooltip tooltip-bottom hover:cursor-text bg-transparent hover:bg-transparent  focus:text-white focus:bg-transparent focus:outline-gray-100" data-tip="masukan 'ID' pesanan anda dan jika sudah tekan 'ENTER'">
      <form onSubmit={(e) => CariPesanan(e)}>
        <input type="text" placeholder={placholder} className="hover:cursor-text input input-search pr-12 pl-1 sm:pl-3 py-3 bg-transparent hover:bg-orange-400 w-full max-w-xs text-white placeholder:text-white focus:text-white focus:bg-transparent focus:outline-gray-100 placeholder:text-[11px] sm:placeholder:text-sm input-bordered border-white sm:border-transparent" onChange={(e) => setId(e.target.value) }/>
        </form>
        </div>
  )
}
