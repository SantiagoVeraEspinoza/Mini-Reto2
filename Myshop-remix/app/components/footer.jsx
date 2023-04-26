import Navegation from "./navegation"
function Footer(){
    return(
        <footer className="footer">
            <div className="content container">
                <Navegation/>
                <p className= "copyright">All rights reserved {new Date().getFullYear()}</p>
            </div>

        </footer>
    )
}
export default Footer