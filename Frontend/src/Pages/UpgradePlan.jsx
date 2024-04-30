
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';

function UpgradePlan() {
    const price = [4000, 500, 199, 69];
    const [amount, setAmount] = useState(4000);
    const currentDate = new Date();
    const navigate = useNavigate();
    const currentMonth = currentDate.getMonth() + 1; // Month is zero-indexed, so we add 1
    const currentYear = currentDate.getFullYear();
    const currentDateOfMonth = currentDate.getDate();

    const handleClick = () => {
        // navigate('/pay');
        makePayment();
    };

    const makePayment = async () => {
        const stripe = await loadStripe('pk_test_51P9W2LSBfqHF6tBnJUifP9lKruoLZvZYSPztcOBr2FyewWVSN6fTrGtHzbCQH2Bx4F0v3ljVtrHP0LMsyx2igvz900VfEcmaet');
        const body = {
            amount: amount 
        };

        const headers = {
            "Content-Type": "application/json"
        };

        try {
            const response = await fetch("http://localhost:8080/api/create-checkout-session", {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(body)
            });

            const session = await response.json();
            const result = stripe.redirectToCheckout({
                sessionId: session.id
            });

            if (result.error) {
                console.log(result.error);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Choose your plan</h2>
            <div>
                <form>
                    <input type="radio" id="option1" name="options" value={price[0]} onChange={(e) => { setAmount(e.target.value) }} />
                    <label htmlFor="option1">12 Month</label>
                    <div>Rs. {price[0]}</div><br />

                    <input type="radio" id="option2" name="options" value={price[1]} onChange={(e) => { setAmount(e.target.value) }} />
                    <label htmlFor="option2">1 Month</label>
                    <div>Rs. {price[1]}</div><br />

                    <input type="radio" id="option3" name="options" value={price[2]} onChange={(e) => { setAmount(e.target.value) }} />
                    <label htmlFor="option3">1 week</label>
                    <div>Rs. {price[2]}</div><br />

                    <input type="radio" id="option4" name='options' value={price[3]} onChange={(e) => { setAmount(e.target.value) }} />
                    <label htmlFor="option4">1 Day</label>
                    <div>Rs. {price[3]}</div><br />
                    <hr />
                    <div>
                        <p>Ends on {currentDateOfMonth} {currentMonth} {currentYear}</p>
                        <p></p>
                    </div>

                </form>
                <button onClick={handleClick}>Next</button>
            </div>
        </div>
    )
}

export default UpgradePlan;
