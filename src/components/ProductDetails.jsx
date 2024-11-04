"use client";

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

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProductDetails() {
  return (
    <div className="bg-white" dir="rtl">
      <div className="pt-6 max-w-5xl mx-auto">
        <nav aria-label="Breadcrumb">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            اساس الوسام للادوات الصحية
          </h2>
          <p className="text-center text-gray-500 mb-4">
            الطائف - أفضل الأدوات الصحية بجودة عالية
          </p>
          <hr className="my-4" />
        </nav>

        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center mb-6">
          عن الشركه
        </h3>

        {/* Main grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8">
          {/* Image Gallery */}
          <div className="lg:col-span-2">
            <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
              <img
                src={product.images[0].src}
                alt={product.images[0].alt}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div
                  key={index}
                  className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {product.name}
            </h1>
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating
                          ? "text-gray-900"
                          : "text-gray-200",
                        "h-5 w-5 flex-shrink-0"
                      )}
                    />
                  ))}
                </div>
                <a
                  href={reviews.href}
                  className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500"
                >
                  {reviews.totalCount} تقييم
                </a>
              </div>
            </div>

            {/* Highlights */}
            <div className="mt-6">
              <h2 className="text-sm font-medium text-gray-900">
                مميزات المنتج
              </h2>
              <ul
                role="list"
                className="list-disc pl-5 space-y-2 text-sm text-gray-600"
              >
                {product.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">الوصف</h2>
            <p className="mt-4 text-gray-700">{product.description}</p>
          </div>
          <div className="mt-8 lg:mt-0">
            <h2 className="text-xl font-semibold text-gray-900">العنوان</h2>
            <p className="mt-4 text-gray-700">{product.details}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
