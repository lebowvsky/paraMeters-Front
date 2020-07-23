import React from "react";
import ProjectRouter from "./router/Router";
import Header from "./components/Header";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return <div className="App">
    <Header />
    <ProjectRouter />
  </div>;
}

export default App;
