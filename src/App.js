import React from "react";
import "./App.css";
import Header from "./componenets/Header/header";
import Sidebar from "./componenets/Sidebar/Sidebar";
import Home from "./componenets/Home/Home";
import Entry from "./componenets/Home/Entry";

function App() {
  return (
    <div className="App">
      <Header className="head" />
      <div className="container">
        <div class="side">
          <Sidebar />
        </div>
        <div class="main-content">
          <Home />
        </div>
      </div>
    </div>
  );
}

export default App;
