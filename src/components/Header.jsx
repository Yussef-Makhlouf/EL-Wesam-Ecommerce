

import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
const navigation = [
  { name: 'تسوق', href: '/product', current: false },
  { name: 'الصفحة الرئيسية', href: '/', current: true },
  { name: 'اتصل بنا', href: '/contact', current: false },

];


export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Disclosure as="nav" className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative flex h-20 items-center justify-between">
              {/* Logo */}
              <div className="flex items-center">
                <img
                  src="../../public/Wessam.jpg"
                  alt="أساس الوسام"
                  className="h-16 w-auto rounded-full shadow-lg transition-transform hover:scale-105"
                />
              </div>

              {/* Desktop Navigation */}
              <div className="hidden sm:flex sm:space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`relative px-4 py-2 text-sm font-medium transition-colors
                      ${item.current ? 
                        'text-blue-600' : 
                        'text-gray-700 hover:text-blue-600'
                      }`}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 transform scale-x-0 transition-transform origin-left hover:scale-x-100"></span>
                  </a>
                ))}
              </div>

              {/* Contact Button */}
              <div className="hidden sm:block">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-blue-500/30"
                >
                  تواصل معنا
                </a>
              </div>

              {/* Mobile Menu Button */}
              <div className="sm:hidden">
                <DisclosureButton className="inline-flex items-center justify-center rounded-full p-2 text-gray-700 hover:bg-gray-100 transition-colors">
                  {open ? (
                    <XMarkIcon className="h-6 w-6" />
                  ) : (
                    <Bars3Icon className="h-6 w-6" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <DisclosurePanel className="sm:hidden">
            <div className="space-y-2 px-4 pb-4 pt-2 bg-white/90 backdrop-blur-md">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-colors
                    ${item.current ?
                      'bg-blue-50 text-blue-600' :
                      'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                >
                  {item.name}
                </DisclosureButton>
              ))}
              <div className="pt-4">
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors"
                >
                  تواصل معنا الآن
                </a>
              </div>
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

