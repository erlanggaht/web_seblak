import Link from 'next/link'
import React from 'react'

export default  function Table({props,dataTamu}) {
  let {bg_head} = props
  let {total_harga,alamat,level_pedas,nama,jumlah,nama_seblak,tanggal_pembelian,waktu_pembelian} = dataTamu
  return (
<div className="overflow-x-auto" id='tbl_pesanan'>
  <div className='flex justify-between items-center \'>
<div>
<h2 className='text-lg px-2 pb-1 text-slate-700 text-center sm:text-left'>{nama} - ( Tamu )</h2>
<p className='text-sm px-2 mb-2 text-slate-700 text-center sm:text-left'>{tanggal_pembelian.split('.').join(' ')} - {waktu_pembelian}</p>
</div>
<Link href='/'><button className="btn btn-sm bg-[#ffa500] outline-none border-none hover:bg-orange-400 text-white">Kembali</button></Link>

</div>
  <table className="table">
    <thead >
      <tr >        
        <th className={`bg-[${bg_head}]`}>Varian Seblak</th>
        <th className={`bg-[${bg_head}]`}>Level</th>
        <th className={`bg-[${bg_head}]`}>Alamat</th>
        <th className={`bg-[${bg_head}]`}>Jumlah</th>
        <th className={`bg-[${bg_head}]`}>Total</th>
        <th className={`bg-[${bg_head}]`}>Proses</th>

      </tr>
    </thead>
    <tbody>
      <tr className='text-slate-600'>
        <td className=' bg-white'>{nama_seblak}</td>
        <td className=' bg-white'>{level_pedas}</td>
        <td className=' bg-white'>{alamat}</td>
        <td className=' bg-white'>{jumlah}</td>
        <td className=' bg-white'>{total_harga}</td>
        <td className=' bg-white'>sedang di antar..</td>
      </tr>
    </tbody>
  </table>
</div>  )
}
