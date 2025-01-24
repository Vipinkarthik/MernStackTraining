import { useState } from "react"; 
import './App.css';
import Auth from "./components/auth"; 
import User from "./components/user"; 
const Authorized = Auth(User);
function App() {
  const user=(name)
  return (
    <div className="App">
      <Authorized isAuth={isAuth} user={{ name: "John" }} />
    </div>
  );
}   