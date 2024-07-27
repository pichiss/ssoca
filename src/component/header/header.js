import './header.css'

const Header = ()=>{
    return (
        <header>
            <div className="headerWrap">
                <h1><a href="#"><img src="./asset/logo-w.svg" /></a></h1>
                <div className="hamBtn">
                  <span className="ham1"></span>  
                  <span className="ham2"></span>  
                </div>
            </div>
        </header>
    )
}

export default Header;