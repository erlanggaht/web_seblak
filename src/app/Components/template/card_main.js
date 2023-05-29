import React from 'react'
import Cards from '../atoms/cards'
import { Cards_flex } from '../organism/card_flex'

export default function Card_main() {
  return (
    <>
     <section className='cards mx-10 py-14 '>
        <section className='text-center'>
          <h2 className='text-3xl text-neutral-700'>Dapatkan seblak kami untuk acara anda berikutnya</h2>
          <p className='text-sm text-gray-400 mx-auto py-2 lg:w-2/3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, vitae? Corrupti pariatur nobis, temporibus earum quasi molestiae ?</p>
    </section>
    <section className='flex justify-center md:flex-nowrap flex-wrap gap-6 mt-10 sm:mt-16'>
      <Cards values={{
      title:"Seblak Ceker",
      desc:"Pedas gurih dengan ceker yg segar dan tidak pelit ceker.",
      card_image:"card_imgClass1"}}/>
      <Cards values={{
        title:"Seblak Baso",
        desc:"Pedas gurih dengan baso yg segar dan tidak pelit baso.",
      card_image:"card_imgClass2"}}/>
      <Cards values={{
        title:"Seblak Tulang",
        desc:"Pedas gurih dengan tulang yg segar dan tidak pelit tulang.",
      card_image:"card_imgClass3"}}/>
      </section>
      </section>
      <section className='mt-10 sm:mt-40'>
        <section>
        <Cards_flex props={{flex_reverse :"md:flex-row",know_hidden:"hidden",img_class:"cf1"
      ,title :"Kami bangga dengan pengalaman kami"
      }}/>
        </section>
        <section className="mt-[6em]">
        <Cards_flex props={{flex_reverse :"md:flex-row-reverse",btn_hidden:"hidden",img_class:"cf2",title :"Kami menawarkan seblak level terpedas",
      
      }}/>
        </section>
      </section>
    </>
  )
}
