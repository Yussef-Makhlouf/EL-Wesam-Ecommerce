'use client'

import { StarIcon } from '@heroicons/react/20/solid'

const product = {
  name: 'شطاف مياه أسود اللون',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    { src: '../../public/photo_5841335275987519229_y.jpg', alt: 'شطاف مياه' },
    { src: '../../public/photo_5841335275987519232_y.jpg', alt: 'شطاف مياه' },
    { src: '../../public/photo_5841335275987519228_y.jpg', alt: 'شطاف مياه' },
    { src: '../../public/photo_5841335275987519228_y.jpg', alt: 'شطاف مياه' },
  ],
  description: 'شطاف المياه الأسود هو الخيار المثالي لمن يبحث عن الأناقة والعملية. تصميمه الأنيق يجعله يتناسب مع أي حمام، ويضمن لك تجربة استخدام مريحة وسلسة.',
  highlights: [
    'مصنوع من مواد عالية الجودة',
    'سهولة التركيب',
    'تصميم عصري يتناسب مع جميع الأذواق',
    'يعمل بكفاءة لتوفير المياه',
  ],
  details: 'يأتي شطاف المياه الأسود بتصميم انسيابي يسمح لك بالتحكم في تدفق المياه بسهولة. استمتع بنظافة مثالية مع هذا المنتج الذي يجمع بين الأناقة والوظيفة. مثالي للاستخدام اليومي ويعزز من تجربة الحمام الخاصة بك.',
}

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  return (
    <div className="bg-white" dir="rtl">
      <div className="pt-6">
        <hr className="pb-6">
        
        </hr>
        <nav aria-label="Breadcrumb">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
افضل المنتجات 
          </h2>


              

        </nav>
        <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl text-center mb-6">شطافات المياه</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-x-8">
          <div className="lg:col-span-2">
            <div className="aspect-w-3 aspect-h-4 overflow-hidden rounded-lg">
              <img src={product.images[0].src} alt={product.images[0].alt} className="h-full w-full object-cover object-center" />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {product.images.slice(1).map((image, index) => (
                <div key={index} className="aspect-w-3 aspect-h-2 overflow-hidden rounded-lg">
                  <img src={image.src} alt={image.alt} className="h-full w-full object-cover object-center" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
            <p className="text-3xl text-gray-900">{product.price}</p>
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating ? 'text-gray-900' : 'text-gray-200',
                        'h-5 w-5 flex-shrink-0'
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average} out of 5 stars</p>
                <a href={reviews.href} className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} تقييم
                </a>
              </div>
            </div>
            <div className="mt-6">
              <h2 className="text-sm font-medium text-gray-900">Highlights</h2>
              <ul role="list" className="list-disc pl-5 space-y-2 text-sm text-gray-600">
                {product.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:items-start">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">الوصف</h2>
            <p className="mt-4 text-gray-700">{product.description}</p>
          </div>
          <div className="mt-8 lg:mt-0">
            <h2 className="text-xl font-semibold text-gray-900">التفاصيل</h2>
            <p className="mt-4 text-gray-700">{product.details}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
