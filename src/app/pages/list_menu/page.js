'use client'
import Breadcump from '@/app/Components/atoms/breadcump'
import Card_shop from '@/app/Components/atoms/card_shop'
import {usePathname} from 'next/navigation'
import buy1 from '../../Components/assets/art1.jpg'
import buy2 from '../../Components/assets/art2.jpg'
import buy3 from '../../Components/assets/ceker.jpg'
import buy4 from '../../Components/assets/baso.jpg'
import { useState,useEffect } from 'react'
import Login_csr_true from '@/app/config/Users/login.csr'



export default function Page() {
  const path = usePathname().split('/')
  const [login,setLogin] = useState()


    useEffect(()=>{
      setLogin(Login_csr_true())
    },[])

  return (
    <section className='container mx-auto mt-20 pb-3'>
      <div className='sm:text-right text-center my-6 mx-3'><span className='text-white text-center rounded-md shadow-md p-3 italic bg-orange-500 inline-block'>Silahkan Daftar & Login untuk dapatkan fitur keranjang dan promo potongan harga.</span></div>
      <section className='p-3 shadow-sm border rounded-md text-slate-900 bg-white'>
      <Breadcump props={{page1:path[1],page2:path[2]}}/>  
      </section>

    <section className='my-12 flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4 flex-wrap md:flex-nowrap '>
      <Card_shop 
      props = {{image:buy1,title:"Seblak Seafood",desc:"Seblak dicampur dengan seafood bikin pool",harga:24000,login:login}}
      />
        <Card_shop 
      props = {{image:buy2,title:"Seblak Kering",desc:"buat dengen sangu enak.",harga:11000,login:login}}
      />
        <Card_shop 
      props = {{image:buy3,title:"Seblak Ceker",desc:"gass seblak ceker ayam jago ready",harga:21000,login:login}}
      />
    <Card_shop 
      props = {{image:buy4,title:"Seblak Baso",desc:"hmzzz menarik seblak baso",harga:18000,login:login}}
      />
    </section>
    <p className='text-center text-neutral-700 dark:text-white'>Menu seblak baru akan tersedia...</p>
    </section>
  )
}
