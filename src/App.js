import './App.css';
import VideoCarousel from "./component/videoPlayer";
import Header from "./component/Header";
import Speech from './component/Speech';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Header/>
      <br></br>
      <div className='alin'>
      <VideoCarousel/>
      <Speech/>
      </div>
      <br></br>
      <br></br>
      <Footer/>
    </div>
    );
}

export default App;
