import { doc, setDoc, Timestamp } from "firebase/firestore"; 
import { db } from "../firebase";
import docData_user from "./schemaDataUser";

const namas = async (nama) =>{
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(nama);
        }, 300);
      });
 return myPromise
}

export default async function Add_data(props){
    const namaPromise = await namas(props.nama)
    const schemadata=  await docData_user(namaPromise)
        await setDoc(doc(db, "user_login", namaPromise), schemadata).then((res)=>{
           console.log('pesan berhasil')
       }).catch(err => console.log({'error add_data' : err}))
} 