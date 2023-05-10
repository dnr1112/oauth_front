import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Login/Login";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" />
        <Route path="/auth/oauth2/register" />
        <Route path="/*" element={<NotFound />}/>
      </Routes>
    </>
  );
}

export default App;
