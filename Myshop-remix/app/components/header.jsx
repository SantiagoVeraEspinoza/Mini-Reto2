import { Link } from '@remix-run/react'
import Logo from '../../public/img/RevtechLogo.png'
import Navegation from './navegation'
function Header(){

    return(
        <header className="header">
            <div className="container bar"> 
                <Link to="index">
                    <img className='logo' src={Logo} alt="Image logo"/>

                </Link>
                <Navegation/>
            </div>
        </header>
    )
}
export default Header