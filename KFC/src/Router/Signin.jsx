import React, { useState } from "react";
import img2 from './download.png'
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
          "Content-Type": "application/json"   // ✅ added
        },
        body: JSON.stringify(form)            // ✅ changed
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
    <div>
      <div>
        <img src={img1} alt="" width={200} height={75} style={{ marginRight: "300px" }} />
       <a href="/Addcard"> <img src={img2} alt="" width={50} hight={50} style={{marginLeft:"94%",marginTop:"-7%"}} /></a>

      </div>


      <div className="mh">
        <div style={{ textAlign: "center" }}>
          <h2>Sign In</h2>

          <form onSubmit={handleSubmit}>
            <input
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

            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;