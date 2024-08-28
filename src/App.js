import "./App.css";
import LoginPage from "./component/login-page";
import Employe from "./component/employe";
import HRManager from "./component/HR-Manager";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route exact path="/employe" element={<Employe />} />
        <Route exact path="/HRManager" element={<HRManager />} />
      </Routes>
    </Router>
  );
}

export default App;
