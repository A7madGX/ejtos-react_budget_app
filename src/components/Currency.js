import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const [currencytext, setText] = useState('£ Pound');

    const handleCurrency = (cur) => {
        switch (cur) {
            case '$ Dollar':
                setText(cur);
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: '$'
                })
                break;
            case '£ Pound':
                setText(cur);
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: '£'
                })
                break;
            case '€ Euro':
                setText(cur);
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: '€'
                })
                break;
            case '₹ Ruppee':
                setText(cur);
                dispatch({
                    type: 'CHG_CURRENCY',
                    payload: '₹'
                })
                break;
        
            default:
                break;
        }
    }


    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
            Currency &#40;{currencytext}&#41;
            </Dropdown.Toggle>
    
            <Dropdown.Menu className='currency-item'>
            <Dropdown.Item onClick={(e) => handleCurrency('$ Dollar')}>$ Dollar</Dropdown.Item>
            <Dropdown.Item onClick={(e) => handleCurrency('£ Pound')}>£ Pound</Dropdown.Item>
            <Dropdown.Item onClick={(e) => handleCurrency('€ Euro')}>€ Euro</Dropdown.Item>
            <Dropdown.Item onClick={(e) => handleCurrency('₹ Ruppee')}>₹ Ruppee</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Currency;