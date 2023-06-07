import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { provider } from "../firebase";

async function Cf_Login () {
    const auth = await getAuth();
    let users = {}
    await signInWithPopup(auth, provider)
      .then(async(result) => {
        const credential = await GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        users = {
          token :user.accessToken,
          username : user.displayName,
          userid : user.uid,  
          

        }
        
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.log(error)
      });
return users
}

  export default Cf_Login;