import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';

function CurrencyList() {
    const {dispatch, currency} = useContext(AppContext);

    const changeCurrency = (val) =>{
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        })
    }
  return (
    <div className='alert alert-secondary'>  
    <span>
      <select 
        className='btn btn-success dropdown-toggle'
        id='currency'
        onChange={(event) =>changeCurrency(event.target.value)}>Currency ({currency})
          <option defaultValue={currency}>Currency ({currency})</option>
          <option value='£'>£ Pound</option>
          <option value='$'>$ Dollar</option>
          <option value='€'>€ Euro</option>
          <option value='₹'>₹ Rupee</option>
      </select>
      </span>
    </div>
  )
}

export default CurrencyList;