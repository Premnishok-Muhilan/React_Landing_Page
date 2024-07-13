import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Header } from "./components/Header";
import { Background } from "./components/Background";
import { ThreeFeatures } from "./components/ThreeFeatures";

import { WhatPeopleAreSaying } from "./components/WhatPeopleAreSaying";
import { Footer } from "./components/Footer";

import { DetailedFeatures } from "./components/DetailedFeatures";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Header />
      <Background
        height="600px"
        pContent="Generate more leads with a professional landing page!"
      />

      <ThreeFeatures />
      <DetailedFeatures />
      <WhatPeopleAreSaying />

      <Background
        height="300px"
        pContent="Ready to get started? Sign up now!"
      />
      <Footer />
    </div>
  );
}

export default App;
