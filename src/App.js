import React from "react";
import Feed from "./Feed";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import "./App.css";
import Widget from "./Widget";
import Login from "./Login";
import { useStateValue } from "./StateProvider";


export default function App() {
  const [{user},dispatch]=useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <>
          <Navbar />
          <div className="app__body">
            <SideBar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
    </div>
  );
}
