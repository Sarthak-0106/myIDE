import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import SignUp from "./pages/SignUp";
import Login from "./pages/login";
import CodeEditor from "./pages/CodeEditor";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
          <Route path='/editor/:projectID' element={<CodeEditor />} />
          <Route path="*" element={<NoPage />} />
          
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;