import Artboard from "./Components/atoms/artboard";
import Navigation from "./Components/molecules/navigation";
import Chat from "./Components/organism/chat";
import Header_Home from "./Components/organism/header_home";
import Card_main from "./Components/template/card_main";
import Footer from "./Components/template/footer";


export default function Home() {
  
  return (
    <>
    <header className='relative'>
    <Navigation props={{bg_color:"#eee"}}/>
   <Header_Home/>
    </header>
    <main className="mt-20">
     <Card_main/>
    </main>
    <section className="my-2 sm:my-20">
    <h2 className='text-2xl text-neutral-700 pl-10 sm:pl-20 pb-6'>Lihat gambar lainnya <div className="h-[2px] bg-neutral-700 mt-1"></div></h2>
    <section className="flex justify-center mt-10 p-3">
    <section className="flex gap-1 flex-wrap justify-center sm:justify-start sm:flex-nowrap">
      <Artboard/>
    </section>
    </section>
    </section>
    <h2 className='text-2xl text-neutral-700 pl-10 sm:pl-20 pb-6 mt-12'>Komentar<div className="h-[2px] bg-neutral-700 mt-1"></div></h2>
    <section className="px-8 py-8 text-slate-900 overflow-y-scroll max-h-96 mx-full sm:w-[70%] mx-6 sm:mx-auto bg-chat">
      <Chat props={{
        nama:"Melya",
      image:"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg",
      waktu:"12:32"}}/>
    </section>
    <Footer/>
    </>
  )
}
