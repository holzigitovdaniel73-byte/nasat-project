import React, {useState} from 'react'
import servis from "../assets/svg/chon.svg"
import { auth } from '../firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'

function Login() {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
  
    async function createUser (){
      try {
        const res = await signInWithEmailAndPassword(auth, login, password)
        console.log(res);
        
      } catch (error) {
        console.log(error);
        
      }
    }
  return (
    <div style={{ display: "flex"  }}>
      <div style={{ maxWidth: "1440px", padding: "50px " }}>
        <img style={{width:"705px"}} src={servis} alt="" />
      </div>

      <div style={{ width: "371px", height: "530px", marginTop: "150px", marginLeft: "100px" }}>
        <div style={{ width: "339", height: "78px", }}>
          <h1>Create an account</h1>
          <p>Enter your details below</p>
        </div>
        <br />
        <div>
          <input
           value={login}
            onChange={(e) => setLogin(e.target.value)}
           type="text" placeholder='Email or Phone Number' style={{ width: "100%", height: "32px", boxShadow: "5px", border: "2px solid white" }} />
          <div style={{ width: "100%", backgroundColor: "black", height: "1px" }}></div>
          .
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          type="text" placeholder='Password' style={{ width: "100%", height: "32px", border: "2px solid white" }} />
          <div style={{ width: "100%", backgroundColor: "black", height: "1px" }}></div>
        </div>
        <br /><br />
        <div style={{ display: "flex", gap: "110px" }}>
          <button onClick={createUser} style={{ width: "143px", height: "56px", backgroundColor: "#db4444", borderRadius: "6px", color: "white", border: "2px solid white", fontSize: "18px" }}>Log In</button>
          <p style={{ marginTop: "20px", color: "#db4444" }}>Forget Password?</p>
        </div>
      </div>

    </div>

  )
}

export default Login
