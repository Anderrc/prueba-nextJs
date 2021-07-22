import React, { useState } from "react"

const ThemeContext = (props) => {

   
    const [theme, setTheme] = useState(null);

    return (
        <div>
            <AppContext.Provider value={{theme, setTheme}}>
                {props.children}
            </AppContext.Provider>    
        </div>
    )
}

export default ThemeContext

export const AppContext = React.createContext();