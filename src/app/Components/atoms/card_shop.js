'use client'
import Image from 'next/image'
import add_keranjang from '../assets/icons/basket_add.svg'
import { useRouter } from "next/navigation"
import Loading from './loading'
import { useEffect, useState } from 'react'
import { loading } from '../molecules/navigation'
import Link from 'next/link'
import Login_csr_true from '@/app/config/Users/login.csr'


export const DataShop = (props) =>{
  const {image,title,desc,harga} =  props
  sessionStorage.setItem('data',JSON.stringify({image,title,desc,harga}))
}

export default function Card_shop({props}) {
   const router = useRouter()
   const {login} = props
   const [loading_btn,setLoading_btn] = useState(false)
   const loadingset = loading_btn && <Loading/>
  
   const NextOrderPage = async (data) => {
    await DataShop(data)
    router.push('/pages/list_menu/order_now')
  }


  return (
<div className="card card-compact w-96 bg-base-100 shadow-xl text-neutral-900 bg-white">
  <figure className='h-[256px] w-[100%]'><Image src={props.image} alt={props.title} height={256} width={328} className='max-w-full object-cover w-full h-full'/></figure>
  <div className="card-body">
    <h2 className="card-title max-h-[60px] h-[50px]">{props.title}</h2>
    <p className='max-h-[60px] h-[50px]'>{props.desc}</p>
    <div className="card-actions justify-end">
  <button className="btn btn-primary mt-2 bg-transparent text-orange-500 border-none hover:bg-gray-100 px-2 rounded-full"  onClick={() => login ? router.push('/pages/keranjang') : alert('Harus Login') }><Image alt='add_kernanjang' src={add_keranjang} width={32} height={32}/></button>
      <button className="btn btn-primary mt-2 bg-orange-500 border-none hover:bg-oren-seblak" onClick={() => NextOrderPage({
        image : props.image.src,
        title : props.title,
        desc : props.desc,
        harga : props.harga
      },loading(setLoading_btn))}>{loading_btn ? <Loading/> :"order now" }</button>
    </div>
  </div>
</div>  )
}
