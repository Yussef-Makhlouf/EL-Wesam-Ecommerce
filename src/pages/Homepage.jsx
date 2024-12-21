// import Category from "../components/category";
import Category from "../components/Category1";
import Companies from "../components/Companies";
import { FooterWithPaymentLogosAndSocialMedia } from "../components/Footer";
import NavBar from "../components/NavBar";
import ProductDetails from "../components/ProductDetails";
import ProductViews from "../components/ProductViews";

const HomePage = ()=>{
    return <>
      <NavBar class name="bg-white pb-3" />
 
      <ProductDetails />
      <ProductViews />
      <Category />
      <Companies />
      <FooterWithPaymentLogosAndSocialMedia />
    </>;
}
export default HomePage;