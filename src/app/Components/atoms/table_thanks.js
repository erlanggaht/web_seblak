import React from 'react'

export default  function Table({props,dataTamu}) {
  let {bg_head} = props
  let {total_harga,alamat,level_pedas,nama,jumlah,nama_seblak,tanggal_pembelian,waktu_pembelian} = dataTamu
  return (
<div className="overflow-x-auto" id='tbl_pesanan'>
  <table className="table">
    <thead >
      <tr >
        <th className={`bg-[${bg_head}]`}>Nama</th>
        <th className={`bg-[${bg_head}]`}>Varian Seblak</th>
        <th className={`bg-[${bg_head}]`}>Level</th>
        <th className={`bg-[${bg_head}]`}>Alamat</th>
        <th className={`bg-[${bg_head}]`}>Jumlah</th>
        <th className={`bg-[${bg_head}]`}>Tanggal Pembelian</th>
        <th className={`bg-[${bg_head}]`}>Total</th>
        <th className={`bg-[${bg_head}]`}>Proses</th>

      </tr>
    </thead>
    <tbody>
      <tr className='text-slate-600'>
        <th>{nama}</th>
        <td>{nama_seblak}</td>
        <td>{level_pedas}</td>
        <td>{alamat}</td>
        <td>{jumlah}</td>
        <td>{tanggal_pembelian.split('.').join(' ')} {waktu_pembelian}</td>
        <td>{total_harga}</td>
        <td>sedang di antar..</td>
      </tr>
    </tbody>
  </table>
</div>  )
}
