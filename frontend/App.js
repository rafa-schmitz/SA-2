import React from "react";
import ContextProvider from "./context/context";
import Routes from "./navigation/Routes";

export default function App() {
  return (
    <ContextProvider>
      <Routes />
    </ContextProvider>
  );
}
