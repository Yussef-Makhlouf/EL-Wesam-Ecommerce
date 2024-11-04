
import Discount from "../components/Discount"
import { FooterWithPaymentLogosAndSocialMedia } from "../components/Footer"
import Navbar1 from "../components/Navbaa"
import ProductList from "../components/ProductList"

const ProductShow = () => {

    return (
        <>
            <Navbar1 />
            
            <Discount />
            <ProductList />
            <FooterWithPaymentLogosAndSocialMedia />
        </>
    )
}

export default ProductShow