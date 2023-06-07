import { addDoc, collection, } from "firebase/firestore";
import { db } from "../firebase";
import TanggalIndoensia from "../datetime";

export default async function Add_Data(data) {
  const {nama,level_pedas,jumlah,alamat,total_harga,nama_seblak,tanggal_pembelian} = data
  const {  hari,bulan,tanggal,jam,menit,detik,tahun  } = TanggalIndoensia()
    try {
        const docRef = await addDoc(collection(db, "tamu"), {
          nama,
          nama_seblak,
          jumlah : parseInt(jumlah),
          level_pedas,
          alamat,
          total_harga : total_harga.split('Rp')[1].split(',')[0],
          tanggal_pembelian : `${hari}.${tanggal}.${bulan}.${tahun}`,
          waktu_pembelian : `${jam}.${menit}.${detik}`,
        });
        sessionStorage.setItem('id_user',docRef.id)
        console.log("Berhasil daftar", docRef.id);
      } catch (e) {
        console.error("Error saat daftar: ", e);
      }
}
