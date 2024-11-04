import './index.css';
import Toppart from './Components/Toppart'
import AboutSection from './Components/AboutSection';
import Fooditem from './Components/Fooditem';
import BookingSection from './Components/BookingSection';

function App() {

  return (
    <div className="landing-page-area bg-black h-screen">
      <Toppart/>
      <AboutSection/>
      <Fooditem/>
      <BookingSection/>
    </div>

  );
}

export default App
