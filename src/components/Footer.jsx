import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export function FooterWithPaymentLogosAndSocialMedia() {
  return (
    <div className="relative mt-10 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-blue-900"></div>
      <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

      <div className="relative px-8 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12" dir="rtl">
            {/* Company Info */}
            <div className="space-y-8">
              <div>
                <img src="../../public/Wessam.jpg" alt="Logo" className="h-16 w-auto rounded-full" />
                <h3 className="mt-4 text-2xl font-bold text-white">اساس الوسام للادوات الصحية</h3>
              </div>
              <p className="text-gray-300">
                نحن ملتزمون بتقديم أفضل المنتجات والخدمات لعملائنا، مع ضمان تجربة تسوق سلسة وآمنة.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/asas.al.wissam" 
                   className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <FaFacebookF className="h-5 w-5 text-white" />
                </a>
                <a href="https://www.tiktok.com" 
                   className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <FaTiktok className="h-5 w-5 text-white" />
                </a>
                <a href="https://api.whatsapp.com/send/?phone=966556507642" 
                   className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <FaWhatsapp className="h-5 w-5 text-white" />
                </a>
                <a href="https://www.instagram.com/asas.al.wissam" 
                   className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
                  <FaInstagram className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-8">
              <h3 className="text-xl font-bold text-white">روابط سريعة</h3>
              <ul className="space-y-4">
                <li>
                  <a href="/about" className="text-gray-300 hover:text-white transition-colors">من نحن</a>
                </li>
                <li>
                  <a href="/products" className="text-gray-300 hover:text-white transition-colors">منتجاتنا</a>
                </li>
                <li>
                  <a href="/contact" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</a>
                </li>
                <li>
                  <a href="/support" className="text-gray-300 hover:text-white transition-colors">الدعم الفني</a>
                </li>
              </ul>
            </div>

            {/* Contact & Payment */}
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-white">تواصل معنا</h3>
                <address className="mt-4 text-gray-300 not-italic">
                  العنوان الشهداء الجنوبية شارع 20<br />
                  Taif, Saudi Arabia
                </address>
              </div>

              <div>
                <h3 className="text-xl font-bold text-white">طرق الدفع الآمنة</h3>
                <div className="mt-4 flex gap-4">
                  <div className="p-4 bg-white rounded-xl">
                    <img src="https://iconape.com/wp-content/png_logo_vector/paypal-me-logo.png" alt="PayPal" className="h-8" />
                  </div>
                  <div className="p-4 bg-white rounded-xl">
                    <img src="https://iconape.com/wp-content/png_logo_vector/tamara-%D8%AA%D9%85%D8%A7%D8%B1%D8%A7.png" alt="Tamara" className="h-8" />
                  </div>
                  <div className="p-4 bg-white rounded-xl">
                    <img src="https://iconape.com/wp-content/files/xd/389316/svg/389316.svg" alt="Tabby" className="h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <p className="text-gray-400">© 2024 أساس الوسام. جميع الحقوق محفوظة.</p>
              <div className="flex gap-4">
                <a href="/privacy" className="text-gray-400 hover:text-white transition-colors">سياسة الخصوصية</a>
                <a href="/terms" className="text-gray-400 hover:text-white transition-colors">الشروط والأحكام</a>
              </div>
              <a href="https://fashne.net/" className="text-gray-400 hover:text-white transition-colors">
                Al FASHNE FOR DIGITAL MARKETING AGENCY
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
