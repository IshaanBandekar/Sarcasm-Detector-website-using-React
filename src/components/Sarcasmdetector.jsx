import React from "react"
import { Form, Button, Card } from "react-bootstrap"

function Sarcasmdetector() {
  return (
    <div >
    <div style={{ backgroundImage: "url(/img/ai.jpg)",backgroundRepeat: 'no-repeat',backgroundSize: 'cover',
  width:'100%',height:'100%' }}>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

      <Card>
        <Card.Body>
          
          <Form.Group >
            
            <Form.Label className="LoginButtonsection" style={{marginLeft: '400px',color: 'white',fontSize:'20px'}}>Type your text below</Form.Label>
            
            <Form.Control placeholder="Your text goes here..."
            className="sarcasmtext"/>
          </Form.Group>
          <Button  className="sarcasmtext" style={{marginLeft: '400px'}} type="submit">
            Submit
            </Button>

        </Card.Body>
        </Card >
        </div>
        </div>
    )
}

export default Sarcasmdetector
