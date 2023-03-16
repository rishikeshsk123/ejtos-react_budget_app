import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = ()=>{
    const {budget, expenses, dispatch} = useContext(AppContext);
    
    const updateBudget = (val)=>{
        const totalExpenses = expenses.reduce((total, item)=>{
            return (total += item.cost)
        },0);

        if(val<totalExpenses){
            alert("You cannot reduce the budget that is already allocated!")
        } else {
            dispatch({
                type: "SET_BUDGET",
                payload: val
            })
        }
    }

    return(
        <div className="alert alert-secondary">
            <span>Budget:</span>
            <input 
                type="number"
                step='10'
                value={budget}
                onInput={(e)=>updateBudget(e.target.value)}
                max='20000'
            />
        </div>
    )
}

export default Budget;
