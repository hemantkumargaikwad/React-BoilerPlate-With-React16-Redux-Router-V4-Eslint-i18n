import React from 'react';
import { Link } from 'react-router-dom';

const About = props => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
          <button
            onClick={() => {
              props.callAction();
            }}
          >
            Click me
          </button>
        </ul>
      </nav>
    </div>
  );
};

export default About;
