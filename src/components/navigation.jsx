import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


  

export const Navigation = (props) => {
  const [error, setError] = useState("")
  const { currentUser } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    // try {
    //   await logout()
    //   history.push("/login")
    // } catch {
    //   setError("Failed to log out")
    // }
  } 

  
  return (
    <div>
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
          <Link style={{color:'black'}} to="/">Home Page</Link> 
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
          
        >
          <ul className='nav navbar-nav navbar-right'>
            {!currentUser && (
              <li >
              <Link to='/Login' className='page-scroll'>
                Login/Register
              </Link>
              
            </li> 
               
              
            )}
             {currentUser && (
              <li >
              <Link to='/sarcasm' className='page-scroll'>
                Sarcasm detector
              </Link>
              
            </li> 
               
              
            )}
            
          
            <li>
              
                <a href='#features' className='page-scroll'>
              Features
              </a>
              
            </li>
            
            
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            {/* <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li> */}
            
            <li>
              <a href='#testimonials' className='page-scroll'>
                Testimonials
              </a>
            </li> 
            <li>
              <a href='#team' className='page-scroll'>
                Team
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact Us
              </a>
            </li>
         
      {/* <li>
      <div className='Updatebuttonstyle'>
        <Button variant='default'
        onClick={handleLogout}
        >
          <i class="fa fa-sign-out" aria-hidden="true">
            Logout
          </i>
        </Button>
      </div>
      
      </li> */}
      <li>
        
        <div className='userbuttonstyle'>     
        {/* <Card >
          <Card.Body> */}
          {/* <h2 className="text-center mb-4">Profile</h2> */}
            {error && <Alert variant="danger">{error}</Alert>}
            {/* <strong>Email:</strong> {currentUser.email} */}
            <Link to="/Profile" style={{color:'#555'}}>
            <i class="bi bi-person-circle" style={{fontSize: "3.5rem" 
          }}></i>
            </Link>
          {/* </Card.Body>
        </Card> */}
        
        </div>
        </li>
          </ul>
          
        </div>
      </div>
    </nav>
    </div>
  )
}
