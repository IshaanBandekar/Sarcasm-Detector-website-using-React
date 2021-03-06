import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert,Container } from "react-bootstrap"
import { Link, useHistory } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/sarcasm")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
  return (
    <div className="Login"
    style={{maxWidth:"1500px"}}>
    
    
     
      <Card>
        <Card.Body>
          
          <h2 className="text-center mb-4">Log In</h2>
          <Form onSubmit={handleSubmit}>
          {error && <Alert variant="danger" className="fade in">{error}</Alert>}

            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="LoginButtonsection" type="submit">
            Login
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Forgot Password?</Link>
          </div>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
    
    </div>
    
    
    
  )
}

export default Login