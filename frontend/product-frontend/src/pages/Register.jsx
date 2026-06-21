import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/auth/signup",
        {
          name,
          email,
          password,
        }
      );

      alert("Registration Successful");
      navigate("/login");
    } catch (error) {
    console.log(error);
    console.log(error.response?.data);
    alert(error.response?.data?.message || error.message);
    }
    
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000",
        fontFamily: "Arial",
      }}
    >
      <div
        style={{
          width: "380px",
          padding: "35px",
          backgroundColor: "#000",
          border: "1px solid #222",
          borderRadius: "10px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "white",
            marginBottom: "25px",
          }}
        >
          Register
        </h2>

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "white" }}>
              Name
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                borderRadius: "6px",
              }}
            />
          </div>

          <div style={{ marginBottom: "15px" }}>
            <label style={{ color: "white" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                borderRadius: "6px",
              }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ color: "white" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "6px",
                borderRadius: "6px",
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "red",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
            }}
            onMouseOver={(e) =>
              (e.target.style.backgroundColor = "blue")
            }
            onMouseOut={(e) =>
              (e.target.style.backgroundColor = "red")
            }
          >
            Register
          </button>
        </form>

        <p
          style={{
            color: "white",
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          Already have an account?{" "}
          <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Register;