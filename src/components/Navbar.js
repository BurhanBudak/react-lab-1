import {useState} from 'react'
import Logo from '../logo.svg'

function Navbar() {
  const [loggedIn, setLoggedIn] = useState(false)

  const login = () => {
    setLoggedIn(prev => !prev)
  }
  return (

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    
      <img
        src={Logo}
        height="100"
        alt=""
        loading="lazy"
        style= {{marginTop: '-1px'}}
        />
        
        <h1>Books</h1>


   

    {/* <!-- Collapsible wrapper --> */}
    <div  id="navbarButtonsExample">
      {/* <!-- Left links --> */}
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
      </ul>
      {/* <!-- Left links --> */}

      <div className="d-flex align-items-center">
            {loggedIn
            ? <p>Burhan Budak</p>
            : <button type="button" className="btn btn-link px-3 me-2" onClick={login}>Login</button>
            }
      </div>
    </div>
  </div>
</nav>
    )
}

export default Navbar