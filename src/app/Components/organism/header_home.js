import Description from "../molecules/description";


export default function Header_Home() {
  return (
    <>   
    <section className=' flex justify-center md:w-[340px] md:h-[340px] w-[280px] h-[280px] mt-10 absolute -bottom-20 right-0 sm:right-12'>
    <section className='header-aset w-full h-full  bg-no-repeat bg-cover bg-center '></section>
    </section>
    <section className='mt-0 sm:my-12 sm:mt-0 flex flex-col mx-2 sm:mx-20  py-12 '>
      <section>
      <p className='sm:text-[6em] text-[48px]  text-center sm:text-justify'><span className='drop-shadow-lg font-bold'>Surga</span> di</p>
      <p className='sm:text-[6em] text-[48px] sm:ml-28 ml-0  text-center sm:text-justify'>piring <span className='drop-shadow-lg font-bold'>anda!</span></p>
      </section>
      <Description/>
    </section>
    </>
  )
}
