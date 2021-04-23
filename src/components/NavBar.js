import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { Link } from 'react-router-dom'
import '../css/navbar.css'


const NavBar = (props) => {

 const handleLogout= () => {
  window.location.replace("/login")
  document.cookie = 'loggedIn=false'
 }

 const updateAddress = () => {
  props.updateMap('Lubbock, TX')
  console.log("Lubbock?")
 }

 
    return (
      <div>
        {document.cookie === 'loggedIn=true'? (
            <AppBar className="NavBar" position="relative">
                 <Toolbar >
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        Lubbock,TX
                    </Typography>
                    <ul className="nav-list">
                      <li className="nav-list-item">
                          <Link className="nav-text" to="/">Listings</Link>
                      </li>
                      <li className="nav-list-item">
                          <Link className="nav-text" to="/add" onClick={updateAddress}>Add</Link>
                      </li> 
                      <li className="nav-list-item">
                        <Link className="nav-text" to="/login" onClick={handleLogout}>Logout</Link>
                      </li> 
                    </ul>
                  </Toolbar>
                  <div className="welcomeBanner"><h6>"Logged in as: {`${props.user[0].username}`}"</h6>
                  </div>
                </AppBar>
                    ) : (
              <AppBar className="NavBar" position="relative">
                <Toolbar >
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        Lubbock,TX
                    </Typography>
                      <ul className="nav-list">
                      <li className="nav-list-item">
                          <Link className="nav-text" to="/">Listings</Link>
                      </li>
                      <li className="nav-list-item">
                        <Link className="nav-text" to="/login">Login</Link>
                     </li>
                    </ul>
                  </Toolbar>
                 </AppBar>)}
     </div>

      
    )
}

export default NavBar