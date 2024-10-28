import { Card, Typography, Button } from "@material-tailwind/react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export function FooterWithPaymentLogosAndSocialMedia() {
  return (
    <Card className="mt-10 p-10 bg-gray-900 text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Features & Information Section */}
        <div>
          <Typography variant="h6" className="mb-4 font-bold">
            Features
          </Typography>
          <ul className="space-y-2">
            <li>
              <Typography variant="small" className="hover:underline cursor-pointer">
                Secure Payment
              </Typography>
            </li>
            <li>
              <Typography variant="small" className="hover:underline cursor-pointer">
                24/7 Support
              </Typography>
            </li>
            <li>
              <Typography variant="small" className="hover:underline cursor-pointer">
                Fast Delivery
              </Typography>
            </li>
            <li>
              <Typography variant="small" className="hover:underline cursor-pointer">
                Loyalty Program
              </Typography>
            </li>
          </ul>
        </div>

        {/* Company Info Section */}
        <div>
          <Typography variant="h6" className="mb-4 font-bold">
            About Us
          </Typography>
          <Typography variant="small" className="opacity-70">
            We are committed to providing the best products and services to our customers, ensuring a seamless and secure shopping experience.
          </Typography>
          <div className="mt-6">
            <Typography variant="h6" className="font-bold">
              Follow Us
            </Typography>
            <div className="flex gap-4 mt-2">
              <a href="#" className="hover:text-blue-500">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="hover:text-blue-400">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-blue-700">
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Logos Section */}
        <div>
          <Typography variant="h6" className="mb-4 font-bold">
            Secure Payments
          </Typography>
          <div className="flex gap-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Visa_2014_logo_detail.svg/2560px-Visa_2014_logo_detail.svg.png"
              alt="Visa"
              className="h-8 w-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/57/MasterCard_Logo.svg"
              alt="MasterCard"
              className="h-8 w-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
              alt="PayPal"
              className="h-8 w-auto"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Stripe_Logo%2C_revised_2016.svg/2560px-Stripe_Logo%2C_revised_2016.svg.png"
              alt="Stripe"
              className="h-8 w-auto"
            />
          </div>
          <Typography variant="small" className="opacity-70 mt-4">
            All transactions are secure and encrypted.
          </Typography>
        </div>
      </div>
      
      {/* Footer Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <Typography variant="small" className="opacity-70">
          © 2024 Your Company. All Rights Reserved.
        </Typography>
        <div className="mt-4 md:mt-0">
          <Button variant="text" size="sm" className="text-white opacity-70 hover:opacity-100">
            Privacy Policy
          </Button>
          <Button variant="text" size="sm" className="text-white opacity-70 hover:opacity-100 mx-4">
            Terms of Service
          </Button>
        </div>
      </div>
    </Card>
  );
}
