import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";

const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/cart">Cart</a>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" exact component={ProductList} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
