// src/components/Payment.js
import React, { useState } from 'react';
import axios from 'axios';

const Payment = ({ orderId, userId, userName, userEmail }) => {
    const [paymentId, setPaymentId] = useState('');

    const handlePayment = async () => {
        try {
            const response = await axios.post('/api/verify-payment', { razorpay_payment_id: paymentId, razorpay_order_id: orderId, userId });
            console.log('Payment verification response:', response.data);
            // Redirect or show success message after successful payment
        } catch (error) {
            console.error('Payment verification error:', error);
            // Handle error display or logging
        }
    };

    return (
        <div>
            <h2>Complete Payment</h2>
            <p>Hello {userName}, please enter your payment ID:</p>
            <input type="text" placeholder="Payment ID" value={paymentId} onChange={(e) => setPaymentId(e.target.value)} required />
            <button onClick={handlePayment}>Verify Payment</button>
        </div>
    );
};

export default Payment;
