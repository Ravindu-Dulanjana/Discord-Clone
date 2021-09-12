import React, { useEffect } from 'react';
import Chat from './Chat'

import './App.css';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { login, selectUser, logout } from './features/counter/userSlice';
import Login from './Login';
import { auth } from './firebase';
import { onAuthStateChanged } from "firebase/auth";






function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()



useEffect(() => {
  
  auth.onAuthStateChanged((user) =>{
    console.log("user" , user)
    if(user){
      dispatch(login({
        uid: user.uid,
        photo: user.photoURL,
        email: user.email,
        displayName:user.displayName, 
      }))


    }
    else{

      dispatch(logout())
    }
  })
  
}, [dispatch])

  return (
    <div className="App">
        {user ? (
          <>
            <Sidebar/>
            <Chat/>
          </>
        ):(
          <Login/>
        )}
        
    </div>
  );
}

export default App;
