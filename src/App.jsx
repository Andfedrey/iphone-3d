import { Jumbotron } from "./components/Jumbotron";
import { Nav } from "./components/Nav";
import { SoundSection } from './components/SoundSection'
import { DisplaySection } from './components/DisplaySection'
import { WebgiViewer } from "./components/WebgiViewer";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Jumbotron></Jumbotron>
      <SoundSection></SoundSection>
      <DisplaySection></DisplaySection>
      <WebgiViewer></WebgiViewer>
    </div>
  );
}

export default App;
