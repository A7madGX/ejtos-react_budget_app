import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
//Code to import Budget.js
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';

// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import Currency from './components/Currency';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        <div className='col-sm'>
                            <Budget />
                        </div>  

                        <div className='col-sm'>
                            <Remaining />
                        </div>     

                        <div className='col-sm'>
                            <ExpenseTotal />
                        </div>

                        <div className='col-sm'>
                            <Currency />
                        </div>
                       
                        <div>
                            <ExpenseList />
                        </div>
                            
                        <div>
                            <AllocationForm />
                        </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
