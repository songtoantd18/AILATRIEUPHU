import Body from "./components/Body";
import Login from "./components/Login";
import "./styles/index.css";
import { useState } from "react";
import { Context } from "./context/Context";

function App() {
  // console.log("user o app js:", user);
  const [user, setUser] = useState("son g toan");
  console.log("user o app.js:", user);
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = (details) => {
    console.log("details:", details);
    setIsLogin(!isLogin);
    setUser(details);
  };
  // handleLogin();
  return (
    <Context.Provider value={[user, setUser]}>
      {/* <button onClick={handleLogin}>{isLogin ? "log out" : "log in"}</button> */}
      {isLogin ? <Body /> : <Login onLogin={handleLogin} />}
      {/* <Login onLogin={handleLogin} /> */}
    </Context.Provider>
  );
}
export default App;
