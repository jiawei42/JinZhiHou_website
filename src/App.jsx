import "./App.scss";
import Home from "./components/Home/Home";
import Who from "./components/Who/Who";
import Contact from "./components/Contact/Contact";
import Works from "./components/Works/Works";
function App() {
  return (
    <div className="App">
      <Home />
      <Who />
      <Works />
      <Contact />
    </div>
  );
}

export default App;
