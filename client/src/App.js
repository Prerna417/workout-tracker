import { useContext } from "react";
import Exercise from "./components/Exercise";
import ExerciseQueryForm from "./components/ExerciseQueryForm";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import OthersRoutine from "./components/OthersRoutine";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";



function App() {
const { user } = useContext(AuthContext);
  return (
    <Router >
      <Navbar />
      <Routes>
      <Route exact path="/" element={user? <Home /> : <Login/>} />
      <Route path="/Schedule" element={user ? <Schedule /> : <Login />} />
      <Route path="/OthersRoutine" element={user ? <OthersRoutine /> : <Login />} />
      <Route path="/ExerciseQueryForm" element={user ? <ExerciseQueryForm /> : <Login />} />
      <Route path="/Exercise" element={user ? <Exercise /> : <Home />} />
      <Route path="/Login" element={user ? <Home /> : <Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
