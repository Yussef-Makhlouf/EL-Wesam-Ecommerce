// import { useState } from 'react';

// const products = [
//   {
//     id: 1,
//     name: 'Basic Tee 6-Pack',
//     price: '$100',
//     imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/category-page-04-image-card-01.jpg',
//     imageAlt: 'Set of comfortable basic tees in multiple colors.',
//     description: `The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.`,
//     highlights: [
//       'Hand cut and sewn locally',
//       'Dyed with our proprietary colors',
//       'Pre-washed & pre-shrunk',
//       'Ultra-soft 100% cotton',
//     ],
//     details: `The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.`,
//     rating: 4.5,
//   },
//   // More products...
// ];

// export default function ProductList() {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleProductClick = (product) => {
//     setSelectedProduct(product);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//   };

//   const renderStars = (rating) => {
//     const fullStars = Math.floor(rating);
//     const halfStars = rating % 1 ? 1 : 0;
//     const emptyStars = 5 - fullStars - halfStars;

//     return (
//       <div className="flex items-center mt-2">
//         {Array(fullStars)
//           .fill(0)
//           .map((_, index) => (
//             <span key={`full-${index}`} className="text-yellow-400">★</span>
//           ))}
//         {halfStars > 0 && <span className="text-yellow-400">☆</span>}
//         {Array(emptyStars)
//           .fill(0)
//           .map((_, index) => (
//             <span key={`empty-${index}`} className="text-gray-300">☆</span>
//           ))}
//       </div>
//     );
//   };

//   return (
//     <div className="bg-white">
//       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
//         <h2 className="sr-only">Products</h2>

//         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
//           {products.map((product) => (
//             <div
//               key={product.id}
//               onClick={() => handleProductClick(product)}
//               className="group cursor-pointer"
//             >
//               <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
//                 <img
//                   alt={product.imageAlt}
//                   src={product.imageSrc}
//                   className="h-full w-full object-cover object-center group-hover:opacity-75"
//                 />
//               </div>
//               <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
//               <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
//               {renderStars(product.rating)}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for Product Details */}
//       {selectedProduct && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-4xl sm:w-full">
//             <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
//               <div className="col-span-1">
//                 <img
//                   src={selectedProduct.imageSrc}
//                   alt={selectedProduct.imageAlt}
//                   className="w-full h-auto object-cover rounded"
//                 />
//               </div>
//               <div className="col-span-1">
//                 <div className="flex justify-between items-center">
//                   <h3 className="text-2xl font-medium text-gray-900">{selectedProduct.name}</h3>
//                   <button
//                     onClick={closeModal}
//                     className="text-gray-500 hover:text-gray-700"
//                   >
//                     &times;
//                   </button>
//                 </div>
//                 <p className="mt-4 text-sm text-gray-700">{selectedProduct.description}</p>
//                 <div className="mt-6 grid grid-cols-1 gap-y-4">
//                   <div>
//                     <h4 className="font-medium text-gray-900">Highlights</h4>
//                     <ul className="list-disc list-inside mt-2 text-sm text-gray-700 grid grid-cols-2 gap-x-4">
//                       {selectedProduct.highlights.map((highlight, index) => (
//                         <li key={index}>{highlight}</li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div>
//                     <h4 className="font-medium text-gray-900">Details</h4>
//                     <p className="mt-2 text-sm text-gray-700">{selectedProduct.details}</p>
//                   </div>
//                 </div>
//                 <p className="mt-6 text-lg font-medium text-gray-900">{selectedProduct.price}</p>
//                 {renderStars(selectedProduct.rating)}
//               </div>
//             </div>
//             <div className="px-6 py-4 bg-gray-50 text-right">
//               <button
//                 onClick={closeModal}
//                 className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Input } from "@material-tailwind/react";  // Importing Material Tailwind's Input component

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch products from the API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/v1/products/getallproducts');
        setProducts(response.data.products);
        setFilteredProducts(response.data.products); // Display all products initially
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Update search term and apply filtering
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredProducts(products); // Reset to all products if no search term
    } else {
      // Client-side filtering as fallback
      const filtered = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [searchTerm, products]);

  const handleSearch = (event) => setSearchTerm(event.target.value);

  // Modal open/close handlers
  const handleProductClick = (product) => setSelectedProduct(product);
  const closeModal = () => setSelectedProduct(null);

  // Render stars for rating display
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

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        {/* Search Bar */}
        <div className="mb-6">
          <Input
            label="Search Products"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search by product name or category"
            className="w-full"
          />
        </div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div
              key={product._id}
              onClick={() => handleProductClick(product)}
              className="group cursor-pointer"
            >
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
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
      </div>
      {/* Modal for Product Details */}
      {selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all sm:max-w-4xl sm:w-full">
            <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
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
                  <button
                    onClick={closeModal}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    &times;
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-700">{selectedProduct.description}</p>
                <div className="mt-6">
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
            <div className="px-6 py-4 bg-gray-50 text-right">
              <button
                onClick={closeModal}
                className="inline-flex justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
