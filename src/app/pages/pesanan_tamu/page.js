import React from 'react'
import { headers } from 'next/headers';
import Table from '@/app/Components/atoms/table_thanks';
import Get_data from '@/app/config/get_data';



export default async function PesananTamu() {
    const header = headers()
    const getUrlPath = header.get('x-url') || ""
    const getUrlQuery = getUrlPath.split('=')[1]
    

    //Data user
    const res = await Get_data({ID_user : getUrlQuery})
    

    return (
        <>
        {!res ? <div className='flex justify-center items-center content-stretch text-center   flex-col h-screen gap-3'>
            <h1 className='sm:text-2xl text-xl text-slate-700 italic font-bold'>Tidak ada pesanan dengan ID <span className='text-[#ffa500]'>{getUrlQuery}</span><br/><span className='text-slate-600 text-sm text-right'>perhatikan spasi dan karakter lainnya. ID pesanan harus sesuai!</span>
</h1>
            <form method='GET' className='sm:text-center text-center justify-center sm:mx-0 sm:w-[584px] w-[284px] px-2 flex gap-3'>
            <input type="text" name='id' placeholder="Cari lagi pesanan saya" className="input input-bordered w-full max-w-xs text-slate-700" />
            <button className="btn">Submit</button>
            </form>
            </div> 
            
            :

    <div className='text-white bg-[#ffa500]'>
        <div className='flex justify-center items-center flex-row flex-wrap p-2'>
        <h1 className='text-2xl text-center p-3'> Pesanan {res.nama} </h1>
        <p className='text-slate-800 bg-white rounded-md p-2 font-bold text-xl'> {getUrlQuery} </p> 
        </div>
        <div className="sm:place-items-center sm:grid p-2 sm:p-0 pt-7  py-4 min-h-screen bg-[#f6f6f6] relative">
    <Table props={{bg_head:"#ffa500"}} dataTamu={res}/>
</div> 
    </div>}
    </>
  )
}
