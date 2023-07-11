import React from "react";
import { NavBar } from "./components/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import classNames from "classnames";
import { Search } from "./pages/Search";
import { Saved } from "./pages/Saved";

export const App: React.FC = () => {
  return (
    <Router>
      <main
        className={classNames(
          "bg-black",
          "px-64",
          "font-thin",
          "text-white",
          "h-screen",
        )}
      >
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />}>
              <Route path=":id" element />
            </Route>
            <Route path="/saved" element={<Saved />}>
              <Route path=":id" element />
            </Route>
          </Routes>
        </div>
      </main>
    </Router>
  );
};
