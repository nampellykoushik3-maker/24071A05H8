import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Calendar as CalendarIcon, Lock, CheckCircle } from 'lucide-react';

const PaymentForm = ({ total }) => {
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setIsSuccess(true);
      setTimeout(() => {
        navigate('/home');
      }, 3000);
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-12 rounded-2xl shadow-xl text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-20 w-20 text-green-500 animate-bounce" />
        </div>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Payment Successful!</h2>
        <p className="text-gray-600 mb-8">Your booking has been confirmed. Redirecting to home...</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
      <h2 className="text-3xl font-bold text-hotel-dark mb-2">Payment Details</h2>
      <p className="text-gray-500 mb-8">Complete your booking by providing your payment details.</p>

      <div className="mb-8 p-4 bg-hotel-light rounded-xl border border-gray-200 flex justify-between items-center">
        <span className="text-gray-600 font-medium">Total Amount To Pay:</span>
        <span className="text-2xl font-bold text-hotel-dark">${total || 0}</span>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Cardholder Name</label>
          <input
            required
            type="text"
            name="cardName"
            value={formData.cardName}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-hotel-gold focus:border-transparent transition-all outline-none"
            placeholder="Name on card"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-semibold text-gray-700">Card Number</label>
          <div className="relative">
            <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              required
              type="text"
              maxLength="16"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-hotel-gold focus:border-transparent transition-all outline-none tracking-widest"
              placeholder="XXXX XXXX XXXX XXXX"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">Expiry Date</label>
            <div className="relative">
              <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                required
                type="text"
                name="expiry"
                placeholder="MM/YY"
                maxLength="5"
                value={formData.expiry}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-hotel-gold focus:border-transparent transition-all outline-none"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-gray-700">CVV</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                required
                type="password"
                maxLength="4"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-hotel-gold focus:border-transparent transition-all outline-none tracking-widest"
                placeholder="•••"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-8 bg-hotel-gold text-hotel-dark hover:bg-yellow-500 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 shadow-lg"
      >
        Pay Now
      </button>
    </form>
  );
};

export default PaymentForm;
