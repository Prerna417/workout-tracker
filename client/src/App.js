import { useContext } from "react";
import Exercise from "./components/Exercise";
import ExerciseQueryForm from "./components/ExerciseQueryForm";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Schedule1 from "./components/Schedule1";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
const  user  = false;
  return (
    <Router >
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Schedule" element={user ? <Schedule /> : <Login />} />
      <Route path="/ExerciseQueryForm" element={user ? <ExerciseQueryForm /> : <Login />} />
      <Route path="/Exercise" element={user ? <Exercise /> : <Home />} />
      <Route path="/Login" element={user ? <Home /> : <Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
