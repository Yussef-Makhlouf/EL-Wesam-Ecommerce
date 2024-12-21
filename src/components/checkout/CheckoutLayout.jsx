import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CheckoutProgress from './CheckoutProgress';
import OrderSuccess from './OrderSuccess';
import CheckoutForm from './CheckoutForm';
import OrderSummary from './OrderSummary';
import { FooterWithPaymentLogosAndSocialMedia } from '../Footer';

export default function CheckoutLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [formData, setFormData] = useState({});
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    const steps = {
      '/checkout': 1,
      '/checkout/payment': 2,
      '/checkout/confirm': 3,
      '/checkout/success': 4
    };
    setCurrentStep(steps[location.pathname] || 1);
  }, [location]);

  const handleNextStep = (stepData) => {
    setFormData(prev => ({ ...prev, ...stepData }));
    
    const nextRoutes = {
      1: '/checkout/payment',
      2: '/checkout/confirm',
      3: '/checkout/success'
    };
    
    navigate(nextRoutes[currentStep]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {currentStep < 4 && <CheckoutProgress currentStep={currentStep} />}
        
        {currentStep === 4 ? (
          <OrderSuccess />
        ) : (
          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              {currentStep === 3 ? (
                <OrderSuccess formData={formData} onNextStep={handleNextStep} />
              ) : (
                <CheckoutForm 
                  currentStep={currentStep} 
                  onNextStep={handleNextStep}
                />
              )}
            </div>
            
            <div className="lg:col-span-4">
              <OrderSummary />
            </div>
          </div>
        )}
      </div>
      <FooterWithPaymentLogosAndSocialMedia />
    </div>
  );
}