import React, { useEffect, useState } from 'react'
import { auth } from '../server/server'
import firebase from 'firebase'
import GoogleButton from 'react-google-button'

const Login = () => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [response, setResponse] = useState()

    

    const signin = () => {
        let provider = new firebase.auth.GoogleAuthProvider
        auth.signInWithPopup(provider)
        .then(() => {
            window.location.href = "/home"
        }).catch((e) => {
            console.error(e);
        })
    }

    const way2 = () => {
        auth.createUserWithEmailAndPassword(email, password)
        .then(() => {
            auth.onAuthStateChanged(user => {
                user.updateProfile({
                    displayName: response
                })
            })
            window.location.href = "/home"
        }).catch((e) => {
            console.error(e);
        })
    }
  return (
    <>
        <div className='boxW' style={{
            width: '80%',
            padding: '9px',
            background: 'rgba(255, 255, 255, 0.5)',
            borderRadius: '10px'
        }}>
            <center>
                <input type='email' className='f12' style={{background: '#eee', color: 'black', border: 'none', borderRadius: '10px', padding: '10px', width:'100%'}} placeholder='Your Email' value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <br />
                <br />
                <input type='text' className='f12' style={{background: '#eee', color: 'black', border: 'none', borderRadius: '10px', padding: '10px', width:'100%'}} placeholder='Your MID' value={response} onChange={(e) => {
                    setResponse(e.target.value)
                }} />
                <br />
                <br />
                <input type='password' className='f12' style={{background: '#eee', color: 'black', border: 'none', borderRadius: '10px', padding: '10px', width:'100%'}} placeholder='Your Password' value={password} onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <br />
                <br />
                <button onClick={way2} style={{background: '#eee', color: 'black', border: 'none', borderRadius: '10px', padding: '10px', width:'100%', cursor: 'pointer'}}  className='box f13'>

                    <b>Register</b>

                </button>
            </center>
        
        </div>
    </>
  )
}

export default Login