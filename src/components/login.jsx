import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export const Login = (props) => {
    return (
      <div id="login">
        <div className="container">
          <div className="row">
          <h2 style={{textAlign:"center"}}><br></br><br></br>Login<br></br></h2>
            {/* <div className="col-xs-12 col-md-6">
              {" "}
              <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            </div> */}
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                {/* <p>{props.data ? props.data.paragraph : "loading..."}</p> */}
                <div className="Login">
                <div class="d-flex justify-content-center">
      <div>
      <Form className="form">
        <Form.Group size="lg" controlId="email">
          <Form.Label >Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            // value={email}
            // onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            // value={password}
            // onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" >
          Login
        </Button>
        <div>
           
        </div>
      </Form>
      </div>
      </div>
    </div>
               
                
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  