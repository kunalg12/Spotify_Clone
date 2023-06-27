"use client"

import { MyUserContextProvider } from "./useUser";

interface UserProviderProps {
    children: React.ReactNode;
}

const userProvider: React.FC<UserProviderProps> = ({
    children
}) => {
    return(
        <MyUserContextProvider>
            {children}
        </MyUserContextProvider>
    )
}