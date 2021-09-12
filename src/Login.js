import React from 'react'
import './login.css'
import { auth, provider } from './firebase'
import discord from './discord.png'
import { Button } from '@material-ui/core'
import { signInWithPopup, GoogleAuthProvider } from '@firebase/auth'


function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message))
    }


    return (
        <div className="login">  
            <div className="login__logo">
                 <img src={discord} alt="no img" />
            </div>


            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
