import Image from 'next/image'
import baso from '../../Components/assets/baso.jpg'
import BtnClose from '@/app/Components/atoms/btn_close'
import jnt from '@/app/Components/assets/icons/jnt.svg'
import sicepat from '@/app/Components/assets/icons/sicepat.svg'
import dana from '@/app/Components/assets/icons/dana.svg'
import shoope from '@/app/Components/assets/icons/shoope.svg'
import transfer from '@/app/Components/assets/icons/transfer.svg'



export function Comp_produk({props}) {
  const {image,nama,level} = props
  return <>
  <div className='mt-3 sm:flex sm:gap-4 sm:items-center relative pr-8 pb-0 pt-0 pl-0 '>
    <div className='closekeranjang absolute -top-5 left-20 -translate-x-1 scale-50'>
    </div>
    <Image src={baso} alt='baso' height={100} width={100}/>
    <div>
    <p className='text-md'>{nama}</p>
    <p className='text-sm text-slate-700'>{level}</p>
    </div>
  </div>
  </>
}

export function Comp_harga ({props}) {
  const {harga,diskon} = props
return <>
  <div className='mt-3 sm:flex sm:flex-col sm:items-center sm:justify-center relative h-[80px] text-center px-16'>
    <div>
<p className={`diskon line-through text-slate-300 `}>{!diskon ? "" : "Rp. " + diskon}</p>
<p className='py-2'>Rp. 40.000</p>
</div>
</div>
</>
}

export function Comp_jumblah ({props}) {
  const {jumblah} = props
return <>
  <div className='sm:flex sm:flex-col sm:items-center sm:justify-center h-[80px] text-center mt-4 px-16'>
<p className='py-2'>{jumblah}</p>
</div>
</>
}

export function Comp_diskon ({props}) {
  const {diskon} = props
return <>
  <div className='sm:flex sm:flex-col sm:items-center sm:justify-center h-[80px] text-center mt-4 px-16'>
<p className='py-2'>{diskon+"%"}</p>
</div>
</>
}

function BatalPesan () {
  return <>
  <div className='sm:flex sm:flex-col sm:items-center sm:justify-center h-[80px] mt-4'>
           <button className='p-3 hover:underline hover:bg-transparent'>Hapus</button>
           </div>
</>
}


