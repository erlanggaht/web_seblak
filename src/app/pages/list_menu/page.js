'use client'
import Breadcump from '@/app/Components/atoms/breadcump'
import Card_shop from '@/app/Components/atoms/card_shop'
import {usePathname} from 'next/navigation'
import buy1 from '../../Components/assets/art1.bmp'
import buy2 from '../../Components/assets/art2.bmp'
import buy3 from '../../Components/assets/ceker.bmp'
import buy4 from '../../Components/assets/baso.bmp'



export default function Page() {
  const path = usePathname().split('/')
  return (
    <section className='container mx-auto my-20'>
      <section className='p-3 shadow-sm border rounded-md text-slate-900'>
      <Breadcump props={{page1:path[1],page2:path[2]}}/>  
      </section>

    <section className='my-12 flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4 flex-wrap md:flex-nowrap '>
      <Card_shop 
      props = {{image:buy1,title:"Seblak Seafood",desc:"Seblak dicampur dengan seafood bikin pool",harga:24000}}
      />
        <Card_shop 
      props = {{image:buy2,title:"Seblak Kering",desc:"buat dengen sangu enak.",harga:11000}}
      />
        <Card_shop 
      props = {{image:buy3,title:"Seblak Ceker",desc:"gass seblak ceker ayam jago ready",harga:21000}}
      />
    <Card_shop 
      props = {{image:buy4,title:"Seblak Baso",desc:"hmzzz menarik seblak baso",harga:18000}}
      />
    </section>

    </section>
  )
}
