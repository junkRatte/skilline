import "./App.scss";
import Navbar from "./components/Navbar";
import Companies from "./sections/Companies";
import Landing from "./sections/Landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="layout-container">
        <Landing />
        <Companies />
      </div>
    </div>
  );
}

export default App;
