import './App.css';
import ImageSlider from './Image Slider/ImageSlider';


function App() {
  return (
    <div className="App">
  <h1>Hey there guy</h1>
  <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} />
       
    </div>
  );
}

export default App;
