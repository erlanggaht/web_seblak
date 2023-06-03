'use client'
import Image from 'next/image'
import keranjang from '../assets/icons/keranjang.svg'
import menu from '../assets/icons/menu.svg'
import Link from 'next/link'
import InputSearch from '../atoms/input_search'
import Kbd from '../atoms/kbd'
import { useEffect, useState } from 'react'


// MX layout mx-40


export function SearchKeyDown (setSearchKey) {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Control') {
      document.addEventListener('keyup', function(el){
      if(el.key === 'y')  setSearchKey(true)
      if(el.ctrlKey)  setSearchKey(true) 
      else setSearchKey(false)

       
      })
    }

  })
}


export default function Navigation({props}) {
  const [searchkey,setSearchKey] = useState(false)
  useEffect(()=> {
    SearchKeyDown(setSearchKey)
  },[])
  return (
<>
<section className="navbar lg:flex  lg:px-32  py-5 bg-[#ffa500]">
  <section className="flex-1">
  <Link href="/"> <p className="btn btn-ghost uppercase text-xl hover:bg-orange-400 active:bg-orange-300">Seblaks</p> </Link>
  </section>
  <section className="flex-none">
    <ul className="menu menu-horizontal px-1 flex items-center gap-7">
    <li className='relative hidden sm:block'>
     <section className='scale-0 sm:scale-90 absolute right-0 top-0 bottom-0 hover:bg-transparent  gap-1' onClick={() => document.querySelector('.input-search').focus()}> 
     <Kbd props={{text1:"CTRL", text2:"Y"}}/> </section>
      <InputSearch props={{searchkey}}/>
    </li>
    <Link href={'/pages/signup'}> <li ><p className='hover:bg-orange-400 active:bg-orange-300 rounded-md hidden lg:inline'>Daftar</p></li></Link>
    <Link href={'/pages/login'} > <li><p  className='hover:bg-orange-400 active:bg-orange-300  rounded-md hidden lg:inline' >Masuk</p></li></Link>
      <section className='flex gap-2'>
      <section className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-orange-400 active:bg-orange-300 rounded-full">
        <section className="indicator">
        <Image src={keranjang} width={32} height={32} alt='keranjang'  />
          <span className="badge badge-sm indicator-item bg-white text-neutral-900 border-0">8</span>
        </section>
      </label>
      <section tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"/>
    </section>
    <section className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:bg-orange-400 active:bg-orange-300 rounded-full">
        <section className="w-10 rounded-full" >
          <Image src={menu} width={32} height={32} alt='menu' />
        </section>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-oren-seblak">
      <li className='relative sm:hidden'>

      <InputSearch props={{searchkey}}/>
    </li>
      <li className='inline'><p>Home</p></li>
      <Link href="/pages/list_menu"  ><li className='inline'><p>Menu Seblak</p></li></Link>
      <Link href={'/pages/signup'}  > <li className='inline'><p>Daftar</p></li></Link>
    <Link href={'/pages/login'} > <li className='inline'><p>Masuk</p></li></Link>      
    </ul>
    </section>
    </section>
    </ul>
  </section>
</section>

</>
  )
}
