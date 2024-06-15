import HeroSection from "./components/HeroSection";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = (e) => {
    // const { scrollTop, scrollHeight, clientHeight } = e.target;
    const { scrollTop } = e.target;
    setScrollPosition(scrollTop);
  };

  return (
    <div
      className="body bg-red-500 flex flex-row flex-wrap w-full h-screen overflow-y-scroll"
      onScroll={handleScroll}
    >
      <NavBar scrollPos={scrollPosition} />
      <HeroSection customClass="banner">Ola</HeroSection>
    </div>
  );
}

export default App;
