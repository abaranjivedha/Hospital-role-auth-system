import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Swal from "sweetalert2";

function Login() {

  const navigate = useNavigate();

  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const loginUser = async () => {

  if(!data.username || !data.password){
    Swal.fire({
      icon: "warning",
      title: "Missing Fields",
      text: "Please enter username and password"
    });
    return;
  }

  try {
    const res = await axios.post("http://127.0.0.1:8000/api/login/", data);

    // ❗ if backend sends error
    if(res.data.error){
      Swal.fire({
        icon: "error",
        title: "Invalid Login",
        text: res.data.error
      });
      return;
    }

    // ✅ success case
    Swal.fire({
      icon: "success",
      title: "Login Successful",
      text: "Welcome back!"
    });

    localStorage.setItem("username", data.username);
    localStorage.setItem("role", res.data.role);

    setTimeout(() => {
      if(res.data.role === "doctor") navigate("/doctor");
      if(res.data.role === "nurse") navigate("/nurse");
      if(res.data.role === "receptionist") navigate("/reception");
    }, 1000);

  } catch(error) {

    Swal.fire({
      icon: "error",
      title: "Invalid Login",
      text: "Check your username and password"
    });

  }
};

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h3 className="auth-title">Hospital Login</h3>

        <input className="form-control mb-3" placeholder="Username"
          onChange={e => setData({...data, username:e.target.value})} />

        <input type="password" className="form-control mb-4" placeholder="Password"
          onChange={e => setData({...data, password:e.target.value})} />

        <button className="btn btn-auth" onClick={loginUser}>
          Login
        </button>
        <p className="text-center mt-3">
          Don't have an account? <a href="/register">Register</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
