// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ProductList from "./data/ProductList";
// import ProductDetail from "./data/ProductDetail";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
