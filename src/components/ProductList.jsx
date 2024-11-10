

import { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Spinner, Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from '@heroicons/react/20/solid';

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pages, setTotalPages] = useState(1);

  useEffect(() => {
    fetchData();
  }, [currentPage, selectedCategory]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const categoryFilter = selectedCategory ? `&category=${selectedCategory}` : '';
      const { data: productsData } = await axios.get(
        `http://localhost:3000/api/v1/products/getallproducts?page=${currentPage}&limit=40${categoryFilter}`
      );
      setProducts(productsData.products);
      setTotalPages(productsData.pages);

      const { data: categoriesData } = await axios.get('http://localhost:3000/api/v1/categories/getallcategories');
      setCategories(categoriesData.categories);
    } catch (error) {
      console.error('Error fetching data:', error);
      setError('Failed to fetch data from server.');
    } finally {
      setLoading(false);
    }
  };

  const filterProductsByCategory = (categoryName) => {
    setSelectedCategory(categoryName);
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
    if (currentPage < pages) setCurrentPage(currentPage + 1);
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
    product.title && product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderPagination = () => {
    const visiblePages = 3;
    const startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(startPage + visiblePages - 1, pages);

    return (
      <nav aria-label="Pagination" className="inline-flex rounded-md shadow-sm">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="px-3 py-2 text-gray-400 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50 disabled:opacity-50 sm:px-4"
          title='Previous'
          name='Previous'
        >
          <ChevronLeftIcon aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
        {startPage > 1 && (
          <button
            onClick={() => setCurrentPage(1)}
            className="px-2 py-1 sm:px-4 sm:py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300"
            title='1'
            name='1'
          >
            1
          </button>
        )}
        {startPage > 2 && <span className="px-2 py-1 text-gray-500">...</span>}
        {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
          const page = startPage + index;
          return (
            <button
              key={page}
              title={page}
              name={page}
              onClick={() => setCurrentPage(page)}
              className={`px-2 py-1 sm:px-4 sm:py-2 text-sm font-medium ${
                currentPage === page ? 'bg-blue-600 text-white' : 'text-gray-700 bg-white border border-gray-300'
              }`}
            >
              {page}
            </button>
          );
        })}
        {endPage < pages - 1 && <span className="px-2 py-1 text-gray-500">...</span>}
        {endPage < pages && (
          <button
            onClick={() => setCurrentPage(pages)}
            title='Last'
            name='Last'
            className="px-2 py-1 sm:px-4 sm:py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300"

          >
            {pages}
          </button>
        )}
        <button
          onClick={handleNextPage}
          disabled={currentPage === pages}
          className="px-3 py-2 text-gray-400 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 disabled:opacity-50 sm:px-4"
          title='Next'
          name='Next'
        >
          <ChevronRightIcon aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>
      </nav>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen p-4 sm:p-8 flex flex-col lg:flex-row transition-all duration-500">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-4 lg:p-6 bg-white shadow-md rounded-lg mb-6 lg:mb-0 border border-gray-200" dir="rtl">
        <Accordion open={true}>
          <AccordionHeader className='text-right text-lg font-bold text-gray-900'>الفئات</AccordionHeader>
          <AccordionBody>
            <ul className='list-none text-right text-gray-700 mt-4'>
              <li
                className={`cursor-pointer mb-4 ${!selectedCategory ? 'text-blue-600 font-bold' : ''}`}
                onClick={() => filterProductsByCategory(null)}
              >
                جميع المنتجات
              </li>
              {categories.map((category) => (
                <li
                  key={category.name}
                  className={`cursor-pointer mb-4 flex items-center ${selectedCategory === category.name ? 'text-blue-600 font-bold' : ''}`}
                  onClick={() => filterProductsByCategory(category.name)}
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
      <div className="flex-1 mx-auto max-w-7xl px-4 py-6 transition-opacity duration-500">
        <h2 className="sr-only">المنتجات</h2>

        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Spinner className="h-12 w-12 text-blue-500" />
          </div>
        ) : error ? (
          <div className="text-center text-red-500">{error}</div>
        ) : (
          <>
            <div className="mb-6 text-right" dir="rtl">
              <Input
                value={searchTerm}
                onChange={handleSearch}
                placeholder="ابحث عن منتج عن طريق الاسم او الفئة"
                className="w-full border border-gray-600 rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 text-right">
              {filteredList.map((product) => (
                <div
                  key={product._id}
                  onClick={() => handleProductClick(product)}
                  className="group cursor-pointer bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200">
                    <img
                      alt={product.title}
                      src={product.image}
                      className="w-full h-auto object-cover object-center group-hover:opacity-75 transition-opacity "
                    />
                  </div>
                  <h3 className="mt-4 text-sm font-semibold text-gray-800">{product.title}</h3>
                  <p className="mt-1 text-lg font-bold text-blue-500 "> <p>{product.price}</p>ر.س </p>
                  {renderStars(product.rate)}
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-center border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-6">
              {renderPagination()}
            </div>

            {/* Modal */}
            {selectedProduct && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white rounded-lg max-w-lg w-full p-6 relative shadow-lg sm:w-3/4 lg:w-1/2">
                  <button
                    onClick={closeModal}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                    title='Close'
                    name='Close'
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                  <div className="flex flex-col sm:flex-row items-center">
                    <img src={selectedProduct.image} alt={selectedProduct.title} className="w-32 h-32 sm:w-48 sm:h-48 rounded-lg" />
                    <div className="mt-4 sm:mt-0 sm:ml-6 text-right">
                      <h3 className="text-xl font-semibold text-gray-900">{selectedProduct.title}</h3>
                      <p className="mt-1 text-lg font-bold text-blue-500">${selectedProduct.price}</p>
                      <p className="mt-2 text-gray-700">{selectedProduct.description}</p>
                      {renderStars(selectedProduct.rate)}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
