import './App.css';
import Categories from './Components/Categories/Categories';
import Header from './Components/Header/Header';
import Navbar from './Components/Navbar/Navbar';
import Scroll from "./Scroll";
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Header></Header>
      <Categories></Categories>

      <script src={Scroll}></script>
    </div>
  );
}

export default App;
