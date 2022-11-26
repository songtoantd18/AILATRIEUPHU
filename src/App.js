import Body from "./components/Body";
import Login from "./components/Login";
import "./styles/index.css";
import { useState } from "react";
import { Context } from "./context/Context";

function App() {
  const [user, setUser] = useState("son g toan");
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = (details) => {
    setIsLogin(!isLogin);
    setUser(details);
  };
  return (
    <Context.Provider value={[user, setUser]}>
      {isLogin ? <Body /> : <Login onLogin={handleLogin} />}
      {/* <Body /> */}
    </Context.Provider>
  );
}
export default App;
