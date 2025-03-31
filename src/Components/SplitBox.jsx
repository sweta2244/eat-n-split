import React, {useState } from 'react';

export default function SplitBox({selection,handleSubmission}) {
 const [bill,setBill]=useState(0);
 const [expense,setExpense]=useState(0);
 const [payer,setPayer]=useState("you");
 
 if (selection===null) return;
  return (
    <div className="form">
      <form onSubmit={(e)=>{e.preventDefault();handleSubmission(payer,expense,bill-expense,selection?.id,selection?.balance);}}>
        <h2>SPLIT A BILL WITH {selection?.name}</h2>
        <div className='split-bill-flex'>
          <div className='labels'>
            <p>💰 Bill value </p>
            <p>🧍‍♀️ Your expense </p>
            <p> 👫{selection?.name}'s expense</p>
            <p>🤑 Who is paying the bill </p>
          </div>
          <div className='input'>
            <input type='number' onChange={(e)=>setBill(e.target.value)}/><br/>
            <input type='number' onChange={(e)=>setExpense(e.target.value)}/><br/>
            <input type='number' value={bill-expense}/><br/>
            <select onChange={(e)=>setPayer(e.target.value)}>
              <option value="you">You</option>
              <option value={selection?.name}>{selection?.name}</option>
            </select>
          </div>
        </div>
        <input type="submit" value="Split bill" className='split-bill-btn'/>
      </form>
    </div>
  )
}
