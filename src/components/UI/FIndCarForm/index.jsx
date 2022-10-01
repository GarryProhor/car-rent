import React from 'react';
import './FindCarForm.css'
import {Form, FormGroup} from "reactstrap";

const FindCarForm = () => {
    return (
        <Form className='form'>
            <div className='d-flex align-items-center justify-content-between flex-wrap'>
                <FormGroup className='form__group'>
                    <input type='text' placeholder='Адрес' required/>
                </FormGroup>
                <FormGroup className='form__group'>
                    <input type='text' placeholder='Адрес' required/>
                </FormGroup>
                <FormGroup className='form__group'>
                    <input className='journey__date' type='date' placeholder='Дата'  required/>
                </FormGroup>
                <FormGroup className='form__group'>
                    <input className='journey__time' type='time' placeholder='Время' required/>
                </FormGroup>
                <FormGroup className='select__group'>
                    <select>
                        <option value='ac'>Электромобиль</option>
                        <option value='non-ac'>Автомобиль ДВС</option>
                    </select>
                </FormGroup>
                <FormGroup className='form__group'>
                    <button className='find__car-btn'>Найти</button>
                </FormGroup>
            </div>
        </Form>
    );
};

export default FindCarForm;
