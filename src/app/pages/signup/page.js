import Link from 'next/link'


export default async function Signup() {


  return (
    <div className='cotainer mx-auto mt-7'>

        <h1 className='text-2xl text-center text-neutral-900'>Daftar</h1>
        <p className='text-neutral-500 text-center  text-lg pt-1 '>selamat datang. silahkan daftar untuk dapatkan kupon promo menarik dan menjadi customer setia kami agar order seblak lebih gampang.</p>

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
 <Link href='/pages/login'> <button  className='py-3 px-5 my-3 rounded-sm hover:bg-transparent hover:text-gray-500'>Masuk</button></Link>
  <button type='submit' className='py-3 px-5 my-3 rounded-sm bg-orange-500 text-white'>Daftar</button>
  </div>
</div>
    </div>
  )
}
