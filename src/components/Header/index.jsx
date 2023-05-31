import './Header.css'
import logo from 'assets/img/logo.png'
import { Link, useLocation } from 'react-router-dom';
import Button from 'components/Button';


const Header = () => {
  const ubicacion = useLocation()

  return (
    <nav className='header'>
      <div className='logo-container'>
        <Link to={'/'}>
          <img src={logo} alt='logo_Rockflix' />
        </Link>
      </div>
      <div className='button-container'>
        {ubicacion.pathname === '/' && (<Button texto='Nuevo Video' tipo='headerBtn' to={`/NewVideo`} />)}
      </div>
    </nav>
  );
}

export default Header;