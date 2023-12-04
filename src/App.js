import { useState, createContext } from 'react'
import './App.css';
import { Background, Header, Navbar, About, Project, Skill, Contact, Footer } from './Components/import.js';


export const topContext = createContext()
function App() {
  const [componentTop, setComponentTop] = useState([{aboutTop : 0}, {projectTop : 0}, {skillTop : 0}, {contactTop : 0}])

  return (
    <topContext.Provider value = {[componentTop, setComponentTop]}>
      <div className="App">
        <Background />
        <Header />
        <Navbar result = {componentTop}/>
        <About />
        <Project />
        <Skill />
        <Contact />
        <Footer/>
      </div>
    </topContext.Provider>
  );
}

export default App;
