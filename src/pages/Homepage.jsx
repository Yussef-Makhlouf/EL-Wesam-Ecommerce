import Category from "../components/category";
import Companies from "../components/Companies";
import { FooterWithPaymentLogosAndSocialMedia } from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductDetails from "../components/ProductDetails";
import ProductList from "../components/ProductList";
import ProductViews from "../components/ProductViews";

const HomePage = ()=>{
    return <>
      <NavBar />
      <Category />
      <ProductList />
      <ProductDetails />
      <ProductViews />
      <Companies />
      <FooterWithPaymentLogosAndSocialMedia />
    </>;
}
export default HomePage;