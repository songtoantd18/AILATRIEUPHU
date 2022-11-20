import Body from "./components/Body";
import DeleteRandom from "./components/DeleteRandom";
import Login from "./components/Login";
import "./styles/index.css";
import { useCallback, useState } from "react";
import Login1 from "./components/Login1";
function App() {
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = (ok) => {
    console.log("ok:", ok);
    setIsLogin(!isLogin);
  };
  return (
    <div>
      <button onClick={handleLogin}>{isLogin ? "log out" : "log in"}</button>
      {isLogin ? <Body /> : <Login onLogin={handleLogin} />}

      {/* <Login1 /> */}
    </div>
  );
}

export default App;
