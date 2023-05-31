import React, { useState } from "react";
import auth,{ provider } from '../config/firebase'
import { getAuth, signInWithEmailAndPassword,signInWithPopup,GithubAuthProvider } from "firebase/auth";
import {v4 as uuidv4} from 'uuid'
import { navigate } from "gatsby";
import {parseCookies} from 'nookies'
import { StaticImage } from "gatsby-plugin-image";
import nookies from 'nookies'

export default function Login() {
    const [input, setInput] = useState({
        email : '',
        password : '',
       });   
    function HandleChange (e) {
        const target = e.target
        const value = e.currentTarget.value
        const name = target.name
        setInput({
            ...input,
            [name] : value
        })
    }

   async function loginGithub() {
    const auth = getAuth();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const credential = GithubAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
    
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
        if(user) {
          nookies.set(null,'token',user.accessToken,{path : '/guestbook'})
          navigate('/guestbook')
        }
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // The AuthCredential type that was used.
        const credential = GithubAuthProvider.credentialFromError(error);
        console.log(error)
        // ...
      });
    }


    function HandleSubmit(e) {
        e.preventDefault();
        
        const email = input.email
        const pass = input.password
        const get_auth =getAuth();
      signInWithEmailAndPassword(get_auth,email, pass)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // console.log({success : user.accessToken})
        alert('login success')
        localStorage.setItem('u_s_n',JSON.stringify(uuidv4() + '__' + user.email + '__' + uuidv4())) 
        localStorage.setItem('tok',JSON.stringify(user.accessToken))
        const getCookie = parseCookies();
        console.log(getCookie)
        const getNumberLimit_cookie =  getCookie.lmt.split('_____')[1]
        if(getNumberLimit_cookie >= 3)localStorage.setItem('count',98327483297)
        navigate('/guestbook')

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log({errorCode,errorMessage})
        // ..
      });
  }

  return (
    <div className="layout_login">
      <h1>Login Page</h1>

      <button className="btn_login2" style={{display:"flex",justifyContent:'center',alignItems:"center",gap:'6px',margin:'1rem 0'}}
      onClick={()=>loginGithub()}
      >
         <StaticImage src="../images/github.svg" width={32} height={32} alt="github"/>Continue with github
        </button>      <form onSubmit={(e)=>HandleSubmit(e)}>
        <label htmlFor="email">Email</label>
        <br />
        <input
          className="input_login"
          name="email"
          type="email"
          placeholder="email"
          onChange={(e) => HandleChange(e)}
        />{" "}
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input
          className="input_login"
          name="password"
          type="password"
          placeholder="password"
          onChange={(e) => HandleChange(e)}
        />{" "}
        <br />
        <button type="submit" value="Submit" className="btn_login2">
          Submit
        </button>
      </form>

    </div>
  );
}
