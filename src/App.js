import React from "react";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import Main from "./components/main/main.jsx";

import "./App.css";

const App = () => {
  return (
    <div className="app__container">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
