import React from "react"
import { Form, Button, Card } from "react-bootstrap"

function Sarcasmdetector() {
async function handleSubmit(){
    fetch('/result').then(res => res.json()).then(
data => {console.log(data)});
}
  return (
    
    <div style={{ backgroundImage: "url(/img/ai.jpg)",backgroundRepeat: 'no-repeat',backgroundSize: 'cover',
  width:'100%',height:'100%' }}>
  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

          <div class="container">
                <div class="jumbotron hero text-center">
                    <h1>Welcome to Sarcasm Detector</h1>
                    <p class="text-muted">This is a detective which detects sarcastic text...</p>
                 </div>
    <br/>
                      <div class="jumbotron">

		<form action="{{ url_for('prediction') }}" method="post" />
            <form onSubmit={handleSubmit} method="post">
			<div class="form-group">
				<label for="sent">Type Your Text Below</label>
				<input type="text" name="sentence" autocomplete="off" class="form-control" id="sent" placeholder="Your text goes here..." required/>
			</div>

			<button type="submit" class="btn btn-primary">Submit</button>

		</form>

        </div>
       </div>
        </div>
           )
}

export default Sarcasmdetector
