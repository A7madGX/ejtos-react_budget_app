
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,totalExpenses,dispatch,currency } = useContext(AppContext);

    const handleBudget = (value) => {
        dispatch({
            type: 'SET_BUDGET',
            payload: value
        })
        if (value > 20000) {
            alert('Exceeded Maximum Value');
        }
        if (value < totalExpenses) {
            alert('Budget cannot be less than spent')
        } 
    }

    return (
        <div className='alert alert-secondary'>
            <label>Budget: {currency}</label>
            <input type='number' step={10} value={budget} onChange={e => handleBudget(e.target.value)}/>
        </div>
    );
};
export default Budget;