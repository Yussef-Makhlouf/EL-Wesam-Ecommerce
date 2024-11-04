import { Card, Typography, Button } from "@material-tailwind/react";
import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export function FooterWithPaymentLogosAndSocialMedia() {
  return (
    <Card className="mt-10 p-10 bg-gray-900 text-white" dir="rtl">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Features & Information Section */}
        <div>
          <Typography variant="h6" className="mb-4 font-bold">
            اساس الوسام للادوات الصحيه بالطائف
          </Typography>
          <ul className="space-y-2">
            <li>
              <Typography variant="small" className="hover:underline cursor-pointer">
                الدفع الآمن
              </Typography>
            </li>
            <li>
              <Typography variant="small" className="hover:underline cursor-pointer">
                24/7 دعم
              </Typography>
            </li>
            <li>
              <Typography variant="small" className="hover:underline cursor-pointer">
                توصيل سريع
              </Typography>
            </li>
            <li>
              <Typography variant="small" className="hover:underline cursor-pointer">
                برنامج ولاء
              </Typography>
            </li>
          </ul>
        </div>

        {/* Company Info Section */}
        <div>
          <Typography variant="h6" className="mb-4 font-bold">
            معلومات عنا
          </Typography>
          <Typography variant="small" className="opacity-70">
            نحن ملتزمون بتقديم أفضل المنتجات والخدمات لعملائنا، وضمان تجربة تسوق
            سلسة وآمنة.
          </Typography>

          <div className="mt-6">
            <Typography variant="h6" className="font-bold">
              عنوان الشركة
            </Typography>
            <Typography variant="small" className="opacity-70">
              العنوان الشهداء الجنوبية شارع 20, Taif, Saudi Arabia
            </Typography>
          </div>
          <div className="mt-6">
            <Typography variant="h6" className="font-bold">
              تابعنا
            </Typography>
            <div className="flex gap-4 mt-2">
              <a href="https://www.facebook.com/asas.al.wissam" className="hover:text-blue-500">
                <FaFacebookF size={20} />
              </a>
              <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
                <FaTiktok size={20} className="hover:text-black" />
              </a>
              <a href="https://api.whatsapp.com/send/?phone=966556507642" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp size={20} className="hover:text-green-500" />
              </a>
              <a href="https://www.instagram.com/asas.al.wissam" className="hover:text-pink-500">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Payment Logos Section */}
        <div>
          <Typography variant="h6" className="mb-4 font-bold">
            طرق دفع آمنة
          </Typography>
          <div className="flex gap-4">

            <img
              src="https://iconape.com/wp-content/png_logo_vector/paypal-me-logo.png"
              alt="PayPal"
              className="h-16 w-auto"
            />
            <img
              src="https://iconape.com/wp-content/png_logo_vector/tamara-%D8%AA%D9%85%D8%A7%D8%B1%D8%A7.png"
              alt="Tamara"
              className="h-16 w-auto"
            />
            <img
              src="https://iconape.com/wp-content/files/xd/389316/svg/389316.svg"
              alt="Tabby"
              className="h-16 w-auto"
            />
          </div>
          <Typography variant="small" className="opacity-70 mt-4">
            جميع المعاملات آمنة ومشفرة.
          </Typography>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
        <Typography variant="small" className="opacity-70">
          أساس الوسام بالطائف. جميع الحقوق محفوظة. © 2024
        </Typography>
        <div className="mt-4 md:mt-0">
          <Button variant="text" size="sm" className="text-white opacity-70 hover:opacity-100">
            سياسة الخصوصية
          </Button>
          <Button variant="text" size="sm" className="text-white opacity-70 hover:opacity-100 mx-4">
            شروط الخدمة
          </Button>
        </div>
      </div>
    </Card>
  );
}
