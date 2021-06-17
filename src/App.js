import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import { Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" exact={true} component={About} />
    </div>
  );
}

export default App;
