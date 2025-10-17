import React,{ createContext,useState } from "react";
import axios from 'axios';

console.log("Using Backend URL:", process.env.REACT_APP_SERVER_URL);
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;


export const ThemeContext = createContext(null)


function Context({children}){

    
    const [theme, setTheme] = useState('light');

   return(
      
      <ThemeContext.Provider value={{theme,setTheme}}>
         {children}
       </ThemeContext.Provider>
       
     )

}

export default Context;