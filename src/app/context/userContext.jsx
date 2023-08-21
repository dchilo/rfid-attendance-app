"use client";
import { verifyToken } from "@/services/user";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    
    const verify = async () => {
      try {
        const userData = await verifyToken(token);
        console.log(userData.data);
        if (userData.data.valid == true) setUser(userData.data);
        else setUser(null);
      } catch (error) {
        console.log(error);
      }
    }

    if (token) verify();
    else setUser(null);
  }, []);

  const login = async (userLogged) => {
    console.log(userLogged);
    const userToken = await userLogged.token;
    localStorage.setItem("token", userToken);
    setUser(userLogged);
  }

  const logout = () => {
    localStorage.removeItem('token')
    setUser(null)
  }

  const contextValue = {
    user,
    login,
    logout,
  }


  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
}
