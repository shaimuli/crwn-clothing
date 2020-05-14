import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShowPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage}></Route>
      <Route path="/shop" component={ShowPage}></Route>
    </div>
  );
}

export default App;
