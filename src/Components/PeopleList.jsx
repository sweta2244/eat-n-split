// import React, { useState } from "react";


export default function PeopleList({
  initialdata,
  select,
  handleSelect,
  isSelected
}) {
  // const [addFriend, setAddFriend] = useState([]);

  return (
    <div>
       {initialdata.map((data, index) => (
        <div key={index} style={{ display: "flex", gap: "100px" }}>
          <div style={{ display: "flex", gap: "20px" }}>
            <img src={data.image} alt="image" />
            <div>
              <p>{data.name}</p>
              {/* <p>{message}</p> */}
            </div>
          </div>
          <button
            onClick={() => {
              handleSelect(data);
            }}
          >
            {select.id===data.id && isSelected ? "Select" : "Close"}
          </button>
          {/* {handleSelect({})} */}
        </div>
      ))}
      <button>Add friend</button>
    </div>
  );
}

