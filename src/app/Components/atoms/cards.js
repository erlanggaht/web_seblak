import React from 'react'

export default function Cards({values}) {
  return (
    <>
     <section className={`${values.card_image} rounded-md bg-cover bg-no-repeat bg-center relative w-full sm:w-[400px] h-[400px] my-2 shadow-lg sm:shadow-sm`}>
          <section className='absolute bottom-0 right-0 bg-white h-[100px] sm:w-[240px] w-full p-2 text-neutral-900 text-center flex items-center flex-col'>
            <p className='text-xl'>{values.title}</p>
            <span className='text-[12px]'>{values.desc}</span>
            </section>      
        </section>
    </>
  )
}

