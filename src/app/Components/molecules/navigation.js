'use client'
import Image from 'next/image'
import keranjang from '../assets/icons/keranjang.svg'
import menu from '../assets/icons/menu.svg'
import Link from 'next/link'
import InputSearch from '../atoms/input_search'
import Kbd from '../atoms/kbd'
import { useEffect, useState } from 'react'
import Loading from '../atoms/loading'
import Cf_Login from '@/app/config/Users/cf_login'
import Login_csr_true from '@/app/config/Users/login.csr'
import ToggleDarkmode from '../atoms/toggle_darkmode'
import { usePathname } from 'next/navigation'
import { destroyCookie } from 'nookies'


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

export function loading(setLoading_btn) {
  setLoading_btn(true)

  setTimeout(()=>{
    setLoading_btn(false)
  },3000)
}


export default function Navigation({props}) {
  const [searchkey,setSearchKey] = useState(false)
  const [login,setLogin] = useState()
  const path = usePathname()
  
  // Loading UI
  const [loading_btn,setLoading_btn] = useState(false)
  const loadingset = loading_btn && <Loading/>

  async function logout (){
    if(!confirm('Kamu akan logout ?')) return false
    await  destroyCookie(null,'msk')
    await  destroyCookie(null,'tkn')
    location.href = '/pages/login'
  }

  useEffect(()=> {
    SearchKeyDown(setSearchKey)
    setLogin(Login_csr_true())
  },[])
  return (
<>
<section className="navbar lg:flex  lg:px-32  py-5 bg-[#ffa500] dark:bg-transparent">
  {loadingset}
  <section className="flex-1">
  <Link href="/" onClick={()=>loading(setLoading_btn)}> <p className="btn btn-ghost uppercase text-xl hover:bg-orange-400 active:bg-orange-300">Seblaks</p> </Link>
  </section>
  <section className="flex-none">
    <ul className="menu menu-horizontal px-1 flex items-center gap-7">
    <li className='relative hidden sm:block'>
     <section className='scale-0 sm:scale-90 absolute right-0 top-0 bottom-0 hover:bg-transparent  gap-1' onClick={() => document.querySelector('.input-search').focus()}> 
     <Kbd props={{text1:"CTRL", text2:"Y"}}/> </section>
      <InputSearch props={{searchkey}}/>
    </li>
    {login ? <li onClick={() => logout()} ><p className='hover:bg-orange-400 active:bg-orange-300 rounded-md hidden lg:inline' >Logout </p></li> :
    <>
    <Link href={'/pages/login'}  onClick={() => loading(setLoading_btn)}> <li><p  className='hover:bg-orange-400 active:bg-orange-300  rounded-md hidden lg:inline' >Masuk</p></li></Link></>}

<section className='flex gap-2'>
{path !== '/' ? '' : <ToggleDarkmode/>}
      <section className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-orange-400 active:bg-orange-300 rounded-full">
       <Link href={"pages/keranjang"}> <section className="indicator">
        <Image src={keranjang} width={32} height={32} alt='keranjang'  />
          <span className="badge badge-sm indicator-item bg-white text-neutral-900 border-0">8</span>
        </section>
        </Link>
      </label>
      <section tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"/>
    </section>
    <section className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:bg-orange-400 active:bg-orange-300 rounded-full">
        <section className="w-10 rounded-full" >
          <Image src={menu} width={32} height={32} alt='menu' />
        </section>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-orange-500">
      <li className='relative sm:hidden'>
      <InputSearch props={{searchkey}}/>
    </li>
    <Link href="/pages/list_menu" onClick={()=>loading(setLoading_btn)} ><li className='inline'><p className='active:bg-orange-400'>Home</p></li></Link>      
    <Link href="/pages/list_menu" onClick={()=>loading(setLoading_btn)} ><li className='inline'><p className='active:bg-orange-400'>Menu Seblak</p></li></Link>
    
    {login ? <li onClick={() => logout()} ><p className='hover:bg-orange-400 active:bg-orange-300 rounded-md lg:inline'>Logout </p></li>:
   <> <Link href={'/pages/login'} onClick={()=>loading(setLoading_btn)}> <li className='inline sm:hidden'><p className='active:bg-orange-400'>Masuk</p></li></Link> </> }   

    <div className="tooltip tooltip-bottom hover:cursor-text bg-transparent hover:bg-transparent  focus:text-white focus:bg-transparent focus:outline-gray-100" data-tip="Silahkan laporkan keluhan dan masalah seperti kehilangan ID pesanan dan lainnya. kami akan membantu anda. terimakasih">
    <Link href="https://wa.me/085723976965" onClick={()=>loading(setLoading_btn)} ><li className='inline'><p className='active:bg-orange-400'>Lapor Masalah</p></li></Link>
    </div>
    </ul>
    </section>
    </section>
    </ul>
  </section>
</section>

</>
  )
}
