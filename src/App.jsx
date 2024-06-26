import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefit from "./component/Benefit";
import Button from "./component/Button";
import Collaboration from "./component/Collaboration";
import Header from "./component/Header";
import Hero from "./component/Hero";
import Services from "./component/Services";
import RoadMap from "./component/RoadMap";
import Footer from "./component/Footer";
import Pricing from "./component/Princing";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem]  overflow-hidden">
        <Header />
        <Hero />
        <Benefit />
        <Collaboration />
        <Services />
        <Pricing />
        <RoadMap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
