import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircleIcon, TruckIcon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const successSteps = [
  {
    id: 1,
    title: "تم استلام طلبك بنجاح",
    description: "سيتم مراجعة طلبك والتواصل معك قريبا",
    icon: CheckCircleIcon,
  },
  {
    id: 2,
    title: "جاري تجهيز طلبك",
    description: "نقوم بتجهيز منتجاتك بعناية",
    icon: ShoppingBagIcon,
  },
  {
    id: 3,
    title: "في الطريق إليك",
    description: "سيصلك طلبك خلال 2-3 أيام عمل",
    icon: TruckIcon,
  }
];

export default function OrderSuccess({ orderId }) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl mx-auto py-16 px-4"
    >
      <div className="text-center mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center"
        >
          <CheckCircleIcon className="w-12 h-12 text-green-600" />
        </motion.div>
        <h2 className="mt-6 text-3xl font-bold text-gray-900">تم تأكيد طلبك بنجاح!</h2>
        <p className="mt-2 text-gray-600">رقم الطلب: {orderId}</p>
      </div>

      <div className="space-y-8">
        {successSteps.map((step, index) => (
          <motion.div
            key={step.id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: index * 0.2 }}
            className="flex items-center gap-4 bg-white p-6 rounded-2xl shadow-sm"
          >
            <div className="flex-shrink-0">
              <step.icon className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
        >
          <span>العودة للتسوق</span>
          <svg className="w-5 h-5 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

OrderSuccess.propTypes = {
  orderId: PropTypes.string.isRequired,
};
