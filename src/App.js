import React from "react";
import ProjectRouter from "./router/Router";
import Header from "./components/Header";
import { BrowserRouter as Router } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ProjectRouter />
      </Router>
    </div>
  );
}

export default App;
