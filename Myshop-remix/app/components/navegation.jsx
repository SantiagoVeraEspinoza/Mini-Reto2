import { Link, useLocation } from '@remix-run/react'
function Navegation(){
    const location = useLocation()
    return(
        <nav className="navegator">
            <Link
                to="/index"
                className={location.pathname === '/index' ? 'active' : ''}
            >Home</Link>

            <Link
                to="/aboutus"
                className={location.pathname === '/aboutus' ? 'active' : ''}
            >About Us</Link>

            <Link
                to="/shop"
                className={location.pathname === '/shop' ? 'active' : ''}
             >Shop</Link>

            <Link
                to="/blog"
                className={location.pathname === '/blog' ? 'active' : ''}
            >Blog</Link>
        </nav>
    )
}
export default Navegation