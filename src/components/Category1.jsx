import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/style.min.css';

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
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-8 sm:py-12 lg:max-w-none lg:py-16">
          <h2 className="text-2xl font-bold text-gray-900 text-center">مجموعات</h2>

          {/* إعداد الشبكة لعرض 4 بطاقات على الشاشات الصغيرة */}
          <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <div key={category._id} className="group relative">
                <div className="relative h-40 w-full overflow-hidden rounded-lg bg-white sm:h-48 md:h-56 lg:h-64">
                  <img
                    alt={category.imageAlt || category.name}
                    src={category.image || 'https://via.placeholder.com/300'}
                    className="h-full w-full object-cover object-center"
                  />
                  {category.discount ? (
                    <div className="absolute top-2 left-2 bg-green-700 text-white px-2 py-1 rounded-lg text-xs">
                      خصم يصل إلى {category.discount}%
                    </div>
                  ) : category.startingPrice ? (
                    <div className="absolute top-2 left-2 bg-green-700 text-white px-2 py-1 rounded-lg text-xs">
                      أسعار تبدأ من {category.startingPrice} EGP
                    </div>
                  ) : null}
                </div>
                <h3 className="mt-2 text-xs text-gray-500 text-center">
                  <a href={category.href || '/product'}>
                    <span className="absolute inset-0" />
                    {category.name}
                  </a>
                </h3>
                <p className="text-sm font-semibold text-gray-900 text-center">{category.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
