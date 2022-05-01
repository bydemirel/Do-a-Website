import './App.css';
import Categories from './Components/Categories/Categories';
import FAQs from './Components/FAQ\'s/FAQs';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import ScriptFile from "./Script"
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Categories></Categories>
      <FAQs></FAQs>

      <script src={ScriptFile}></script>
    </div>
  );
}

export default App;
