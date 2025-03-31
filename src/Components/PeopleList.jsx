
export default function PeopleList({
 friends,
 handleSelection,
 selection
}) {

function handleMessage(data){
  if (data.balance>0)
    return `you owe ${data.balance}`
  else if(data.balance<0)
    return `${data.name} owes ${Math.abs(data.balance)}`
  else
    return "even"
}

  return (
    <div>
       {friends.map((data) => (
        <div key={data.id} className="main-individual-friend">
          <div className="individual-friend">
            <img src={data.image} alt="image" />
            <div className="friend-description">
              <p style={{fontWeight:"1000"}}>{data.name}</p>
              <p>{handleMessage(data)}</p>
            </div>
          </div>
          <button className="btn"
          onClick={()=>{selection?.id===data.id?handleSelection(null):handleSelection(data);}}
          >
          {data.id===selection?.id?"Close":"Select"}
          {console.log(selection?.id)}
          </button>
        </div>
      ))}
    </div>
  );
}
