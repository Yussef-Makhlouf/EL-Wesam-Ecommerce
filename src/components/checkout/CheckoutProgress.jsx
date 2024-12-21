import { motion } from 'framer-motion';
import { ShoppingBagIcon, CreditCardIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import PropTypes from 'prop-types';

const steps = [
  { id: 1, title: 'معلومات الشحن', icon: ShoppingBagIcon },
  { id: 2, title: 'طريقة الدفع', icon: CreditCardIcon },
  { id: 3, title: 'تأكيد الطلب', icon: CheckCircleIcon }
];

export default function CheckoutProgress({ currentStep }) {
  return (
    <div className="relative">
      <div className="flex justify-between">
        {steps.map((step) => (
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex flex-col items-center relative z-10 ${
              currentStep >= step.id ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
              currentStep >= step.id ? 'bg-blue-100' : 'bg-gray-100'
            }`}>
              <step.icon className="w-6 h-6" />
            </div>
            <span className="mt-2 text-sm font-medium">{step.title}</span>
          </motion.div>
        ))}
      </div>
      
      <div className="absolute top-6 left-0 right-0 h-0.5 bg-gray-200">
        <motion.div
          className="h-full bg-blue-600"
          initial={{ width: '0%' }}
          animate={{ width: `${((currentStep - 1) / 2) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
}

CheckoutProgress.propTypes = {
  currentStep: PropTypes.number.isRequired,
};
