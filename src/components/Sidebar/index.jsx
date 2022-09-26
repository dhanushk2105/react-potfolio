import {Link, NavLink } from 'react-router-dom'
import LogoD from '../../assets/images/logo-d.png'
import LogoSub from '../../assets/images/logo_sub_cropppped.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faEnvelope, faUser,} from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin, faYoutube} from '@fortawesome/free-brands-svg-icons'
import './index.scss'

const Sidebar = () => {
  return (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoD} alt='logo' />
            <img className="sub-logo" src={LogoSub} alt='logo Subtitle' />
        </Link>
        <nav>
            
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/dhanushk2105/">
                <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/dhanushk2105">
                <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.youtube.com/channel/UCXoqNmvhPEbsCaKMs58N9Fg">
                <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar