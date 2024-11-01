// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Input, Spinner, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
// import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

// export default function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [categories, setCategories] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1); // Page number for API pagination
//   const [totalPages, setTotalPages] = useState(1); // Total number of pages from API

//   useEffect(() => {
//     fetchData();
//   }, [currentPage, selectedCategory]); // Update on page change or category filter

//   const fetchData = async () => {
//     setLoading(true);
//     setError(null);

//     try {
//       // Fetch products with pagination, filtered by category if selected
//       const categoryFilter = selectedCategory ? `&category=${selectedCategory}` : '';
//       const productsResponse = await axios.get(
//         `http://localhost:3000/api/v1/products/getallproducts?page=${currentPage}&limit=10${categoryFilter}`
//       );
//       setProducts(productsResponse.data.products);
//       setFilteredProducts(productsResponse.data.products);
//       setTotalPages(productsResponse.data.totalPages);

//       // Fetch categories
//       const categoriesResponse = await axios.get('http://localhost:3000/api/v1/categories/getallcategories');
//       const allCategories = categoriesResponse.data.categories;

//       // Map categories with icons
//       const categoriesWithIcons = await Promise.all(
//         allCategories.map(async (category) => {
//           try {
//             const categoryDetails = await axios.get(`http://localhost:3000/api/v1/categories/getonecategory/${category}`);
//             return { ...category, icon: categoryDetails.data.icon };
//           } catch (error) {
//             console.error(`Error fetching category ${category._id}:`, error);
//             return category;
//           }
//         })
//       );

//       setCategories(categoriesWithIcons);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//       setError('Failed to fetch data from server.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const filterProductsByCategory = (categoryId) => {
//     setSelectedCategory(categoryId);
//     setCurrentPage(1); // Reset to the first page on category filter change
//     setSearchTerm("");
//   };

//   const handleSearch = (event) => setSearchTerm(event.target.value);
//   const handleProductClick = (product) => setSelectedProduct(product);
//   const closeModal = () => setSelectedProduct(null);

//   const handlePreviousPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1);
//   };

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1);
//   };

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStars = rating % 1 ? 1 : 0;
//     const emptyStars = 5 - fullStars - halfStars;
//     return (
//       <div className="flex items-center mt-2">
//         {Array(fullStars).fill(0).map((_, index) => (
//           <span key={`full-${index}`} className="text-yellow-400">★</span>
//         ))}
//         {halfStars > 0 && <span className="text-yellow-400">☆</span>}
//         {Array(emptyStars).fill(0).map((_, index) => (
//           <span key={`empty-${index}`} className="text-gray-300">☆</span>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white flex flex-col lg:flex-row transition-all duration-500">
//       {/* Sidebar with Smooth Slide-in */}
//       <aside className="w-full lg:w-1/4 p-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-gray-200 transition-transform transform-gpu">
//         <Accordion open={true}>
//           <AccordionHeader>الفئات</AccordionHeader>
//           <AccordionBody>
//             <ul>
//               <li
//                 className={`cursor-pointer mb-2 ${!selectedCategory ? 'text-blue-600 font-semibold' : ''}`}
//                 onClick={() => filterProductsByCategory(null)}
//               >
//                 جميع المنتجات
//               </li>
//               {categories.map((category) => (
//                 <li
//                   key={category._id}
//                   className={`cursor-pointer mb-2 flex items-center ${selectedCategory === category._id ? 'text-blue-600 font-semibold' : ''}`}
//                   onClick={() => filterProductsByCategory(category._id)}
//                 >
//                   {category.icon && <img src={category.icon} alt={category.name} className="w-6 h-6 mr-2" />}
//                   {category.name}
//                 </li>
//               ))}
//             </ul>
//           </AccordionBody>
//         </Accordion>
//       </aside>

//       {/* Product Grid with Pagination */}
//       <div className="flex-1 mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 transition-opacity duration-500">
//         <h2 className="sr-only">المنتجات</h2>

