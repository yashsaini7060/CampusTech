import "./App.css";
import Navigation from "./components/Navigation";
import FeatureSection from "./components/FeaturesSection";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import TrustSection from "./components/TrustSection";
import UpgradeCta from "./components/UpgradeCta";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="overflow-hidden">
      <Navigation />
      <Hero />
      <Solutions />
      <FeatureSection />
      <TrustSection />
      <UpgradeCta />
      <Footer />
    </div>
  );
}

export default App;
