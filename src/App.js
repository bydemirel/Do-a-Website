import './App.css';
import Categories from './Components/Categories/Categories';
import FAQs from './Components/FAQ\'s/FAQs';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import ScriptFile from "./Script.js";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Categories></Categories>
      <FAQs></FAQs>
      <Footer></Footer>

      <script src={ScriptFile}></script>
    </div>
  );
}

export default App;
