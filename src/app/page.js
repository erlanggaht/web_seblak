import Artboard from "./Components/atoms/artboard";
import Chat from "./Components/organism/chat";
import Header_Home from "./Components/organism/header_home";
import Card_main from "./Components/template/card_main";


export default function Home() {
  
  return (
    <>
    <header className='relative'>
   <Header_Home/>
    </header>
    <main className="mt-20">
     <Card_main/>
    </main>
    <section className="my-20">
    <h2 className='text-2xl text-neutral-700 pl-20 pb-6'>Lihat gambar lainnya <div className="h-[2px] bg-neutral-700 mt-1"></div></h2>
    <section className="flex justify-center mt-10">
    <section className="flex gap-4 flex-wrap justify-center sm:justify-start sm:flex-nowrap">
      <Artboard/>
    </section>
    </section>
    </section>

    <section className="px-8 py-8 text-slate-900 overflow-scroll max-h-96 mx-full sm:w-[70%] mx-6 sm:mx-auto bg-chat">
      <Chat props={{
        nama:"Melya",
      image:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      waktu:"12:32"}}/>
    </section>
    </>
  )
}
