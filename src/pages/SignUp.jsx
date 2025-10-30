import React, { useState } from 'react'
import Baner from '../Components/Baner/Baner'
import { Link } from 'react-router-dom'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify';

function SignUp() {
  const [login, setLogin] = useState("")
  const [password, setPassword] = useState("")

  async function createUser (){
    try {
      const res = await createUserWithEmailAndPassword(auth, login, password)
      console.log(res);
      if(res){
        toast.success("user was created")
      }
      
    } catch (error) {
      console.log(error);
      
    }
  }


  return (
    <div className='wrapper' style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      maxWidth: "1440px",
      width: "100%",
      height: "100vh",
      padding: "0px",
      boxSizing: "border-box",
      marginLeft: "-10px"
    }}>

      <div style={{ width: "100%", marginLeft: "150px", marginTop: "150px" }}>
        <Baner />
      </div>

      <div style={{
        width: "371px",

        borderRadius: "8px",
        marginTop: "-30px"
      }}>

        <h1 style={{ fontSize: "28px", marginBottom: "10px" }}>Create an account</h1>
        <p style={{ color: "#555", marginBottom: "20px" }}>Enter your details below</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <input type="text" placeholder='Name'
            style={{ width: "100%", height: "40px", padding: "0 10px", border: "2px solid white", borderRadius: "4px" }} />
          <div style={{ width: "100%", border: "1px solid black" }}></div>

          <input
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            type="text" placeholder='Email or Phone Number'
            style={{ width: "100%", height: "40px", padding: "0 10px", border: "2px solid white", borderRadius: "4px" }} />
          <div style={{ width: "100%", border: "1px solid black" }}></div>

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password" placeholder='Password'
            style={{ width: "100%", height: "40px", padding: "0 10px", border: "2px solid white", borderRadius: "4px" }} />
          <div style={{ width: "100%", border: " 1px solid var(--Text2, rgba(0, 0, 0, 1))" }}>
          </div>
        </div>

        <button  onClick={createUser} style={{
          width: "100%",
          height: "48px",
          backgroundColor: "#DB4444",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          fontSize: "16px",
          marginTop: "25px",
          cursor: "pointer"
        }}>
          Create Account
        </button>

        <button style={{
          width: "100%",
          height: "48px",
          backgroundColor: "#fff",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "16px",
          marginTop: "15px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px"
        }}>
          <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="" width="20" />
          Sign up with Google
        </button>

        <p style={{ textAlign: "center", marginTop: "20px", color: "#555" }}>
          Already have account? <Link style={{ color: "#DB4444", cursor: "pointer" }} to={"/login"}>Log in</Link>
        </p>

      </div>

    </div>
  )
}

export default SignUp
