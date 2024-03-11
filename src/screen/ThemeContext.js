import React, { createContext, useState } from 'react';

export const ChangeIntoDarkModa =  createContext() 

export const ThemeProviderIntoDarkModa = ({ children }) => {
    const [dark,setDark] = useState(false)
    const data = {
        name:'Faith',
        email:'swen@gmail.com',
    }
const changeIntoDark = ()=>{
    setDark((prev)=>!prev)
}

  return (
        <ChangeIntoDarkModa.Provider value={{data,dark,changeIntoDark}} >
            {children}
        </ChangeIntoDarkModa.Provider>
  );
}