import React from 'react'
import Button_order from '../atoms/button_order'

export default function Description() {
  return (
    <section className='bg-white rounded-sm pb-10 px-7 pt-5 sm:p-12 my-10 sm:m-5 shadow-sm relative w-full sm:w-[720px] text-neutral-900'>
        <p className='text-lg'>Seblak yang mulai populer sekitar tahun 2000an di Bandung, diduga di Garut dan Cianjur Selatan sudah ada kuliner seperti seblak sebelum jaman kemerdekaan yang dikenal dengan nama Kurupuk Leor (karena teksturnya yang ngaleor / lemas).</p>
        <p className='mt-12'></p>
        <section className='absolute right-6 -bottom-4 sm:right-10 '>
        <Button_order text={'ORDER NOW'} Links={'/pages/list_menu'}/>
        </section>
    </section>
  )
}
