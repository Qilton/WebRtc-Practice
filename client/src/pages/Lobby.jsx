import React, { useState,useContext,useEffect, useCallback } from 'react'
import {useSocket} from "../cotext/SocketProviders"
import { useNavigate } from 'react-router-dom';
const Lobby = () => {
    const [email,setEmail]=useState('');
    const [roomNo,setRoomNo]=useState('');
    const socket=useSocket();
    const navigate=useNavigate();
    const  handleJoinRoom=useCallback((data)=>{
            const {email,room}=data;
            navigate("/room/${room}");

    },[navigate])
    
    const handleSubmitForm=(e)=>{
        e.preventDefault();
        socket.emit("room:join",{email,roomNo});
        handleJoinRoom({email,room:roomNo});
    }
 
    useEffect(() => {
    socket.on("room:join",handleJoinRoom);
    return () => {
        socket.off("room:join", handleJoinRoom);
      };
    }, [socket,handleJoinRoom])
    return (
        <div>
            <h1>Lobby</h1>
            <form onSubmit={handleSubmitForm} >
                <label htmlFor="email">Email ID:</label>
                <input type="email" id="email" placeholder="Enter your email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
                <br />
                <label htmlFor="Room">Room No:</label>
                <input type="text" id="Room" placeholder="Enter Room No" value={roomNo} onChange={(e)=>{setRoomNo(e.target.value)}} />
                <br />
                <button>Join</button>
            </form>
        </div>
    )
}

export default Lobby
