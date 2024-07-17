import { useContext } from "react";
import Exercise from "./components/Exercise";
import ExerciseQueryForm from "./components/ExerciseQueryForm";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import OthersRoutine from "./components/OthersRoutine";
import Login from "./components/Login";
import Register from "./components/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import UpdateAccount from "./components/UpdateAccount";



function App() {
const { user } = useContext(AuthContext);
  return (
    <Router >
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Schedule" element={user ? <Schedule /> : <Login />} />
      <Route path="/OthersRoutine" element={<OthersRoutine />} />
      <Route path="/ExerciseQueryForm" element={user ? <ExerciseQueryForm /> : <Login />} />
      <Route path="/Exercise" element={<Exercise />} />
      <Route path="/Login" element={user ? <Home /> : <Login />} />
      <Route path="/UpdateAccount" element={<UpdateAccount />} />
      <Route path="/Register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
