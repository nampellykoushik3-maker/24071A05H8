import { useLocation, Navigate } from 'react-router-dom';
import PaymentForm from '../components/PaymentForm';

const Payment = () => {
  const location = useLocation();
  const state = location.state;

  if (!state || !state.total) {
    // If user navigates directly to /payment without a booking, redirect them
    return <Navigate to="/rooms" />;
  }

  return (
    <div className="bg-hotel-light min-h-screen py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <PaymentForm total={state.total} />
      </div>
    </div>
  );
};

export default Payment;
