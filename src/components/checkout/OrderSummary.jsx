import { motion } from 'framer-motion';
import { ShoppingBagIcon, InformationCircleIcon } from '@heroicons/react/24/outline';
import { useCart } from '../CartContext';

export default function OrderSummary() {
  const { cartItems, total } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-3xl shadow-xl p-8 sticky top-8"
    >
      <h2 className="text-xl font-bold mb-6 flex items-center gap-2">
        <ShoppingBagIcon className="w-5 h-5 text-blue-600" />
        ملخص الطلب
      </h2>
      
      <div className="space-y-4 max-h-[400px] overflow-y-auto custom-scrollbar">
        {cartItems.map((item) => (
          <motion.div
            key={item._id}
            whileHover={{ scale: 1.02 }}
            className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-16 h-16 object-cover rounded-lg"
            />
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-sm truncate">{item.title}</h3>
              <p className="text-gray-500 text-sm">الكمية: {item.quantity}</p>
              <p className="text-blue-600 font-bold">{item.price * item.quantity} ر.س</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 space-y-4">
        <div className="border-t pt-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">المجموع الفرعي</span>
            <span>{total} ر.س</span>
          </div>
          <div className="flex justify-between text-sm mt-2">
            <span className="text-gray-600">الشحن</span>
            <span className="text-green-600">مجاني</span>
          </div>
          <div className="flex justify-between text-lg font-bold mt-4">
            <span>الإجمالي</span>
            <span className="text-blue-600">{total} ر.س</span>
          </div>
        </div>

        <div className="bg-blue-50 rounded-xl p-4">
          <div className="flex items-center gap-2 text-sm text-blue-700">
            <InformationCircleIcon className="w-5 h-5" />
            <p>الشحن مجاني للطلبات فوق 500 ر.س</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
