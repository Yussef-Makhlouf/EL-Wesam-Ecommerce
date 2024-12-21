"use client";

import { useState, useEffect } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon, MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useCart } from './CartContext';
  import PropTypes from 'prop-types';

  const navigation = [
    { name: "تواصل معنا", href: "/contact" },
    { name: "الشركات", href: "/companies" },
    { name: "المنتجات", href: "/" },
    { name: "السلة", href: "/checkout" },
  ];
    const CartButton = ({ cartItems, setIsCartOpen }) => (
      <button
        onClick={() => setIsCartOpen(true)}
        className="relative group p-3 hover:bg-gray-100 rounded-xl transition-all duration-300 hover:shadow-md"
      >
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
          {cartItems.length}
        </div>
        <svg 
          className="w-6 h-6 text-gray-700 group-hover:text-blue-600 transition-colors" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      </button>
    );

    CartButton.propTypes = {
      cartItems: PropTypes.array.isRequired,
      setIsCartOpen: PropTypes.func.isRequired
    };


export default function NavBar() {
 const { cartItems, updateQuantity, removeFromCart } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const cartTotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="relative z-50" dir="rtl">
        <header className={`fixed w-full transition-all duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}>
          <nav className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex lg:flex-1">
                <a href="/product" className="-m-1.5 p-1.5">
                  <img
                    src="../../public/Wessam.jpg"
                    alt="أساس الوسام"
                    className="h-16 w-auto rounded-full shadow-lg transition-transform hover:scale-105"
                  />
                </a>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex lg:gap-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="relative text-gray-800 font-medium text-sm tracking-wide hover:text-blue-600 transition-colors py-2"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform origin-left hover:scale-x-100"></span>
                  </a>
                ))}
              </div>
                {/* Cart Button - Desktop */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
                <CartButton cartItems={cartItems} setIsCartOpen={setIsCartOpen}  />
                </div>

                {/* Cart Button - Mobile */}
                <div className="fixed bottom-4 right-4 z-50 lg:hidden">
                  <button
                    onClick={() => setIsCartOpen(true)}
                    className="relative group p-4 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors"
                  >
                    <div className="absolute -top-1 -right-1 bg-red-500 text-white w-6 h-6 rounded-full text-sm flex items-center justify-center font-bold">
                      {cartItems.length}
                    </div>
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </button>
                </div>

                {/* Cart Dialog - Full Screen on Mobile */}
                <Dialog open={isCartOpen} onClose={() => setIsCartOpen(false)}>
                  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                  <div className="fixed inset-y-0 left-0 right-0 lg:right-auto flex">
                    <Dialog.Panel className="w-full lg:w-96 bg-white shadow-xl">
                      <div className="flex flex-col h-full">
                        <div className="p-4 border-b flex items-center justify-between">
                          <h2 className="text-lg font-bold">السلة ({cartItems.length})</h2>
                          <button onClick={() => setIsCartOpen(false)} className="p-2 hover:bg-gray-100 rounded-full">
                            <XMarkIcon className="w-5 h-5" />
                          </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4">
                          {cartItems.map((item) => (
                            <div key={item._id} className="flex gap-4 p-4 bg-white rounded-xl shadow-sm mb-4">
                              <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded-lg" />
                              <div className="flex-1">
                                <h3 className="font-medium">{item.title}</h3>
                                <p className="text-blue-600 font-bold">{item.price} ر.س</p>
                                <div className="flex items-center gap-3 mt-2">
                                  <button 
                                    onClick={() => updateQuantity(item._id, item.quantity - 1)}
                                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                                  >
                                    <MinusIcon className="w-4 h-4" />
                                  </button>
                                  <span>{item.quantity}</span>
                                  <button 
                                    onClick={() => updateQuantity(item._id, item.quantity + 1)}
                                    className="p-1 rounded-full bg-gray-100 hover:bg-gray-200"
                                  >
                                    <PlusIcon className="w-4 h-4" />
                                  </button>
                                  <button 
                                    onClick={() => removeFromCart(item._id)}
                                    className="mr-auto p-1 text-red-500 hover:bg-red-50 rounded-full"
                                  >
                                    <TrashIcon className="w-5 h-5" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>

                        <div className="border-t p-4 space-y-4">
                          <div className="flex justify-between text-lg font-bold">
                            <span>المجموع</span>
                            <span>{cartTotal} ر.س</span>
                          </div>
                          <button 
                            onClick={() => {
                              // Implement checkout logic
                            }}
                            className="w-full bg-blue-600 text-white py-3 rounded-xl font-medium hover:bg-blue-700 transition-colors"
                          >
                            إتمام الطلب
                          </button>
                        </div>
                      </div>
                    </Dialog.Panel>
                  </div>
                </Dialog>
              {/* Mobile Menu Button */}
              <div className="flex lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(true)}
                  className="rounded-full p-2 text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  <Bars3Icon className="h-6 w-6" />
                </button>
              </div>
            </div>
          </nav>

          {/* Mobile Menu */}
          <Dialog
            as="div"
            className="lg:hidden"
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
          >
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white/90 backdrop-blur-lg px-6 py-6 sm:max-w-sm">
              <div className="flex items-center justify-between">
                <a href="/" className="-m-1.5 p-1.5">
                  <img
                    src="../../public/Wessam.jpg"
                    alt="أساس الوسام"
                    className="h-12 w-auto rounded-full"
                  />
                </a>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full p-2 text-gray-700 hover:bg-gray-100"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block rounded-lg px-4 py-3 text-base font-medium text-gray-900 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>

                <div className="py-6">
                  <a
                    href="https://wa.me/966505004828"
                    className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                    تواصل معنا على واتساب
                  </a>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
      </div>
    </>
  );
}
