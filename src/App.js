
import './App.css';
import AboutUs from './Components/HomeComponenets/AboutUs';
import Footer from './Components/HomeComponenets/Footer';
import Homebanner from './Components/HomeComponenets/Homebanner';
import ImageSlider from './Components/HomeComponenets/ImageSlider';
import Navbar from './Components/HomeComponenets/Navbar/Navbar';
import Testinomials from './Components/HomeComponenets/Testinomials';
import TopFeatures from './Components/HomeComponenets/TopFeatures';

function App() {


  return (
      <>
      <Navbar/>
      <Homebanner/>
      <AboutUs/>
      <TopFeatures/>
      <Testinomials/>
      {/* <ImageSlider/> */}
      {/* <Footer/> */}
      </>
  );
}

export default App;
