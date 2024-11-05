import './index.css';
import Toppart from './Components/Toppart'
import AboutSection from './Components/AboutSection';
import Fooditem from './Components/Fooditem';
import BookingSection from './Components/BookingSection';
import CustomerArea from './Components/CustomerArea';
import Footer from './Components/Footer';

function App() {

  return (
    <div className="landing-page-area bg-black h-screen overflow-x-hidden">
      <Toppart/>
      <AboutSection/>
      <Fooditem/>
      <BookingSection/>
      <CustomerArea/>
      <Footer/>
    </div>

  );
}

export default App
