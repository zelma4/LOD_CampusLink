import { Link } from 'react-router-dom';
import './SignIn.css';
import { Button } from 'react-bootstrap';


const SignIn = () => {
    return (
      <div className="wrapper">
        <div className='sign-in-wrapper'>
          <Link to="general">
            <Button variant="outline-secondary" className="sign-in-button">
              SIGN IN
            </Button>
            <Button variant="outline-secondary" className="sign-up-button">
              SIGN UP
            </Button>
          </Link>
          <h1 className="CampusLink">CampusLink</h1>
          <h2 className="CampusLink2">Say Hello To Coeducation</h2>
          <span className="CampusLink3">
            Alone we can do so little, together we can do so much
          </span>
        </div>
        <div className="img-wrapper">
          <img  src="/12.jpg"alt="12"
          title="12" className="img" />
        </div>
      </div>
    );
  }

  export default SignIn