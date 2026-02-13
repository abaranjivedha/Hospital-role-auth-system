import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";

function Register() {

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    role: "doctor"
  });

  const handleSubmit = async () => {

    // check empty fields
    if(!data.username || !data.email || !data.password){
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill all fields"
      });
      return;
    }

    try{
      await axios.post("http://127.0.0.1:8000/api/register/", data);

      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "User created successfully!"
      });

    }catch(error){
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Registration failed"
      });
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h3 className="auth-title">Create Account</h3>

        <input className="form-control mb-3" placeholder="Username"
          onChange={e => setData({...data, username:e.target.value})} />

        <input className="form-control mb-3" placeholder="Email"
          onChange={e => setData({...data, email:e.target.value})} />

        <input type="password" className="form-control mb-3" placeholder="Password"
          onChange={e => setData({...data, password:e.target.value})} />

        <select className="form-control mb-4"
          onChange={e => setData({...data, role:e.target.value})}>
          <option value="doctor">Doctor</option>
          <option value="nurse">Nurse</option>
          <option value="receptionist">Receptionist</option>
        </select>

        <button className="btn btn-auth" onClick={handleSubmit}>
          Register
        </button>
        <p className="text-center mt-3">
          Already have an account? <a href="/">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;
