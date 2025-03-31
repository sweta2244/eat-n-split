import React, { useState } from 'react'

export default function AddFriend({handleShowAddFriend,show,handleAddFriend}) {
  const[newFriend,setNewFriend]=useState({name:"",image:"https://i.pravatar.cc/48"});
  return (
    <div>
      {!show && <button onClick={handleShowAddFriend} className='btn-addfrnd'>Add friend</button>}
        {show && <form className="add-frnd-box" onSubmit={(e)=>{e.preventDefault();handleShowAddFriend();handleAddFriend(newFriend);}}>
            <div className='add-frnd-flex'>
              <div className='labels'>
                <p>👫 Friend name</p>
                <p>🌄 Image URL</p>
              </div>
              <div className='input box'>
                <input type='text' onChange={(e)=>setNewFriend((prev)=>({...prev,name:e.target.value}))}/><br/>
                <input type='text' value={newFriend.image}/><br/>
              </div>
            </div>
            <button type="submit" className='btn btnAdd'>Add</button><br/>
        <button onClick={handleShowAddFriend} className='btn close'>Close</button>
        </form>}
    </div>
  )
}
