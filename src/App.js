import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Script from "./Script.js";
import HomePage from "./HomePage/HomePage";
import AboutUsPage from "./AboutUsPage/AboutUsPage";
import ContactPage from "./ContactPage/ContactPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/hakkimizda" element={<AboutUsPage/>}/>
          <Route path="/iletisim" element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>

      <script src="Script.js?2"></script>
    </div>
  );
}

export default App;
