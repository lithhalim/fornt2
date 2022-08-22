import React, { useState } from "react";

//use to create the context 
export const Color_Change_context=React.createContext()


export function Color_Provider(props) {
    const [color,setcolor]=useState('dark');

    const toggelTheme=()=>{
        setcolor(color=='dark'?'light':'dark')
    }
  return (
    <Color_Change_context.Provider value={{color,toggelTheme}}>
        {props.children}
    </Color_Change_context.Provider>
  )
}



