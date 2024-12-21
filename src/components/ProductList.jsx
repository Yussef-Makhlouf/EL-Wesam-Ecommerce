import { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@material-tailwind/react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { motion, AnimatePresence } from "framer-motion";

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
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, [currentPage, selectedCategory]);

  const fetchData = async () => {
    setLoading(true);
    setError(null);

    try {
      const categoryFilter = selectedCategory
        ? `&category=${selectedCategory}`
        : "";
      const { data: productsData } = await axios.get(
        `http://localhost:3000/api/v1/products/getallproducts?page=${currentPage}&limit=40${categoryFilter}`
      );
      setProducts(productsData.products);
      setTotalPages(productsData.pages);

      const { data: categoriesData } = await axios.get(
        "http://localhost:3000/api/v1/categories/getallcategories"
      );
      setCategories(categoriesData.categories);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError("Failed to fetch data from server.");
    } finally {
      setLoading(false);
    }
  };

  const filterProductsByCategory = (categoryName) => {
    setSelectedCategory(categoryName);
    setCurrentPage(1);
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

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item._id === product._id);
  
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    return (
      <div className="flex items-center mt-2">
        {Array(fullStars)
          .fill(0)
          .map((_, index) => (
            <span key={`full-${index}`} className="text-yellow-400">
              ★
            </span>
          ))}
        {halfStars > 0 && <span className="text-yellow-400">☆</span>}
        {Array(emptyStars)
          .fill(0)
          .map((_, index) => (
            <span key={`empty-${index}`} className="text-gray-300">
              ☆
            </span>
          ))}
      </div>
    );
  };

  const filteredList = products.filter(
    (product) =>
      product.title &&
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
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
          title="Previous"
          name="Previous"
        >
          <ChevronLeftIcon
            aria-hidden="true"
            className="h-5 w-5 sm:h-6 sm:w-6"
          />
        </button>
        {startPage > 1 && (
          <button
            onClick={() => setCurrentPage(1)}
            className="px-2 py-1 sm:px-4 sm:py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300"
            title="1"
            name="1"
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
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "text-gray-700 bg-white border border-gray-300"
              }`}
            >
              {page}
            </button>
          );
        })}
        {endPage < pages - 1 && (
          <span className="px-2 py-1 text-gray-500">...</span>
        )}
        {endPage < pages && (
          <button
            onClick={() => setCurrentPage(pages)}
            title="Last"
            name="Last"
            className="px-2 py-1 sm:px-4 sm:py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300"
          >
            {pages}
          </button>
        )}
        <button
          onClick={handleNextPage}
          disabled={currentPage === pages}
          className="px-3 py-2 text-gray-400 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50 disabled:opacity-50 sm:px-4"
          title="Next"
          name="Next"
        >
          <ChevronRightIcon
            aria-hidden="true"
            className="h-5 w-5 sm:h-6 sm:w-6"
          />
        </button>
      </nav>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Categories Header - Visible on all screens */}
      <div className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
              className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-xl transition-colors"
            >
              <motion.svg
                animate={{ rotate: isCategoriesOpen ? 180 : 0 }}
                className="w-6 h-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </motion.svg>
              <span className="font-medium text-gray-700">التصنيفات</span>
            </button>
          </div>
        </div>
      </div>

      {/* Categories Grid - Expandable on all screens */}
      <motion.div
        animate={{ height: isCategoriesOpen ? "auto" : 0 }}
        className="overflow-hidden bg-white/90 backdrop-blur-xl border-b border-gray-100"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            <motion.button
              onClick={() => filterProductsByCategory(null)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`p-4 rounded-xl text-center transition-all ${
                !selectedCategory
                  ? "bg-blue-500 text-white shadow-lg"
                  : "bg-gray-50 hover:bg-gray-100"
              }`}
            >
              <span className="block text-lg font-medium">كل المنتجات</span>
            </motion.button>

            {categories.map((category) => (
              <motion.button
                key={category.name}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => filterProductsByCategory(category.name)}
                className={`p-4 rounded-xl text-center transition-all ${
                  selectedCategory === category.name
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-50 hover:bg-gray-100"
                }`}
              >
                {category.icon && (
                  <img
                    src={category.icon}
                    alt=""
                    className="w-12 h-12 mx-auto mb-2 rounded-xl p-2 bg-white/90"
                  />
                )}
                <span className="block text-lg font-medium">
                  {category.name}
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Bar - Responsive */}
        <div className="sticky top-20 z-30 mb-8 max-w-3xl mx-auto">
          <Input
            value={searchTerm}
            onChange={handleSearch}
            placeholder="ابحث عن منتج..."
            className="w-full h-12 sm:h-14 px-6 bg-white/90 backdrop-blur-xl rounded-2xl"
          />
        </div>

        {/* Responsive Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredList.map((product, index) => (
            <motion.div
              key={product._id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-4 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="absolute bottom-4 right-4 left-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <button
                    onClick={() => handleProductClick(product)}
                    className="w-full bg-white/90 backdrop-blur-sm text-gray-900 py-2 rounded-xl hover:bg-white transition-colors"
                  >
                    عرض التفاصيل
                  </button>
                </div>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between items-start">
                  <div className="flex flex-col items-start">
                    <span className="text-lg font-bold text-blue-600">
                      {product.price} ر.س
                    </span>
                    <span className="text-sm text-gray-400 line-through">
                      {(product.price * 1.2).toFixed(2)} ر.س
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-800 line-clamp-2 hover:text-blue-600 transition-colors duration-300">
                    {product.title}
                  </h3>
                </div>

                <div className="flex justify-between items-center border-t border-gray-100 pt-3">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                  {renderStars(product.rate)}
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                  }}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 px-4 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3z" />
                  </svg>
                  إضافة للسلة
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Responsive Modal */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 p-4 bg-black/50 backdrop-blur-sm"
            >
              <div className="relative w-full max-w-2xl mx-auto mt-20">
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.9 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </button>
                  <div className="p-6">
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <h3 className="mt-4 text-xl font-bold text-gray-900">
                      {selectedProduct.title}
                    </h3>
                    <p className="mt-2 text-gray-600">
                      {selectedProduct.description}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <p className="text-2xl font-bold text-blue-600">
                        {selectedProduct.price} ر.س
                      </p>
                      {renderStars(selectedProduct.rate)}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Responsive Pagination */}
        <div className="mt-8 sm:mt-12">
          <div className="max-w-md mx-auto">{renderPagination()}</div>
        </div>
      </main>
    </div>
  );
}

