import React from "react";
import GlobalStyle from "./style/GlobalStyle";
import { Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Route path="/" exact={true} component={Home} />
    </div>
  );
}

export default App;