//         {loading ? (
//           <div className="flex justify-center items-center h-full transition-opacity duration-500">
//             <Spinner className="h-12 w-12 text-blue-500" />
//           </div>
//         ) : error ? (
//           <div className="text-center text-red-500 transition-opacity duration-500">{error}</div>
//         ) : (
//           <>
//             <div className="mb-6 text-right transition-all duration-500" dir="rtl">
//               <Input
//                 label="ابحث عن منتج"
//                 value={searchTerm}
//                 onChange={handleSearch}
//                 placeholder="ابحث عن منتج عن طريق الاسم او الفئة"
//                 className="w-full"
//               />
//             </div>

//             <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 transition-transform transform-gpu">
//               {filteredProducts.map((product) => (
//                 <div
//                   key={product._id}
//                   onClick={() => handleProductClick(product)}
//                   className="group cursor-pointer transform hover:scale-105 transition-transform duration-300"
//                 >
//                   <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
//                     <img
//                       alt={product.title}
//                       src={product.image}
//                       className="h-full w-full object-cover object-center group-hover:opacity-75"
//                     />
//                   </div>
//                   <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
//                   <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
//                   {renderStars(product.rate)}
//                   <p className="mt-1 text-sm text-gray-500">{product.category}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Pagination Controls */}
//             <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-6">
//               <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
//                 <button
//                   onClick={handlePreviousPage}
//                   disabled={currentPage === 1}
//                   className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                 >
//                   <span className="sr-only">Previous</span>
//                   <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
//                 </button>
//                 {[...Array(totalPages)].map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentPage(index + 1)}
//                     className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
//                       currentPage === index + 1 ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
//                     } focus:z-20 focus:outline-offset-0`}
//                   >
//                     {index + 1}
//                   </button>
//                 ))}
//                 <button
//                   onClick={handleNextPage}
//                   disabled={currentPage === totalPages}
//                   className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
//                 >
//                   <span className="sr-only">Next</span>
//                   <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
//                 </button>
//               </nav>
//             </div>
//           </>
//         )}
//       </div>

