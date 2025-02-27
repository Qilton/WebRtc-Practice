import React,{createContext,useMemo,useContext} from 'react'
import {io} from 'socket.io-client';
const SocketContext=createContext(null);

export const useSocket=()=>{
    console.log(import.meta.env.VITE_SOCKET_URL);

     const socket=useContext(SocketContext);
     return socket;
}

export const SocketProvider=({children})=>{
    const socket=useMemo(()=>io(import.meta.env.VITE_SOCKET_URL),[]);
    return (
        <SocketContext.Provider value={socket}>
            {children}
        </SocketContext.Provider>
    )
}