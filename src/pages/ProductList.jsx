
import Discount from "../components/Discount"
import { FooterWithPaymentLogosAndSocialMedia } from "../components/Footer"
import Navbar1 from "../components/Navbaa"
import Pagination from "../components/Paggination"
import ProductList from "../components/ProductList"

const ProductShow = () => {

    return (
        <div>
            <Navbar1 />
            <Discount />
            <ProductList />
            <Pagination / >
            <FooterWithPaymentLogosAndSocialMedia />
        </div>
    )
}

export default ProductShow