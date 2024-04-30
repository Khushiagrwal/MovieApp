import React from 'react'
import {loadStripe} from '@stripe/stripe-js';


// const makePayment=async()=>{

//     const body={
//         price:"4000"
//     }
//     const headers = {
//         "Content-Type":"application/json"
//     }
//     const stripe = await loadStripe('pk_test_51P9W2LSBfqHF6tBnJUifP9lKruoLZvZYSPztcOBr2FyewWVSN6fTrGtHzbCQH2Bx4F0v3ljVtrHP0LMsyx2igvz900VfEcmaet');
    
//     const response = await fetch("http://localhost:8080/api/create-checkout-session",{
//       method:'post',
//       headers:headers,
//       body:JSON.stringify(body)
//     })
//     const session = await response.json();
//     const result = stripe.redirectToCheckout({
//         sessionId:session.id
//     })
//     if(result.error)
//     {
//         console.log(result.error)
//     }
// } 

function Payment() {
  return (
    <div>Payment</div>
  )
}

export default Payment