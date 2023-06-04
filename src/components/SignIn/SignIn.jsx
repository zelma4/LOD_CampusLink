import { Link } from 'react-router-dom';
import './SignIn.css';
import { Button, InputGroup, Form } from 'react-bootstrap';


const SignIn = () => {
    return (
      <div className="sign-in-wrapper">
        <div className='sign-in-container'>
           <h1 className="CampusLink">CampusLink</h1>
          <h2 className="CampusLink2">Say Hello To Coeducation</h2>
          <span className="CampusLink3">
            Alone we can do so little, together we can do so much
          </span>
          <Link to="general">
            <Button variant="outline-secondary" className="sign-in-button">
              SIGN IN
            </Button>
            <Button variant="outline-secondary" className="sign-up-button">
              SIGN UP
            </Button>
          </Link>
          <InputGroup className="email-input">
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
            <Form.Control 
              onChange={(e) => localStorage.setItem('email', e.target.value)}
              placeholder="Email"
              aria-label="Email"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </div>
        <div className="img-wrapper">
          <img  src="/12.jpg"alt="start-img"
          title="start-img" className="start-img" />
        </div>
      </div>
    );
  }

  export default SignIn