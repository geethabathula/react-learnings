import React from "react";
import { useState } from "react";
const users = [
    {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
    },
    {
        "id": 2,
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
    }

];

export const UserContext = React.createContext();
export const UserContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    return <UserContext.Provider value={{ count, setCount, users }}>{children}</ UserContext.Provider>
}