export default function keranjang() {

  return (
    <>
      <div className='keranjangGrid  dark:text-white text-slate-900 h-screen'>
      <div className='keranjangGrid1 p-4 sm:p-14 pb-6 bg-gray-50 '>
      <h1 className='text-xl font-bold'>Keranjang Belanja</h1>
      <section className='sm:grid sm:place-items-center'>
      <div className='tbl sm:inline-flex sm:flex-row mt-7 bg-white'>
          <div className='sm:flex-col flex-row flex items-center sm:inline-block w-full'>
          <h3 className='text-center p-2' style={{borderBottom:"solid 1px #eee"}}>Produk</h3>
           <div className='flex flex-col items-center sm:w-full w-1/2  mx-auto sm:mx-0 '>
            <Comp_produk props={{image:"",nama:"Seblak Baso",level:"Pedas Setan"}}/>
            <Comp_produk props={{image:"",nama:"Seblak Baso",level:"Pedas Setan"}}/>
            <Comp_produk props={{image:"",nama:"Seblak Baso",level:"Pedas Setan"}}/>
            </div>
          </div>
          <div className='sm:flex-col flex-row flex items-center sm:inline-block mt-12 sm:mt-0'>
            <h3 className='text-center p-2' style={{borderBottom:"solid 1px #eee"}}>Harga</h3>
            <div className='namefoodflex flex-col items-center w-1/2 mx-auto '>
            <Comp_harga props={{harga:"40.000",diskon:"70.000"}}/>
            <Comp_harga props={{harga:"40.000",diskon:""}}/>
            <Comp_harga props={{harga:"40.000",diskon:""}}/>
            </div>
          </div>
          <div className='sm:flex-col flex-row flex items-center sm:inline-block mt-12 sm:mt-0'>
          <h3 className='text-center p-2' style={{borderBottom:"solid 1px #eee"}}>Jumblah</h3>
          <div className='namefoodflex flex-col items-center w-1/2 mx-auto '>
          <Comp_jumblah props={{jumblah:"3"}}/>
          <Comp_jumblah props={{jumblah:"5"}}/>
          <Comp_jumblah props={{jumblah:"3"}}/>
          </div>
          </div>
          <div className='sm:flex-col flex-row flex items-center sm:inline-block mt-12 sm:mt-0'>
          <h3 className='text-center p-2' style={{borderBottom:"solid 1px #eee"}}>Diskon</h3>
          <div className='namefoodflex flex-col items-center w-1/2 mx-auto '>
            <Comp_diskon props={{diskon:"20"}}/>
            <Comp_diskon props={{diskon:"20"}}/>
            <Comp_diskon props={{diskon:"20"}}/>
            </div>
          </div>

          <div className='sm:flex-col flex-row flex items-center sm:inline-block mt-12 sm:mt-0  w-1/2'>
          <h3 className='text-center p-2' style={{borderBottom:"solid 1px #eee"}}>Batal Pesan</h3>
          <div className='flex-col items-center w-1/2 mx-auto '>
         <BatalPesan/>
         <BatalPesan/>
         <BatalPesan/>

            </div>
          </div>
      </div>
      </section>
      
      <div className='my-8'>
        <div className='subtotal_produk sm:flex sm:justify-between py-3 px-6 text-center sm:text-left'>
        <p>Subtotal Untuk Produk</p>
        <p>Rp. 935.000</p>
        </div>
        <div className='subtotoal_pengiriman sm:flex sm:justify-between py-3 px-6 text-center sm:text-left'>
        <p>Subtotal Pengiriman</p>
        <p>Rp. 10.000</p>
        </div>
      </div>
      <div className='total_pembayaran sm:flex sm:justify-between py-6 px-3 bg-oren-dasar text-white rounded-xl'>
        <p>Total Pembayaran</p>
        <p>Rp. 945.000</p>
      </div>

      </div>

      <aside className='keranjangGrid2 pt-12 pb-2 pl-8 pr-2 bg-gray-50 shadow-lg '>
      <h1 className='text-xl font-bold'>Info Pembayaran</h1>
      <div className='max-h-[600px] overflow-auto overlow-x-hidden pb-12 pt-0'>
      <div className='mt-7'>
        <div>
        <h3 className='font-bold text-lg'>Alamat Pembayaran</h3>
        <input type="text" placeholder="Masukan Alamat" className="input w-full max-w-xs bg-gray-50 my-4 p-0" style={{borderBottom:"#eee solid 1px",outline:"none"}} />
        </div>

        <div className='my-12'>
        <h3 className='font-bold text-lg'>Voucher Belanja</h3>
        <input type="text" placeholder="Masukan Alamat" className="input w-full max-w-xs bg-gray-50 my-4 p-0" style={{borderBottom:"#eee solid 1px",outline:"none"}} />
        </div>

        <div className='my-4'>
        <h3 className='font-bold text-lg'>Opsi Pengiriman</h3>
        <div className='flex gap-5 my-8'>
        <Image src={jnt} alt='jntlogo' width={88} height={88}/>
        <Image src={sicepat} alt='jntlogo' width={88} height={88}/>
        </div>
        </div>

        <div className='mt-16'>
        <h3 className='font-bold text-lg'>Tipe Pemabayaran</h3>
        <div className='flex gap-5 my-8'>
        <Image src={dana} alt='jntlogo' width={88} height={88}/>
        <Image src={shoope} alt='jntlogo' width={88} height={88}/>
        <Image src={transfer} alt='jntlogo' width={58} height={58}/>
        </div>
        </div>

        <div className='mt-7'>
        <div >
        <h3 className='font-bold text-lg'>Pesan</h3>
        <div className='pr-3 py-0'>
        <textarea className="textarea textarea-bordered bg-white w-[80%] resize-none mt-4" placeholder="Silahkan tinggalkan pesan" maxLength={30} minLength={3}></textarea>
        <button className='bg-oren-dasar text-white p-2 w-full rounded-xl mt-14'>Buat Pesanan</button>
        </div>
        </div>
        </div>

       
        </div>

      </div>
      </aside>
    </div>
    </>
  )
}

