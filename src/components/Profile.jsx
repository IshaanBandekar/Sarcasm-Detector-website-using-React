import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef()
  const nameRef = useRef()
  const numRef = useRef()
  const { currentUser,logout} = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
  
  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/")
    } catch {
      setError("Failed to log out")
    }
  } 
  

  return (
    <>
    <div className='Login'>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form >
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="name">
              <Form.Label>Username</Form.Label>
              {/* <Form.Control
                type="name"
                ref={nameRef}
                required
                defaultValue={currentUser.name}
              /> */}
              <input required="" type="name" class="form-control" value="Sarcasm"></input>
            </Form.Group>
            <Form.Group id="number">
              <Form.Label>Phone number</Form.Label>
              {/* <Form.Control
                type="number"
                ref={numRef}
                
              /> */}
              <input required="" type="number" class="form-control" value="0123456789"></input>
            </Form.Group>
            {/* <Button disabled={loading} className="LoginButtonsection" > */}
            <div className="w-100 text-center mt-2">
              <Link to="/update-profile" >
               Update Password
            
          </Link>
          </div>
            {/* </Button> */}
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Go back</Link>
      </div>
      <div className='Updatebuttonstyle' >
        <Button variant='default'
        onClick={handleLogout}
        >
          <i class="fa fa-sign-out" aria-hidden="true" >
            Logout
          </i>
        </Button>
      </div>
      </div>
    </>
  )
}