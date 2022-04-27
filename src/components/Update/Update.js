import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
          const {id} = useParams();
          const [user,setUser] = useState({});
          useEffect( () =>{

                    const url =`http://localhost:5000/user/${id}`;
                    fetch(url)
                    .then(res => res.json())
                    .then(data => setUser(data))
          },[])

          const handleUpdateUser = (event) => {
                    event.preventDefault();
                    const name = event.target.name.value;
                    const email = event.target.email.value;
                
                    const UpdateUser = { name, email };
                    const url =`http://localhost:5000/user/${id}`;
                    fetch(url, {
                      method: "PUT",
                
                      headers: {
                        "content-type": "application/json",
                      },
                      body: JSON.stringify(UpdateUser),
                    })
                      .then((res) => res.json())
                      .then((data) => {
                        console.log("success", data);
                        alert("user updated sucessfull")
                        event.target.reset();
                
                      });
                  };
          return (
                    <div>
                           <h3>Updated Data:{user.name}</h3>   

                           <form onSubmit={handleUpdateUser}>
        <input name="name" type="text" placeholder="Name" required /> <br />
        <input name="email" type="email" placeholder="Email" required />
        <br />
        <input type="submit" value="Update user" />
      </form>
                    </div>
          );
};

export default Update;