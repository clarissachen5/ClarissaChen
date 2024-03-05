import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experiences } from  './components/Experiences';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar />

     <div className="title"><h1>Hello, I'm Clarissa! </h1></div>
     <div className="Project mission"><h4>I am a community builder, connector, and lifelong learner as I like to apply my technology, business, and people skills together to bridge ideas and groups of people, solve problems, and learn from the people around me. 

I love to create digitally, with my hands, and using my voice. I enjoy combining my interests in technology and art to positively impact my community. I value new perspectives and helping my team in every way I can.</h4></div>
    
<div className="image-row">
      <img src="headshot.jpeg" alt="Headshot" />
      <img src="hawaii.jpeg" alt="Hawaii" />
      <img src="ski.jpeg" alt="Ski" />
    </div>
    <Experiences />
     
     <Skills />

     <Projects />
    </div>
  );
}

export default App;
