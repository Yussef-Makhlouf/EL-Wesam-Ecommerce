
// const callouts = [
//     {
//       name: 'Desk and Office',
//       description: 'Work from home accessories',
//       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-01.jpg',
//       imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
//       href: '#',
//     },
//     {
//       name: 'Self-Improvement',
//       description: 'Journals and note-taking',
//       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
//       imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
//       href: '#',
//     },
//     {
//       name: 'Travel',
//       description: 'Daily commute essentials',
//       imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-03.jpg',
//       imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
//       href: '#',
//     },
//   ]
  
//   export default function Category() {
//     return (
//       <div className="bg-gray-100">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//           <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
//             <h2 className="text-2xl font-bold text-gray-900">Collections</h2>
  
//             <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
//               {callouts.map((callout) => (
//                 <div key={callout.name} className="group relative">
//                   <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
//                     <img
//                       alt={callout.imageAlt}
//                       src={callout.imageSrc}
//                       className="h-full w-full object-cover object-center"
//                     />
//                   </div>
//                   <h3 className="mt-6 text-sm text-gray-500">
//                     <a href={callout.href}>
//                       <span className="absolute inset-0" />
//                       {callout.name}
//                     </a>
//                   </h3>
//                   <p className="text-base font-semibold text-gray-900">{callout.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
  
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/style.css';
export default function Category() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/categories/getallcategories');
        setCategories(response.data.categories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="bg-gray-100 rtl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900 text-center">مجموعات</h2>

          <div className="mt-6 grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            {categories.map((category) => (
              <div key={category._id} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white">
                  <img
                    alt={category.imageAlt || category.name}
                    src={category.image || 'https://via.placeholder.com/300'}
                    className="h-full w-full object-cover object-center"
                  />
                  {/* Overlay Box for Discount or Price */}
                  {category.discount ? (
                    <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 rounded-lg">
                      خصم يصل إلى {category.discount}%
                    </div>
                  ) : category.startingPrice ? (
                    <div className="absolute top-4 left-4 bg-green-700 text-white px-3 py-1 rounded-lg">
                      أسعار تبدأ من {category.startingPrice} EGP
                    </div>
                  ) : null}
                </div>
                <h3 className="mt-6 text-sm text-gray-500 text-center">
                  <a href={category.href || '#'}>
                    <span className="absolute inset-0" />
                    {category.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900 text-center">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
