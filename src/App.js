import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import HomeScreen from "./page/homeScreen";
import LoginPage from "./page/loginPage";
import NotFound from "./page/NotFound";
import "../src/styles/index.css";

// Component HomeScreen
// const HomeScreen = () => {
//   return (
//     <div>
//       <h1>Home Screen</h1>
//       <p>This is the home screen.</p>
//     </div>
//   );
// };

// // Component Login
// const Login = () => {
//   const navigate = useNavigate();

//   const goToHomeScreen = () => {
//     navigate("/homescreen");
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <p>This is the login page.</p>
//       <button onClick={goToHomeScreen}>Go to Home Screen</button>
//     </div>
//   );
// };

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
