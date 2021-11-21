import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({
  userInfo: null,
  expiresAt: "0",
});
const { Provider } = AuthContext;

const AuthProvider = ({ children }: any) => {
  const navigate = useNavigate();

  const userInfo = localStorage.getItem("userInfo");
  const expiresAt = localStorage.getItem("expiresAt");

  const [authState, setAuthState] = useState({
    expiresAt: expiresAt ? JSON.parse(expiresAt) : "0",
    userInfo: userInfo ? JSON.parse(userInfo) : {},
  });

  const setAuthInfo = ({ userInfo, expiresAt }: any) => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
    localStorage.setItem("expiresAt", expiresAt);

    setAuthState({
      userInfo,
      expiresAt,
    });
  };

  const logout = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("expiresAt");
    setAuthState({
      userInfo: null,
      expiresAt: "0",
    });
    navigate("/login");
  };

  const isAuthenticated = () => {
    if (!authState.expiresAt) {
      return false;
    }
    return new Date().getTime() / 1000 < Number(authState.expiresAt);
  };

  const isAdmin = () => {
    return authState.userInfo.role === "admin";
  };

  const authContextState: any = {
    authState,
    setAuthState: (authInfo: any) => setAuthInfo(authInfo),
    logout,
    isAuthenticated,
    isAdmin,
  };

  return <Provider value={authContextState}>{children}</Provider>;
};

export { AuthContext, AuthProvider };
