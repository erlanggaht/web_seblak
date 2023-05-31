import Link from 'next/link'
import React from 'react'

export default function Login() {
  return (
    <div className='mt-7'>

        <h1 className='text-2xl text-center text-neutral-900'>Masuk</h1>
        <p className='text-neutral-500 text-center  text-lg pt-1 '>selamat datang pelanggan setia kami. silahkan login untuk dapatkan promo menarik.</p>
        <div className="form-control w-full max-w-xs text-[#293340] mx-auto my-20 ">
  <label className="label">
    <span className="label-text">email :</span>
  </label>
  <input type="text" placeholder="cth : asep@gmail.com" className="input input-bordered w-full max-w-xs" />

  <label className="label">
    <span className="label-text">password :</span>
  </label>
  <input type="password" placeholder="*******" className="input input-bordered w-full max-w-xs" />
  <div className='text-right'>
  <Link href='/pages/signup'> <button  className='py-3 px-5 my-3 rounded-sm hover:bg-transparent hover:text-gray-500'>Daftar</button></Link>
  <button type='submit' className='py-3 px-5 my-3 rounded-sm bg-orange-500 text-white'>Masuk</button>  
  </div>
</div>
    </div>
  )
}
