import React, {useState, useContext} from 'react';
import logo from '../../assets/logo.png'
import styles from'./Navbar.module.css'


import { AccountContext } from '../AccountContext';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false)
  const { logout, isLoggedIn} = useContext(AccountContext);


const login = isLoggedIn ? 
( <>
 <p className="control">
    <span className="icon">
      <i className="fa fa-user"></i>
    </span>
    <span>Welcome BOB</span> 
  </p>
    <p className="control">
  <a className="button is-small" href="/#" onClick={logout}>
    <span className="icon">
      <i className="fa fa-user-minus"></i>
    </span>
    <span>Logout</span>
  </a>
  </p>
</>
) :
(<>
  <p className="control">
  <a className="button is-small" href="/Register">
    <span className="icon">
      <i className="fa fa-user-plus"></i>
    </span>
    <span>Register</span> 
  </a>
  </p>
  <p className="control">
  <a className="button is-small login" href="/Login">
    <span className="icon">
      <i className="fa fa-user"></i>
    </span>
    <span>Login</span>
  </a>
  </p>
</>)

  return (
    <React.Fragment>
    <nav className="navbar topNav">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/#">
            <img  width="28" height="28" className={styles.logo} alt='logo' src={logo}/>
            <p className="title is-3 nav-title">Lenders Library</p>
          </a>
          <div
           className={`navbar-burger burger ${navOpen && "is-active"}`}
            onClick={() => setNavOpen(!navOpen)}
            data-target="topNav"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="topNav" className={`navbar-menu ${navOpen && "is-active"}`} > 
          <div className="navbar-start">
            <a className="navbar-item" href="/#">Home</a>
            <a className="navbar-item" href="/About">About</a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                {login}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </React.Fragment>
  );
}

export default Navbar;
