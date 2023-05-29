import ig from '../assets/icons/ig.svg'
import fb from '../assets/icons/fb.svg'
import Image from 'next/image'
import Stat from '../molecules/stat'
import Input_email from '../atoms/input_email'
import Rating from '../atoms/rating'
export default function Footer() {
  return (
    <footer className='text-slate-900 mt-20 mb-6 md:px-36 px-10 '>
        <section className='flex flex-wrap lg:flex-nowrap gap-20'>

        <section className='aboutUs w-full md:-1/2'>
            <h3 className='text-xl'>Tentang Kami</h3>
            <p className='text-sm text-[#aeb0b7] mt-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus consequatur vel ipsam sapiente quasi voluptatibus explicabo, ducimus laborum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus consequatur vel ipsam</p>
            <section>
                <h5 className='text-sm mt-5 sm:mt-8'>Follow kami!</h5>
                <section className='flex gap-2 mt-2'>
                    <section className='rounded-full shadow-sm bg-[#eee] p-1'><Image src={fb} width={20} height={20}/></section>
                    <section className='rounded-full shadow-sm bg-[#eee] p-1'><Image src={ig} width={20} height={20}/></section>               
                    </section>
            </section>
        </section>

        <section className='Links w-full md:-1/5'>
        <h3 className='text-xl'>Tautan</h3>
        <ul className='text-sm text-[#aeb0b7] mt-1'>
            <li >Beranda</li>
            <li className='py-2'>Produk</li>
            <li>About</li>
        </ul>
        </section>

        <section className='statss w-full md:-1/5'>
        <h3 className='text-xl'>Rating</h3>
        <section className='my-2 flex flex-col  gap-3 '>
            <Rating/>
            <Stat/>
        </section>
        </section>
        
        <section className='contact w-full md:-1/4'>
        <h3 className='text-xl'>Hubungi Kami</h3>
        <Input_email/>

        </section>

        </section>

    </footer>
  )
}
