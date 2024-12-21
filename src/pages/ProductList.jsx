
import Discount from "../components/Discount"
import { FooterWithPaymentLogosAndSocialMedia } from "../components/Footer"
import NavBar from "../components/NavBar"
import ProductList from "../components/ProductList"

const ProductShow = () => {

    return (
        <>
            < NavBar />
            <Discount />
            <ProductList />
            <FooterWithPaymentLogosAndSocialMedia />
        </>
    )
}

export default ProductShow