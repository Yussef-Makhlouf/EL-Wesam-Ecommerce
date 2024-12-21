import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Homepage";
import ProductShow from "./pages/ProductList";
import ContactUs from "./components/ContactUs";
import CheckoutLayout from "./components/checkout/CheckoutLayout";
import { CartProvider } from "./components/CartContext";

import ErrorBoundary from "./ErrorBoundary";

import './App.css'
import CheckoutForm from "./components/checkout/CheckoutForm";
import CheckoutProgress from "./components/checkout/CheckoutProgress";
import OrderSuccess from "./components/checkout/OrderSuccess";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product" element={<ProductShow />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/checkout/*" element={<CheckoutLayout />}>
            <Route index element={<CheckoutForm currentStep={1} />} />
            <Route path="payment" element={<CheckoutForm currentStep={2} />} />
            <Route path="confirm" element={<CheckoutProgress />} />
            <Route path="success" element={<OrderSuccess />} />
          </Route>
          <Route path="success" element={<OrderSuccess />} />

        </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;