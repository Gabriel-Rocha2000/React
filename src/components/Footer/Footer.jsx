import {Link} from 'react-router-dom'

//ASSETS
import './Footer.css'
import BrazilLogo from '../../assets/brazil-icon.svg'
import Logo from '../../assets/dnc-logo.svg'
import UsaIcon from '../../assets/usa-icon.svg'
import FacebookIcon from '../../assets/facebook-icon.svg'
import InstagramIcon from '../../assets/instagram-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import TweeterIcon from '../../assets/tweeter-icon.svg'

function Footer (){

    return (
        <footer>
            <div className="container">
               <div className='d-flex jc-space-between'>
                <div className='footer-logo-col'>
                <img src={Logo} className='footer-logo'/>
                <p className='grey-1-color'>A escola que prepara você para as profissões em alta no mercado de trabalho.</p>
                <div className='d-flex social-links jc-space-between'>
                    <a href="https://www.linkedin.com/in/gabriel-g-rocha/" target='_blank'>
                     <img src={FacebookIcon} alt="" /></a>
                     <a href="https://www.linkedin.com/in/gabriel-g-rocha/" target='_blank'>
                     <img src={TweeterIcon} alt="" /></a>
                     <a href="https://www.linkedin.com/in/gabriel-g-rocha/" target='_blank'>
                     <img src={LinkedinIcon} alt="" /></a>
                     <a href="https://www.linkedin.com/in/gabriel-g-rocha/" target='_blank'>
                     <img src={InstagramIcon} alt="" /></a> </div>
                </div>
                <div className='d-flex'>
                    <div className='footer-col'>
                        <h3>Pages</h3>
                        <ul >
                        <li><Link to="/" >Home</Link></li>
                        <li><Link to="/About" >About</Link></li>
                        <li><Link to="/Projects" >Projects</Link></li>
                        <li><Link to="/Contact" >Contact</Link></li>
                    </ul>
                    </div>                                      
                </div> 
                    <div className='d-flex'>
                    <div className='footer-col'>
                        <h3>Contact</h3>
                        <ul >
                        <li><Link to="/" >R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </Link></li>
                        <li><Link to="/" >suporte@escoladnc.com.br</Link></li>
                        <li><Link to="/" >(19) 99187-4342</Link></li>
                    </ul>
                    </div>                                      
                </div>                
              </div>  
              <div className='d-flex jc-space-between footer-copy'> 
                <p className='grey-1-color'>Copyright © DNC - 2024</p>
                <div className='langs-area d-flex'>
                    <img src={BrazilLogo}height="29px" alt="" />
                    <img src={UsaIcon} height="29px" alt="" />
                </div>
            </div>            
            </div>
            
        </footer>
    )
}

export default Footer