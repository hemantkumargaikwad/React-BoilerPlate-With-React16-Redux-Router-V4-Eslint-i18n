import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../logo.svg';

const Login = props => {
  const { formatMessage, messages } = props;
  return (
    <div>
      {props.welcomeMessage}
      <div className="languages">
        <a href="/?locale=ar">العربية</a>
        <a href="/?locale=en">English</a>
        <a href="/?locale=es">Español</a>
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">{formatMessage(messages.title)}</h1>
        </header>
        <p className="App-intro">
          {formatMessage(messages.content1)} <code>src/App.js</code>{' '}
          {formatMessage(messages.content2)}
        </p>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">{formatMessage(messages.menu)}</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
          <li>
            <Link to="/users/">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Login;
