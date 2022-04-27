import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);

  const handleDelete = (_id) => {
    const proceed = window.confirm("Are you sure delete the data?");
    if (proceed) {
      console.log("deleting ", _id);

      const url = `http://localhost:5000/user/${_id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const remining = users.filter((user) => user._id !== _id);
            setUsers(remining);
          }
          console.log(data);
        });
    }
  };
  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h1>Available Users:{users.length}</h1>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name}:: {user.email}
            <Link to={`/update/${user._id}`}><button>Update</button></Link>
            <button onClick={() => handleDelete(user._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
