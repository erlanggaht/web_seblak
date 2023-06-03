import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';

export default async function Get_data(props) {
    const {ID_user} = props
const docRef = doc(db, "tamu", ID_user);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Data anda", docSnap.data()); 
  return docSnap.data()   
} else {
  // docSnap.data() will be undefined in this case
  console.log("ada kesalahan. tidak ada data!");
}
 
}
