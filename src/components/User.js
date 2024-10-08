import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);

  // async function getUserInfo () {
  //     const data = await
  // }

  return (
    <div className="user-card m-4 p-4 bg-gray-50 rounded-lg">
      <h1>Name : {props.name}</h1>
      <h2>Location : {props.location}</h2>
      <h3>Contact : @me.nirdosh</h3>
    </div>
  );
};

export default User;
