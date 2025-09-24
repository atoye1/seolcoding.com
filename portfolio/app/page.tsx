import Header from '../components/Header'
import Hero from '../components/Hero'
import WhyMe from '../components/WhyMe'
import Services from '../components/Services'
import Projects from '../components/Projects'
import About from '../components/About'
import Resume from '../components/Resume'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="font-pretendard">
      <Header />
      <Hero />
      <WhyMe />
      <Services />
      <Projects />
      <About />
      <Resume />
      <Contact />
      <Footer />
    </div>
  )
}