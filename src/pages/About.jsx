import Banner from "../components/Banner/Banner"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import AboutText from "../components/AboutText/AboutText"
function About() {
  return (
    <>
    <Header />      
      <Banner title="ABOUT" image="about.svg" />
      <div className="container">
        <AboutText />
      </div>
      <Footer/>
    </>
  )
}
export default About