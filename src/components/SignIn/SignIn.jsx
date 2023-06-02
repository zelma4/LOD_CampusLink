import { Link } from 'react-router-dom';
import './SignIn.css';
import { Button } from 'react-bootstrap';


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
        </div>
        <div className="img-wrapper">
          <img  src="/12.jpg"alt="start-img"
          title="start-img" className="start-img" />
        </div>
      </div>
    );
  }

  export default SignIn