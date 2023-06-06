'use client'
import { usePathname, useRouter } from "next/navigation"
import { parseCookies, setCookie } from "nookies"
import { useEffect } from "react"
export default function Tkn() {
  const router = useRouter()
  const path = usePathname()
  let FindTokenUrL = path.split('/').find(m=>m.length > 25 ? m : false )
  
  useEffect(()=>{
    async function setCookies() {
     setCookie(null,'tkn',FindTokenUrL,{
      maxAge:86400
     })
     parseCookies().tkn
    }
    if(setCookies()) setCookie(null,'msk',true,{
      maxAge:86400
    }) 
    else setCookie(null,'msk',false,{
      maxAge:0
    })


    if(FindTokenUrL) router.replace('/pages/login/')
  },[])
}
