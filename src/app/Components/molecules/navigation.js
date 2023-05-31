import Image from 'next/image'
import keranjang from '../assets/icons/keranjang.svg'
import menu from '../assets/icons/menu.svg'
import Link from 'next/link'


// MX layout mx-40

export default function Navigation({props}) {


  return (
<>
<section className="navbar  lg:flex lg:px-32  py-5 bg-[#ffa500]">
  <section className="flex-1">
  <Link href="/"> <p className="btn btn-ghost uppercase text-xl hover:bg-[#d33f01]">Seblaks</p> </Link>
  </section>
  <section className="flex-none">
    <ul className="menu menu-horizontal px-1 flex gap-7">
    <Link href={'/pages/signup'}  className='hover:bg-[#d33f01] rounded-md hidden lg:inline'> <li ><p>Daftar</p></li></Link>
    <Link href={'/pages/login'}  className='hover:bg-[#d33f01] rounded-md hidden lg:inline'> <li ><p>Masuk</p></li></Link>
      <section className='flex gap-2'>
      <section className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle hover:bg-[#d33f01] rounded-full">
        <section className="indicator">
        <Image src={keranjang} width={32} height={32} alt='keranjang'  />
          <span className="badge badge-sm indicator-item bg-white text-neutral-900 border-0">8</span>
        </section>
      </label>
      <section tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"/>
    </section>
    <section className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar hover:bg-[#d33f01] rounded-full">
        <section className="w-10 rounded-full" >
          <Image src={menu} width={32} height={32} alt='menu' />
        </section>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-oren-seblak">
      <li className='inline'><p>Home</p></li>
      <Link href="/pages/list_menu"  ><li className='inline'><p>Menu Seblak</p></li></Link>
      <Link href={'/pages/signup'}  > <li className='inline'><p>Daftar</p></li></Link>
    <Link href={'/pages/login'} > <li className='inline'><p>Masuk</p></li></Link>      </ul>
    </section>
    </section>
    </ul>
  </section>
</section>

</>
  )
}
