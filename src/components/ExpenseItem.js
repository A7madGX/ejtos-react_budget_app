import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'RED_EXPENSE',
            payload: expense,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
            <td>{props.name}</td>
            <td>{currency}{props.cost}</td>
            <td><button id='addbtn' onClick={event=> increaseAllocation(props.name)}><img id='addimg' alt='add' src={require('../images/add.png')}/></button></td>
            <td><button id='minusbtn' size='1.5em' onClick={event => decreaseAllocation(props.name)}><img id='minusimg' alt='reduce' src={require('../images/minus.png')}/></button></td>
        </tr>
    );
};

export default ExpenseItem;
