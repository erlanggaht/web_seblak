import { addDoc, collection } from "firebase/firestore";
import { db } from "./firebase";

export default async function Add_Data() {
    try {
        const docRef = await addDoc(collection(db, "tamu"), {
          nama: "Alan",
          jumblah: 2,
          nama_seblak:"seblak tulang",
          level_pedas : 'eazzy',
          alamat : 'sumedang'
        });
      
        console.log("Berhasil daftar", docRef.id);
      } catch (e) {
        console.error("Error saat daftar: ", e);
      }
}
