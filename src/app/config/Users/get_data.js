import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase';

export default async function Get_data(namaDoc) {
    // const {ID_user} = props
const docRef = doc(db, "user_login", namaDoc);
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  return docSnap.data()   
} else {
  // docSnap.data() will be undefined in this case
  return false
}
 
}
