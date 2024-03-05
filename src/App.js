import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar />

     <div className="title"><h1>Hello, I'm Clarissa! </h1></div>
    
     
     <Skills />

     <Projects />
    </div>
  );
}

export default App;
