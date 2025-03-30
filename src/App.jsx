import { useState } from "react";
import "./App.css";
import PeopleList from "./Components/PeopleList";
import SplitBox from "./Components/SplitBox";

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
  const [select, setSelect] = useState({});
  const [isSelected, setIsSelected] = useState(true);

  function handleSelect(data) {
    setSelect(data);
    setIsSelected(!isSelected);
  }

  return (
    <div style={{ display: "flex", gap: "30px" }}>
      <PeopleList
        initialdata={initialFriends}
        select={select}
        handleSelect={handleSelect}
        isSelected={isSelected}
      />
      <SplitBox  />
    </div>
  );
}

export default App;
