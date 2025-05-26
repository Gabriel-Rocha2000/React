import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ProjectsList from "../components/ProjectsList/ProjectsList"

function Projects() {
  return (
    <>
    <Header />    
      <Banner title="Projects" image="projects.svg" />
      <div className="container">
        <ProjectsList />
      </div>
      <Footer/>
    </>
  )
}
export default Projects