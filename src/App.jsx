import { useState } from "react";
import LandingPage from "./components/LandingPage";
import MapPage from "./components/MapPage";

function App() {
  const [showMap, setShowMap] = useState(false);

  return (
    <div>
      {!showMap ? (
        <LandingPage onExploreMap={() => setShowMap(true)} />
      ) : (
        <MapPage />
      )}
    </div>
  );
}

export default App;
