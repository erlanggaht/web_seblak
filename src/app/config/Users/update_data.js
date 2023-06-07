import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export default async function updateData () {
    const washingtonRef = doc(db, "user_login", "Erlangga Hidayatullah");

// Set the "capital" field of the city 'DC'
await updateDoc(washingtonRef, {
  seblak_baso  : {
    jumlah : 2,
    settingan : {
        [2] : {
            level_pedas : "",
            tanggal_pembelian : "",
            total_harga: "",
            waktu_pembelian : ""
        }
    }
  }
});
}