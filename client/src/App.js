import { useContext } from "react";
import Exercise from "./components/Exercise";
import ExerciseQueryForm from "./components/ExerciseQueryForm";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Schedule from "./components/Schedule";
import Schedule1 from "./components/Schedule1";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



function App() {
const { user } = true;
  return (
    <Router >
      <Navbar />
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/Schedule" element={user ? <Home /> : <Schedule />} />
      <Route path="/ExerciseQueryForm" element={user ? <Home /> : <ExerciseQueryForm />} />
      <Route path="/Exercise" element={user ? <Home /> : <Exercise />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
