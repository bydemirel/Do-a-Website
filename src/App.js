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
import ForrestDaysPage from "./ForrestDaysPage/ForrestDaysPage";
import ClassesPage from "./ClassesPage/ClassesPage";
import GardenPage from "./GardenPage/GardenPage";
import WorkshopPage from "./WorkshopPage/WorkshopPage";
import LibraryPage from "./LibraryPage/LibraryPage";
import SpecialDaysPage from "./SpecialDaysPage/SpecialDaysPage";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/hakkimizda" element={<AboutUsPage/>}/>
          <Route path="/iletisim" element={<ContactPage/>}/>
          <Route path="ormangunleri" element={<ForrestDaysPage/>}/>
          <Route path="siniflarimiz" element={<ClassesPage/>}/>
          <Route path="bahcemiz" element={<GardenPage/>}/>
          <Route path="atolyemiz" element={<WorkshopPage/>}/>
          <Route path="kutuphanemiz" element={<LibraryPage/>}/>
          <Route path="ozelgunlerimiz" element={<SpecialDaysPage/>}/>
        </Routes>
      </BrowserRouter>

      <script src="Script.js?2"></script>
    </div>
  );
}

export default App;
