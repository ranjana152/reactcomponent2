import Container2 from './container2/container2';
import Container1 from './container_1/container1';
import './App.css';
import './index.css';
import Container3 from './container3/container3';
function App() {
  return (
    <div className="App">
      <Container1 />
      <Container2/>
      {/* <Container3/> */}
    </div>
  );
}

export default App;
