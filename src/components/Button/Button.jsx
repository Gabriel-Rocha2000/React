import {Link} from 'react-router-dom'
import whiteArrow from '../../assets/white-arow.svg'

//ASSETS
import './Button.css'

function Button ({arrow, buttonStyle, loading, children, ... props}){

    return (
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={whiteArrow} /> }
            
        </button>
    )
}

export default Button