//       {/* Modal with Fade-in Animation */}
//       {selectedProduct && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
//           <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-4xl sm:w-full">
//             <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
//               <div className="col-span-1">
//                 <img
//                   src={selectedProduct.image}
//                   alt={selectedProduct.title}
//                   className="w-full h-auto object-cover rounded"
//                 />
//               </div>
//               <div className="col-span-1">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-2xl font-medium text-gray-900">{selectedProduct.title}</h3>
//                   <button onClick={closeModal} className="text-gray-500 hover:text-gray-700">
//                     &times;
//                   </button>
//                 </div>
//                 <p className="mt-4 text-sm text-gray-700">{selectedProduct.description}</p>
//                 <div className="mt-4">
//                   <h4 className="font-medium text-gray-900">Highlights</h4>
//                   <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
//                     {Array.isArray(selectedProduct.highlights) ? selectedProduct.highlights.map((highlight, index) => (
//                       <li key={index}>{highlight}</li>
//                     )) : <li>{selectedProduct.highlights}</li>}
//                   </ul>
//                 </div>
//                 <p className="mt-6 text-lg font-medium text-gray-900">${selectedProduct.price}</p>
//                 {renderStars(selectedProduct.rate)}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// src/components/ProductList.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Spinner, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage, selectedCategory]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      // Fetch products with pagination and category filter
      const categoryFilter = selectedCategory ? `&category=${selectedCategory}` : '';
      const { data: productsData } = await axios.get(
        `http://localhost:3000/api/v1/products/getallproducts?page=${currentPage}&limit=10${categoryFilter}`
      );
      setProducts(productsData.products);
      setFilteredProducts(productsData.products);
      setTotalPages(productsData.totalPages);

      // Fetch categories and icons
      const { data: categoriesData } = await axios.get('http://localhost:3000/api/v1/categories/getallcategories');
      const categoriesWithIcons = await Promise.all(
        categoriesData.categories.map(async (category) => {
          try {
            const { data: categoryDetails } = await axios.get(`http://localhost:3000/api/v1/categories/getonecategory/${category._id}`);
            return { ...category, icon: categoryDetails.icon };
          } catch (error) {
            console.error(`Error fetching icon for category ${category._id}:`, error);
            return category;
          }
        })
      );
      setCategories(categoriesWithIcons);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data from server.');
    } finally {
      setLoading(false);
    }
  };

  const filterProductsByCategory = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1); // Reset to first page on category change
    setSearchTerm("");
  };

  const handleSearch = (event) => setSearchTerm(event.target.value);
  const handleProductClick = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    return (
      <div className="flex items-center mt-2">
        {Array(fullStars).fill(0).map((_, index) => (
          <span key={`full-${index}`} className="text-yellow-400">★</span>
        ))}
        {halfStars > 0 && <span className="text-yellow-400">☆</span>}
        {Array(emptyStars).fill(0).map((_, index) => (
          <span key={`empty-${index}`} className="text-gray-300">☆</span>
        ))}
      </div>
    );
  };

  const filteredList = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white flex flex-col lg:flex-row transition-all duration-500">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-gray-200 transition-transform transform-gpu">
        <Accordion open={true}>
          <AccordionHeader>الفئات</AccordionHeader>
          <AccordionBody>
            <ul>
              <li
                className={`cursor-pointer mb-2 ${!selectedCategory ? 'text-blue-600 font-semibold' : ''}`}
                onClick={() => filterProductsByCategory(null)}
              >
                جميع المنتجات
              </li>
              {categories.map((category) => (
                <li
                  key={category._id}
                  className={`cursor-pointer mb-2 flex items-center ${selectedCategory === category._id ? 'text-blue-600 font-semibold' : ''}`}
                  onClick={() => filterProductsByCategory(category._id)}
                >
                  {category.icon && <img src={category.icon} alt={category.name} className="w-6 h-6 mr-2" />}
                  {category.name}
                </li>
              ))}
            </ul>
          </AccordionBody>
        </Accordion>
      </aside>

      {/* Main Content */}
      <div className="flex-1 mx-auto max-w-2xl px-4 py-6 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8 transition-opacity duration-500">
        <h2 className="sr-only">المنتجات</h2>

        {loading ? (
          <div className="flex justify-center items-center h-full transition-opacity duration-500">
            <Spinner className="h-12 w-12 text-blue-500" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500 transition-opacity duration-500">{error}</div>
        ) : (
          <>
            <div className="mb-6 text-right transition-all duration-500" dir="rtl">
              <Input
                label="ابحث عن منتج"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="ابحث عن منتج عن طريق الاسم او الفئة"
                className="w-full"
              />
            </div>

            <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 xl:gap-x-8 transition-transform transform-gpu">
              {filteredList.map((product) => (
                <div
                  key={product._id}
                  onClick={() => handleProductClick(product)}
                  className="group cursor-pointer transform hover:scale-105 transition-transform duration-300"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                      alt={product.title}
                      src={product.image}
                      className="h-full w-full object-cover object-center group-hover:opacity-75"
                    />
                  </div>
                  <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
                  <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
                  {renderStars(product.rate)}
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-6">
              <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-sm">
                <button
                name='previous'
                title='previous'
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                >
                  <ChevronLeftIcon aria-hidden="true" className="h-5 w-5" />
                </button>
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index}
                    name='current'
                    title='currentPage'
                    onClick={() => setCurrentPage(index + 1)}
                    className={`relative inline-flex items-center px-4 py-2 text-sm font-semibold ${
                      currentPage === index + 1 ? 'bg-indigo-600 text-white' : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
                    } focus:z-20 focus:outline-offset-0`}
                  >
                    {index + 1}
                  </button>
                ))}
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  title='next'
                >
                  <ChevronRightIcon aria-hidden="true" className="h-5 w-5" />
                </button>
              </nav>
            </div>
          </>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 transition-opacity duration-300">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-4xl sm:w-full">
            <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
              <div className="col-span-1">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-auto object-cover rounded"
                />
              </div>
              <div className="col-span-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-medium text-gray-900">{selectedProduct.title}</h3>
                  <button onClick={closeModal} className="text-gray-500 hover:text-gray-700" title='closeModel' name='close'>
                    &times;
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-700">{selectedProduct.description}</p>
                <div className="mt-4">
                  <h4 className="font-medium text-gray-900">Highlights</h4>
                  <ul className="list-disc list-inside mt-2 text-sm text-gray-700">
                    {Array.isArray(selectedProduct.highlights) ? selectedProduct.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    )) : <li>{selectedProduct.highlights}</li>}
                  </ul>
                </div>
                <p className="mt-6 text-lg font-medium text-gray-900">${selectedProduct.price}</p>
                {renderStars(selectedProduct.rate)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
