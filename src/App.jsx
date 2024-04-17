import { NavBar } from "./components/Navbar"
import { Banner } from './components/Banner'
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { Footer } from "./components/Footer"
import { Contact } from "./components/Contact"
import './App.css'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App(){
  
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

