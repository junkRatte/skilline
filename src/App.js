import "./App.scss";
import Navbar from "./components/Navbar";
import Companies from "./sections/Companies";
import Landing from "./sections/Landing";
import CloudSoftware from "./sections/CloudSoftware";
import WhatIs from "./sections/WhatIs";
import Features from "./sections/Features";
import Integrations from "./sections/Integrations";
import Testimonials from "./sections/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="layout-container">
        <Landing />
        <Companies />
        <CloudSoftware />
        <WhatIs />
        <Features />
        <Integrations />
        <Testimonials />
        </div>
    </div>
  );
}

export default App;
