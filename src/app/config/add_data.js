import { addDoc, collection, doc } from "firebase/firestore";
import { db } from "./firebase";


function TanggalIndoensia () {
var date = new Date();
var tahun = date.getFullYear();
var bulan = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jam = date.getHours();
var menit = date.getMinutes();
var detik = date.getSeconds();
switch(hari) {
 case 0: hari = "Minggu"; break;
 case 1: hari = "Senin"; break;
 case 2: hari = "Selasa"; break;
 case 3: hari = "Rabu"; break;
 case 4: hari = "Kamis"; break;
 case 5: hari = "Jum'at"; break;
 case 6: hari = "Sabtu"; break;
}switch(bulan) {
 case 0: bulan = "Januari"; break;
 case 1: bulan = "Februari"; break;
 case 2: bulan = "Maret"; break;
 case 3: bulan = "April"; break;
 case 4: bulan = "Mei"; break;
 case 5: bulan = "Juni"; break;
 case 6: bulan = "Juli"; break;
 case 7: bulan = "Agustus"; break;
 case 8: bulan = "September"; break;
 case 9: bulan = "Oktober"; break;
 case 10: bulan = "November"; break;
 case 11: bulan = "Desember"; break;
}

return {
  hari,bulan,tanggal,jam,menit,detik,tahun
}
}

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
