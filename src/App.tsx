import About from './components/About'
import Activities from './components/Activities'
import Contact from './components/Contact'
import { Footer } from './components/Footer'
import Gallery from './components/Gallery'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Schedule from './components/Schedule'
import Team from './components/Team'

function App () {
  return (
    <div>
      <Navbar />
      <main className='h-screen w-full snap-y snap-mandatory overflow-y-auto overflow-x-hidden scroll-smooth'>
        <div className='snap-center' id='inicio'>
          <Home />
        </div>
        <div className='snap-start' id='nosotros'>
          <About />
        </div>
        <div className='snap-start' id='equipo'>
          <Team />
        </div>
        <div className='snap-start' id='galeria'>
          <Gallery />
        </div>
        <div className='snap-start' id='actividades'>
          <Activities />
        </div>
        <div className='snap-start' id='horarios'>
          <Schedule />
        </div>
        <div className='snap-start' id='contacto'>
          <Contact />
        </div>
        <div className='snap-center'>
          <Footer />
        </div>
      </main>
    </div>
  )
}

export default App
