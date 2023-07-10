import React from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import classNames from "classnames";

export const App: React.FC = () => {
  return (
    <Router>
      <main
        className={classNames("bg-black", "px-64", "font-thin", "text-white")}
      >
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
};
