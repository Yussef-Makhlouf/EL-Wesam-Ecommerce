import { useState } from 'react';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useCart } from './CartContext';
import NavBar from './NavBar';

export default function Checkout() {
  const { cartItems, total } = useCart();
  const [step, setStep] = useState(1);

  const validationSchema = Yup.object({
    fullName: Yup.string().required('الاسم مطلوب'),
    email: Yup.string().email('بريد إلكتروني غير صالح').required('البريد الإلكتروني مطلوب'),
    phone: Yup.string()
      .matches(/^(05)[0-9]{8}$/, 'رقم جوال غير صالح')
      .required('رقم الجوال مطلوب'),
    city: Yup.string().required('المدينة مطلوبة'),
    address: Yup.string().required('العنوان مطلوب'),
    paymentMethod: Yup.string().required('طريقة الدفع مطلوبة')
  });

  const formik = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      phone: '',
      city: '',
      address: '',
      paymentMethod: ''
    },
    validationSchema,
    onSubmit: (values) => {
      handleSubmitOrder(values);
    }
  });

  const handleSubmitOrder = async (values) => {
    // Implement order submission logic here
    console.log('Order submitted:', values);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
        <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Order Summary */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">ملخص الطلب</h2>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <motion.div
                  key={item._id}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{item.title}</h3>
                    <p className="text-gray-600">الكمية: {item.quantity}</p>
                    <p className="text-blue-600 font-bold">
                      {item.price * item.quantity} ر.س
                    </p>
                  </div>
                </motion.div>
              ))}
              <div className="border-t pt-4 mt-6">
                <div className="flex justify-between text-xl font-bold">
                  <span>المجموع</span>
                  <span>{total} ر.س</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">معلومات الطلب</h2>
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="الاسم الكامل"
                    {...formik.getFieldProps('fullName')}
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  {formik.touched.fullName && formik.errors.fullName && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.fullName}</p>
                  )}
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input
                    type="email"
                    name="email"
                    placeholder="البريد الإلكتروني"
                    {...formik.getFieldProps('email')}
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.email}</p>
                  )}
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="رقم الجوال"
                    {...formik.getFieldProps('phone')}
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                  {formik.touched.phone && formik.errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.phone}</p>
                  )}
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <select
                    name="city"
                    {...formik.getFieldProps('city')}
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 transition-all"
                  >
                    <option value="">اختر المدينة</option>
                    <option value="الطائف">الطائف</option>
                    <option value="مكة">مكة</option>
                    <option value="جدة">جدة</option>
                  </select>
                  {formik.touched.city && formik.errors.city && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.city}</p>
                  )}
                </motion.div>

                <motion.div whileFocus={{ scale: 1.01 }}>
                  <textarea
                    name="address"
                    placeholder="العنوان التفصيلي"
                    {...formik.getFieldProps('address')}
                    className="w-full px-4 py-3 rounded-xl border focus:ring-2 focus:ring-blue-500 transition-all"
                    rows="3"
                  />
                  {formik.touched.address && formik.errors.address && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.address}</p>
                  )}
                </motion.div>

                <div className="space-y-2">
                  <p className="font-semibold">طريقة الدفع</p>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash"
                        {...formik.getFieldProps('paymentMethod')}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>الدفع عند الاستلام</span>
                    </label>
                    <label className="flex items-center gap-2 p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        {...formik.getFieldProps('paymentMethod')}
                        className="w-4 h-4 text-blue-600"
                      />
                      <span>تحويل بنكي</span>
                    </label>
                  </div>
                  {formik.touched.paymentMethod && formik.errors.paymentMethod && (
                    <p className="text-red-500 text-sm mt-1">{formik.errors.paymentMethod}</p>
                  )}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
              >
                تأكيد الطلب
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* End of Checkout */}
    </div>
  );
}
