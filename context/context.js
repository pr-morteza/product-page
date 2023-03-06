import { createContext, useState } from "react";
const Context = createContext()

export function ContextProvider({children}){
    const [badgeContent, setBadgeContent] = useState(0)
    const [cart, setCart] = useState(null)
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Context.Provider value={{badgeContent, setBadgeContent, cart, setCart, open, setOpen, handleOpen, handleClose}}>
            {children}
        </Context.Provider>
    )
}
export default Context;