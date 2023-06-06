'use client'
import Cf_Login from '@/app/config/Users/cf_login'
import Login_csr_true from '@/app/config/Users/login.csr'
import { useRouter } from 'next/navigation'
import { destroyCookie } from 'nookies'
import React, { useEffect, useState } from 'react'



export default function Login() {
  let router = useRouter()
  const [login,setLogin] = useState()
  const [logout_loading,setLogoutLoading] = useState()
  const [user,setUser] = useState({
    AToken : "",
    username : "",
    userid : ""
  })

  function  Login () {
    let config_login = Cf_Login()
    config_login.then(res =>{
      setUser({
        AToken : res.token,
        username : res.username,
        userid : res.userid
      })
    })
  }

    async function logout () {
      location.href = '/'
      await destroyCookie(null,'tkn')
      await destroyCookie(null,'msk')
  }


  useEffect(()=>{
    if(user.AToken) {
      router.push(`pages/token/${user.userid}`)
    }
    setLogin(Login_csr_true())
  },[user.userid])

  
  return (
    <div className=' h-screen items-center flex flex-col justify-center  '>

        <h1 className='text-2xl text-center text-neutral-900 dark:text-white'>Masuk</h1>
        <p className='text-neutral-500 dark:text-slate-400 text-center  text-lg pt-1 '>selamat datang pelanggan setia kami. silahkan login dengan email google untuk dapatkan fitur dan promo menarik.</p>
       <div className='my-12 text-center'>
        <p className='text-slate-700 p-2 cursor-not-allowed'>{login ? "Anda Sudah Login" : null}</p>
       <button type="button" className="login-with-google-btn mx-2" onClick={()=>Login()} disabled={login ? true : false}>Masuk dengan google </button>
       <button type="button" className="login-with-google-btn" onClick={()=> logout()} disabled={login ? false : true}> Logout </button>

       </div>
    </div>  
  )
}
