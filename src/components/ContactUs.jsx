import { motion } from "framer-motion";
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { FooterWithPaymentLogosAndSocialMedia } from "./Footer";
import NavBar from "./NavBar";

export default function ContactUs() {
  const contactInfo = [
    {
      icon: PhoneIcon,
      title: "اتصل بنا",
      details: "+966 556507642",
      link: "tel:+966556507642"
    },
    {
      icon: EnvelopeIcon,
      title: "راسلنا",
      details: "info@elwesam.com",
      link: "mailto:info@elwesam.com"
    },
    {
      icon: MapPinIcon,
      title: "موقعنا",
      details: "الطائف، المملكة العربية السعودية",
      link: "https://goo.gl/maps/yourLocation"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <NavBar />

      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative isolate overflow-hidden pt-24 pb-16"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div 
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            className="text-center"
          >
            <img
              src="./../public/Wessam.jpg"
              alt="الوسام"
              className="mx-auto h-48 w-48 rounded-full object-cover shadow-xl ring-4 ring-white"
            />
            <h1 className="mt-8 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              مرحباً بكم في الوسام
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Cards */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {contactInfo.map((item, index) => (
          <motion.a
            key={index}
            href={item.link}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            <item.icon className="h-8 w-8 text-blue-600 mb-4" />
            <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            <p className="mt-2 text-gray-600">{item.details}</p>
          </motion.a>
        ))}
      </div>

      {/* Contact Form */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto px-6 py-16"
      >
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-center mb-8">تواصل معنا</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  placeholder="الاسم"
                  className="block w-full rounded-xl border-gray-200 px-4 py-3 text-gray-600 transition-all duration-300 focus:border-blue-500 focus:ring-blue-500"
                />
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  placeholder="البريد الإلكتروني"
                  className="block w-full rounded-xl border-gray-200 px-4 py-3 text-gray-600 transition-all duration-300 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                rows={6}
                placeholder="رسالتك"
                className="block w-full rounded-xl border-gray-200 px-4 py-3 text-gray-600 transition-all duration-300 focus:border-blue-500 focus:ring-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                إرسال الرسالة
              </motion.button>
            </form>
          </div>
        </div>
      </motion.section>

      <FooterWithPaymentLogosAndSocialMedia />
    </div>
  );
}
