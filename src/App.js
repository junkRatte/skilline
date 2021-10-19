import "./App.scss";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="layout-container">
        <Landing />
      </div>
    </div>
  );
}

export default App;
