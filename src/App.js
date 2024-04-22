import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";
import HomeScreen from "./page/HomeScreen";
import LoginPage from "./page/loginPage";
import NotFound from "./page/NotFound";
import "../src/styles/index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/homescreen" element={<HomeScreen />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
