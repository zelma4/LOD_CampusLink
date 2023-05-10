import React from "react";
import "homepage.css";

const MyApp = () => {
  return (
    <div MyButton="container">
      <h1>Welcome to React</h1>
      <p>This is a simple homepage</p>
    </div>
  );
};


export default function MyApp() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <div>
        <h1>Counters that update separately</h1>
        <MyButton />
        <MyButton />
      </div>
    );
  }
  
  function MyButton() {
    // ... we're moving code from here ...
  }

  export default function MyApp() {
    const [count, setCount] = useState(0);
  
    function handleClick() {
      setCount(count + 1);
    }
  
    return (
      <div>
        <h1>Counters that update together</h1>
        <MyButton count={count} onClick={handleClick} />
        <MyButton count={count} onClick={handleClick} />
      </div>
    );
  }

  function MyButton({ count, onClick }) {
    return (
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    );
  }