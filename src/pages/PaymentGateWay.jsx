import React from 'react'

const PaymentGateWay = () => {
    const options = {
        key: "rzp_test_6IjRFAh4CERhl0",
        amount: '25000',
        currency: "INR",
        name: "OCMS",
        description: "Payment for slot booking",
        image: "/src/assets/PlugNGo-logos_white.png",
        order_id: '',
        // callback_url: "http://localhost:8080/api/paymentverification",
        prefill: {
            name: sessionStorage.getItem("firstName") + sessionStorage.getItem("lastName"),
            email: sessionStorage.getItem("username"),
            contact: "9999999999"
        },
        notes: {
            "address": "Razorpay Corporate Office"
        },
        theme: {
            "color": "#121212"
        }
    };
  return (
    <div>PaymentGateWay</div>
  )
}

export default PaymentGateWay