import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
		<h1>hayl yeah, mane</h1>
		<h5>this is a list</h5>
		<ul>
			<li>heck</li>
			<li>what</li>
			<li>cool</li>
			<li>yeah</li>
			<li>meat</li>
		</ul>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
