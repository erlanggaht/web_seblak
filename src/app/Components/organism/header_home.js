import Description from "../molecules/description";


export default function Header_Home() {
  return (
    <>   
    <section className='flex justify-center md:w-[340px] md:h-[340px] w-[280px] h-[280px] mt-10 absolute -bottom-20 right-0'>
    <section className='header-aset w-full h-full  bg-no-repeat bg-cover bg-center '></section>
    </section>
    <section className=' py-16 mx-16 flex justify-center items-center sm:items-start flex-col sm:flex-row flex-wrap gap-12 sm:gap-12'>
    <section className='flex justify-center md:w-[340px] md:h-[340px] w-[280px] h-[280px] mt-0 lg:mt-10'>
    <section className='header-jahanam w-full h-full  bg-no-repeat bg-cover bg-center rounded-full '></section>
    </section>
    <section className='mt-0 sm:my-12 sm:mt-0 flex flex-col '>
      <section>
      <p className='sm:text-[6em] text-[48px]  text-center sm:text-justify'><span className='drop-shadow-lg font-bold'>Surga</span> di</p>
      <p className='sm:text-[6em] text-[48px] sm:ml-28 ml-0  text-center sm:text-justify'>piring <span className='drop-shadow-lg font-bold'>anda!</span></p>
      </section>
      <Description/>
    </section>
    </section>
    </>
  )
}
