import kasaLogo from '../assets/kasa-logo-footer.svg'
import './Footer.scss'

function Footer() {
    return(
        <footer className='footer'>
        <img src={kasaLogo} alt="Logo Kasa" className="kasa-svg"/>
        <div className='footer--content'>
            <span>© 2020 Kasa. All </span>
            <span> rights reserved</span>
        </div>
        </footer>
    )
}

export default Footer