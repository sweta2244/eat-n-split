import { useState } from "react";
import "./App.css";
import PeopleList from "./Components/PeopleList";
import SplitBox from "./Components/SplitBox";
import AddFriend from "./Components/AddFriend";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];
  const [friends,setFriends]=useState(initialFriends);
  const [selection,setSelection]=useState(null);
  const [showAddFriend,setShowAddFriend]=useState(false);
  
  function handleShowAddFriend(){
    setShowAddFriend(!showAddFriend);
  }
  function handleSelection(data){
    setSelection(data);
  }
  function handleSubmission(payer,expense,frndexpense,idd,balance1){
    console.log("payer,expense,frndexpense,idd,balance",payer,expense,frndexpense,idd,balance1);
    if (payer==="you")
      {setFriends(friends.map((item)=>item.id===idd?{...item,balance:balance1-frndexpense}:item))}
    else
      {setFriends(friends.map((item)=>item.id===idd?{...item,balance:balance1+Number(expense)}:item))}
  }
  function handleAddFriend(data){
    setFriends((prev)=>[...prev,{id:crypto.randomUUID(),name:data.name,image:data.image,balance:0}])
  }
  console.log(friends);

  return (
   <div className="main-div">
     <div className="eat-split">
        <div>
          <PeopleList friends={friends} handleSelection={handleSelection} selection={selection}/>
          <AddFriend handleShowAddFriend={handleShowAddFriend} show={showAddFriend} handleAddFriend={handleAddFriend}/>
        </div>
        <div className="split-box">
          <SplitBox selection={selection} handleSubmission={handleSubmission}/>
        </div>
     </div>
   </div>
  );
}

export default App;
