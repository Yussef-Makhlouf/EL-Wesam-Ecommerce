import { StarIcon } from "@heroicons/react/20/solid";

const product = {
  name: "   اساس الوسام للأدوات الصحية",
  href: "",

  images: [
    { src: "../../public/Wessam.jpg", alt: "wessam" },
    { src: "../../public/plumb (1).jpg", alt: "   services 1" },
    { src: "../../public/plumb (2).jpg", alt: "   services 3" },
  ],
  description:
    " شركة أساس الوسام للأدوات الصحيه بالطائف في المملكه العربيه السعوديه ",
  highlights: [
    "منتجات متنوعه",
    " توريد الادوات الصحيه ",
    "تصميم عصري يتناسب مع جميع الأذواق",
    "دعم فني موثوق وخدمة ما بعد البيع متميزة.",
  ],
  details: "العنوان الشهداء الجنوبية شارع 20, Taif, Saudi Arabia",
};

const reviews = { href: "#", average: 4, totalCount: 117 };
"use client";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-gray-50 min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8" dir="rtl">
        {/* Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-blue-600 text-white mb-12">
          <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
          <div className="relative px-8 py-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              اساس الوسام للادوات الصحية
            </h1>
            <p className="text-xl text-blue-100">خبرة تمتد لأكثر من 20 عامًا في مجال الأدوات الصحية</p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Image Gallery - 3 Columns */}
          <div className="lg:col-span-3 space-y-6">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="w-full h-full object-cover transform hover:scale-105 transition-all duration-700"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="aspect-w-4 aspect-h-3 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover hover:scale-110 transition-all duration-500"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Info Section - 2 Columns */}
          <div className="lg:col-span-2">
            <div className="sticky top-8 space-y-8">
              {/* Company Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">+1000</div>
                  <div className="text-gray-600">منتج متنوع</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">20+</div>
                  <div className="text-gray-600">سنة خبرة</div>
                </div>
              </div>

              {/* Features */}
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  مميزات خدماتنا
                </h2>
                <div className="space-y-3">
                  {product.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-3 text-gray-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-6 text-white shadow-lg">
                <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  موقعنا
                </h2>
                <p className="text-blue-100">{product.details}</p>
                <button className="mt-4 w-full bg-white text-blue-600 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                  احصل على الاتجاهات
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              {[0, 1, 2, 3, 4].map((rating) => (
                <StarIcon
                  key={rating}
                  className={classNames(
                    reviews.average > rating ? "text-yellow-400" : "text-gray-200",
                    "h-6 w-6"
                  )}
                />
              ))}
              <span className="text-gray-600 mr-2">{reviews.totalCount} تقييم</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              أضف تقييمك
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
