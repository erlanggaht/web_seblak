'use client'
import Cf_Login from '@/app/config/Users/cf_login'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export default function Login() {
  const router = useRouter()
  const path = usePathname()
  const [user,setUser] = useState({
    AToken : "",
    username : "",
    userid : ""
  })

  

  async function  Login () {
    let config_login = await Cf_Login()
    await setUser({
      AToken : config_login.token,
      username : config_login.username,
      userid : config_login.userid
    })
    router.push(`${path}${user.AToken}`)

   }
 
  return (
    <div className='mt-7'>

        <h1 className='text-2xl text-center text-neutral-900'>Masuk</h1>
        <p className='text-neutral-500 text-center  text-lg pt-1 '>selamat datang pelanggan setia kami. silahkan login dengan email google untuk dapatkan fitur dan promo menarik.</p>
       <div className='my-12 text-center'>
       <button type="button" className="login-with-google-btn" onClick={()=>Login()}>Masuk dengan google </button>
       </div>
    </div>  
  )
}
