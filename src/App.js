import './App.css';
import ImageSlider from './Image Slider/ImageSlider';


function App() {
  return (
    <div className="App">
  <h1>Image Slider in React</h1>
  <ImageSlider url={'https://picsum.photos/v2/list'} limit={10} />
       
    </div>
  );
}

export default App;
