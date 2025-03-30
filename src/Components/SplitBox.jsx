import React, { useState } from 'react';
import "./SplitBox.css";

export default function SplitBox({isSelected,selectedInfo}) {
  const [bill,setBill]=useState(0);
  const [expense,setExpense]=useState(0);
 const frexpense=bill-expense;

  function handleBill(i){
    setBill(i);
  }
  function handleExpense(j){
    setExpense(j);
  }
  function handleSubmit(){
    
  }
  return (
    <>
        {console.log(selectedInfo)}
        {isSelected && (<div className="form">
            <form onSubmit={handleSubmit}>
                <h2>SPLIT A BILL WITH {selectedInfo.name}</h2>
                <div>
                    <label>💰 Bill value</label>
                    <input type='number' onChange={(e)=>{handleBill(e.target.value)}}/>
                </div>
                <div>
                    <label>🧍‍♀️ Your expense</label>
                    <input type='number' onChange={(e)=>{handleExpense(e.target.value)}}/>
                </div>
                <div>
                    <label>👫 {selectedInfo.name}'s expense</label>
                    <input type='number' defaultValue={frexpense}/>
                </div>
                <div>
                    <label>🤑 Who is paying the bill</label>
                    <select>
                        <option>You</option>
                        <option>{selectedInfo.name}</option>
                    </select>
                </div>
                <button type='submit'>Split bill</button>
            </form>
        </div>)}
    </>
  )
}
