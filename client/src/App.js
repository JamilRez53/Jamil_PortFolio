import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    console.log(section);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='w-screen h-full bg-[#000119]'>
      <Navbar scrollToSection={scrollToSection}/>
      <Home/>
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
