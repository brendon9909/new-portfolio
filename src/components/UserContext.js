import { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({children}) => {
    const [active, setActive] = useState("")

    return(
        <UserContext.Provider value={{active, setActive}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider};