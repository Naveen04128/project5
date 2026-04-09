import React, { useState } from "react";
// import "./sign.css"
import img1 from './Subway.jpg';


function SignIn() {

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"   
        },
        body: JSON.stringify(form)            
      });

      const data = await response.json();

      if (response.ok) {
        alert("Login successful");
        console.log(data);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    

    <div  >
    <div  >
      


      <div className="mh" >
        <div style={{ textAlign: "center" }}>
          <h2 style={{color:"black"}}>Sign In</h2>


          <form onSubmit={handleSubmit}>
            <input className="oo"
              type="email"
              name="email"
              placeholder="Enter email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <br /><br />

            <input 
              type="password"
              name="password"
              placeholder="Enter password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <br /><br />

            <button className="qq" type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default SignIn;