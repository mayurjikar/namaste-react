import { useEffect, useState } from "react";
const User = ({ name }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
     fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch("api/url");
    const json = data.json();
  }

  return (
    <div className="user-card">
      <h1>Count:- {count}</h1>
      <button onClick={() => setCount(count + 1)}>Count increase</button>
      <h2>Name:- {name}</h2>
      <h3>Location:- Nagpur</h3>
      <h4>Email:- mayurjikar@gmail.com</h4>
    </div>
  );
};

export default User;
