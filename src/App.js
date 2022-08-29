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
import SismografPage from "./SismografPage/SismografPage";
import DevelopmentAreasPage from "./DevelopmentAreasPage/DevelopmentAreasPage";
import SummerActivitiesPage from "./SummerActivitiesPage/SummerActivitiesPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/hakkimizda" element={<AboutUsPage/>}/>
          <Route path="/gelisim-alanlari" element={<DevelopmentAreasPage/>}/>
          <Route path="/iletisim" element={<ContactPage/>}/>
          <Route path="koku-ve-hafiza-oyunu" element={<ForrestDaysPage/>}/>
          <Route path="duyu-oyunu" element={<ClassesPage/>}/>
          <Route path="dogadaki-nesneleri-dokunarak-tanima-oyunu" element={<GardenPage/>}/>
          <Route path="dusen-yumurtayi-kurtarma-etkinligi" element={<WorkshopPage/>}/>
          <Route path="tanisma-oyunu" element={<LibraryPage/>}/>
          <Route path="taksici-yolcu-oyunu" element={<SpecialDaysPage/>}/>
          <Route path="sismograf-yapimi" element={<SismografPage/>}/>
          <Route path="yaz-etkinlikleri" element={<SummerActivitiesPage/>}/>
        </Routes>
      </BrowserRouter>

      <script src="Script.js?2"></script>
    </div>
  );
}

export default App;
