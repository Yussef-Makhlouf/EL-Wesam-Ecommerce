import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProductShow from "./pages/ProductList";
import ContactUs from "./components/ContactUs";
import ProductList from "./components/ProductList";

import ErrorBoundary from "./ErrorBoundary";

// import './App.css'
function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/wessam" element={<HomePage />} />
          <Route path="/product" element={<ProductShow />} />
          <Route path="/product/:{productId}" element={<ProductList />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
