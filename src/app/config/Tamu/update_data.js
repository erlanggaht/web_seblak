
export default async function Update_data() {
    const washingtonRef = doc(db, "tamu", "8VGORSy9Gi1669at2hHr");
  await updateDoc(washingtonRef, {
    nama_seblak:"seblak baso",
    alamat : "bandung",
    jumblah: 3
  });
}
