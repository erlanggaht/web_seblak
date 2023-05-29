import Image from 'next/image'
import keranjang from '../assets/icons/keranjang.svg'
import menu from '../assets/icons/menu.svg'


// MX layout mx-40

export default function Navigation() {


  return (
<>
<section className="navbar  lg:flex lg:px-32  py-5">
  <section className="flex-1">
    <a className="btn btn-ghost uppercase text-xl hover:bg-[#d33f01]">Seblaks</a>
  </section>
  <section className="flex-none">
    <ul className="menu menu-horizontal px-1 flex gap-7">
      <li className='hover:bg-[#d33f01] rounded-md hidden lg:inline'><a>Home</a></li>
      <li className='hover:bg-[#d33f01] rounded-md hidden lg:inline'><a>Menu</a></li>
      <li className='hover:bg-[#d33f01] rounded-md hidden lg:inline'><a>Observation</a></li>
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
      <li className='lg:hidden inline'><a>Home</a></li>
      <li className='lg:hidden inline'><a>Menu</a></li>
      <li className='lg:hidden inline'><a>Observation</a></li>
        <li><a>Logout</a></li>
      </ul>
    </section>
    </section>
    </ul>
  </section>
</section>

</>
  )
}
