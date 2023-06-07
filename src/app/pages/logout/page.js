'use client'

import { destroyCookie } from "nookies"
import { resolve } from "styled-jsx/css"

async function out () {
    new Promise (resolve => {
        const a =  destroyCookie(null,'msk')
        const b = destroyCookie(null,'tkn')
        resolve(a,b)    
    })
}

export default async function Logout() {
    console.log(out())
    // location.href = '/'


}


