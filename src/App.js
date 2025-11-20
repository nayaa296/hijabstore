import React from "react";
import { BrowserRouter } from "react-router-dom";
import NavigationBar from "./components/Nav";
import Routing from "./components/Routing";

function App() {
  return (
    <BrowserRouter>
      <NavigationBar/>
      <Routing />
    </BrowserRouter>
  );
}

export default App;