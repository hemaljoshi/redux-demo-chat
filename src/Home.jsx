import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, fetchUsers } from "./store/actions";

const Home = () => {
    const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(addUser(email, true));
    setEmail("");
  };
    
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <input placeholder="email" value={email} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <div>
        {users?.map((user, index) => (
          <li key={index}>{user.email}</li>
        ))}
      </div>
    </div>
  );
};

export default Home;
