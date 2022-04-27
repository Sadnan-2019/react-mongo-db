import React from "react";

const AddUser = () => {
  const handleAddUser = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;

    const NewUser = { name, email };
    fetch("http://localhost:5000/user", {
      method: "POST",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(NewUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("success", data);
        alert("user added sucessfull")
        event.target.reset();

      });
  };
  return (
    <div>
      <h2>Please add new user</h2>

      <form onSubmit={handleAddUser}>
        <input name="name" type="text" placeholder="Name" required /> <br />
        <input name="email" type="email" placeholder="Email" required />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </div>
  );
};

export default AddUser;
