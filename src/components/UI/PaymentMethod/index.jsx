import React from 'react';
import masterCard from '../../../assets/all-images/master-card.jpg';
import paypal from '../../../assets/all-images/paypal.jpg';
import './PaymentMethod.css';

const PaymentMethod = () => {
    return (
        <>
            <div className="payment">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Прямой банковский перевод
                </label>
            </div>

            <div className="payment mt-3">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Оплата чеком
                </label>
            </div>

            <div className="payment mt-3 d-flex align-items-center justify-content-between">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Master Card
                </label>

                <img src={masterCard} alt="" />
            </div>

            <div className="payment mt-3 d-flex align-items-center justify-content-between">
                <label htmlFor="" className="d-flex align-items-center gap-2">
                    <input type="radio" /> Paypal
                </label>

                <img src={paypal} alt="" />
            </div>
            <div className="payment text-end mt-5">
                <button>Забронировать сейчас</button>
            </div>
        </>
    );
};

export default PaymentMethod;