import Banner from "../components/Banner/Banner"
import Button from "../components/Button/Button"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import ContactForm from "../components/ContactForm/ContactForm"

function Contact() {
  return (
    <>
    <Header />     
      <Banner title="Contact" image="contact.svg" />
       <ContactForm/>
      <Footer/>
    </>
  )
}
export default Contact