import React, { useEffect, useState } from 'react'
import './Chat.css'
import Chatheader from './Chatheader'
import AddCircleIcon from "@material-ui/icons/AddCircle"
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import GifIcon from '@material-ui/icons/Gif';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import Message from './Message';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from './features/counter/appSlice';
import { selectUser } from './features/counter/userSlice';
import { doc, onSnapshot, collection } from "firebase/firestore";
import db from './firebase';
import firebase from 'firebase';

function Chat() {

    

    const user = useSelector(selectUser);
    const channelName = useSelector(selectChannelName);
    const ChannelId = useSelector(selectChannelId);
    const [input, setInput] = useState('');   
    const [messages, setMessages] = useState([])



    useEffect(() => {
        if(ChannelId){
            db.collection("channels").doc(ChannelId).collection("messages")
        .orderBy("timestamp","desc")
        .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data())) 
        )
        }
        
    }, [ChannelId])

    const sendMessage = (e) => {
        e.preventDefault();


        db.collection("channels").doc(ChannelId).collection("messages")
        .add({
            message: input,
            user: user,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })

        setInput("")


    }



   
    
    return (

        <div className="chat">
            <Chatheader/>
           <div className="chat__messages">
                {messages.map((message) => (
                    <Message 
                        timestamp= {message.timestamp}
                        message ={message.message}
                        user={message.user}
                    />
                ))}
                
           </div>
            
            <div className="chat__input">
                <AddCircleIcon fontSize="large"/>
                <form>
                    <input value={input} disabled={!ChannelId} onChange={(e)=>setInput(e.target.value) }  placeholder={`Massage #${channelName}`} />
                    <button onClick={sendMessage} disabled={!ChannelId} className="chat__inputButton" type="submit">Send Message</button>

                </form>

                <div className="chat__inputIcons">
                    <CardGiftcardIcon/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon/>
                </div>
            </div>
        </div>
    )
}

export default Chat
