import { useState } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useCart } from './CartContext';

export default function ProductCard({ product }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { addToCart } = useCart();

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('ar-SA', {
      style: 'currency',
      currency: 'SAR'
    }).format(price);
  };

  return (
    <div className="group relative">
      <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
        {!imageLoaded && (
          <div className="animate-pulse w-full h-full bg-gray-200" />
        )}
        <img
          src={imageError ? '/placeholder-image.jpg' : product.image}
          alt={product.title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          } group-hover:scale-110`}
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
          loading="lazy"
        />
      </div>
      
      <div className="mt-4 space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{product.title}</h3>
        <p className="text-2xl font-bold text-blue-600" dir="rtl">
          {formatPrice(product.price)}
        </p>
      </div>

      <button
        onClick={() => {
          addToCart(product);
          // Add a nice toast notification
          toast.success('تمت إضافة المنتج إلى السلة');
        }}
        className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
        </svg>
        إضافة للسلة
      </button>
    </div>
  );
}
ProductCard.propTypes = {
  product: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired,
  onProductClick: PropTypes.func.isRequired
};
