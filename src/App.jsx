import "./App.scss";
import Home from "./components/Home/Home";
import Who from "./components/Who/Who";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
import NewWork from "./components/Works/NewWork";
import SideNavbar from "./components/SideNavbar/SideNavbar";
import ProductDesign from "./components/Works/ProductDesign";
function App() {
  return (
    <div className="App">
      <SideNavbar />
      <Home />
      <Who />
      <NewWork />
      <Contact />
    </div>
  );
}

export default App;
