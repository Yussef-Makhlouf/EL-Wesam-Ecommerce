import Category from "../components/category";
import Companies from "../components/Companies";
import { FooterWithPaymentLogosAndSocialMedia } from "../components/Footer";
import NavBar from "../components/NavBar";
import Pagination from "../components/Paggination";
import ProductDetails from "../components/ProductDetails";
import ProductList from "../components/ProductList";
import ProductViews from "../components/ProductViews";

const HomePage = ()=>{
    return <dev>
      <NavBar />
      <Category />
      <ProductList />
      <ProductDetails />
      <ProductViews /> 
      <Pagination />
      <Companies />
      <FooterWithPaymentLogosAndSocialMedia />
    </dev>
}
export default HomePage;