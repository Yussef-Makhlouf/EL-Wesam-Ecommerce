import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Category() {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/categories/getallcategories');
        setCategories(response.data.categories);
      } finally {
        setIsLoading(false);
      }
    };
    fetchCategories();
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-50 via-white to-blue-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Banner */}
        <div className="relative h-[400px] rounded-3xl overflow-hidden mb-8">
          <img
            src="/banner-main.jpg"
            alt="Main Banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-center px-12 text-white">
            <h1 className="text-5xl font-bold mb-4">أساس الوسام للأدوات الصحية</h1>
            <p className="text-xl text-blue-100 max-w-xl">اكتشف مجموعتنا المتميزة من المنتجات عالية الجودة</p>
          </div>
        </div>

        {/* Categories as Banners */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {isLoading ? (
            // Loading skeletons
            [...Array(4)].map((_, index) => (
              <div key={index} className="h-48 bg-gray-200 rounded-2xl animate-pulse"></div>
            ))
          ) : (
            categories.map((category) => (
              <div
                key={category._id}
                className="group relative h-[200px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                <img
                  src={category.image || 'https://via.placeholder.com/300'}
                  alt={category.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-700"
                  loading="lazy"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-blue-100 text-sm max-w-md opacity-0 group-hover:opacity-100 transition-all duration-500">
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    {category.startingPrice && (
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <span className="text-white">يبدأ من {category.startingPrice} ر.س</span>
                      </div>
                    )}
                    
                    {category.discount && (
                      <div className="bg-red-500 px-4 py-2 rounded-full">
                        <span className="text-white font-bold">خصم {category.discount}%</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Call to Action */}
                <div className="absolute bottom-0 right-0 m-8 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button className="bg-white text-blue-900 px-6 py-2 rounded-full font-bold hover:bg-blue-50 transition-colors">
                    تصفح المنتجات
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
