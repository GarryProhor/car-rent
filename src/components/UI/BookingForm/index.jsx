import React from 'react';
import {Form, FormGroup} from "reactstrap";
import './BookingForm.css';

const BookingForm = () => {
    const submitHandler = (event) => {
        event.preventDefault();
    };
    return (
        <Form onSubmit={submitHandler}>
            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="text" placeholder="Имя" />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="text" placeholder="Фамилия" />
            </FormGroup>

            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="number" placeholder="Номер телефона" />
            </FormGroup>

            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="text" placeholder="Адрес отправки" />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input type="text" placeholder="Адрес прибытия" />
            </FormGroup>

            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <select name="" id="">
                    <option value="1 person">1 Человек</option>
                    <option value="2 person">2 Человека</option>
                    <option value="3 person">3 Человека</option>
                    <option value="4 person">4 Человека</option>
                    <option value="5+ person">5+ Человек</option>
                </select>
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <select name="" id="">
                    <option value="1 luggage">1 багаж</option>
                    <option value="2 luggage">2 багаж</option>
                    <option value="3 luggage">3 багаж</option>
                    <option value="4 luggage">4 багаж</option>
                    <option value="5+ luggage">5+ багаж</option>
                </select>
            </FormGroup>

            <FormGroup className="booking__form d-inline-block me-4 mb-4">
                <input type="date" placeholder="Дата поездки" />
            </FormGroup>
            <FormGroup className="booking__form d-inline-block ms-1 mb-4">
                <input
                    type="time"
                    placeholder="Время путешествий"
                    className="time__picker"
                />
            </FormGroup>

            <FormGroup>
        <textarea
            rows={5}
            type="textarea"
            className="textarea"
            placeholder="Написать"
        ></textarea>
            </FormGroup>
        </Form>
    );
};

export default BookingForm;
