import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProductShow from "./pages/ProductList";
import ContactUs from "./components/ContactUs";

import ErrorBoundary from "./ErrorBoundary";

import './App.css'
function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductShow />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
