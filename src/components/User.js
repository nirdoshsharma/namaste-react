import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase Count
      </button>
      <h1>Name : {props.name}</h1>
      <h2>Location : {props.location}</h2>
      <h3>Contact : @me.nirdosh</h3>
    </div>
  );
};

export default User;
