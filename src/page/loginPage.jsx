import React, { useState } from "react";
import handleLogin from "../function/loginFunction";
import { useNavigate } from "react-router"; // Thay đổi import

const LoginPage = () => {
  const navigate = useNavigate(); // Sử dụng useNavigate thay vì useHistory
  console.log("🚀 ~ LoginPage ~ navigate:", navigate);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const url = "https://6606cfe4be53febb857eade1.mockapi.io/userLogin";
      const userId = await handleLogin(username, password, url);
      if (userId) {
        console.log("Đăng nhập thành công, ID của người dùng:", userId);
        // Chuyển hướng sang trang homescreen sau khi đăng nhập thành công
        navigate("/homescreen");
      } else {
        console.log("Đăng nhập không thành công");
      }
    } catch (error) {
      console.error("Lỗi khi đăng nhập:", error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-background"></div>
      <div className="login-form">
        <h2>LoginPage</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <a href="https://www.google.com/">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
