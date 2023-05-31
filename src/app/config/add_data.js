import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export default async function Add_Data(data) {
  const {nama,level_pedas,jumlah,alamat,total_harga,nama_seblak} = data
    try {
        const docRef = await addDoc(collection(db, "tamu"), {
          nama,
          nama_seblak,
          jumlah : parseInt(jumlah),
          level_pedas,
          alamat,
          total_harga : total_harga.split('Rp')[1].split(',')[0]
        });
      
        console.log("Berhasil daftar", docRef.id);
      } catch (e) {
        console.error("Error saat daftar: ", e);
      }
}
