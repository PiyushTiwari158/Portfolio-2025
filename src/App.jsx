import AboutMe from './components/about-me'
import Contact from './components/contact'
import MyInfo from './components/hero'
import WebMVideo from './components/media'
import { Navbar } from './components/navbar'
import ScrollToTop from './components/scroll-to-top'
import SkillsSection from './components/skills'

function App() {

  return (
    <>
      <div>
      <Navbar/>
      <MyInfo/>
      <AboutMe/>
      <WebMVideo/>
      <SkillsSection/>
      <Contact/>
      <ScrollToTop/>
      </div>
    
    </>
  )
}

export default App
