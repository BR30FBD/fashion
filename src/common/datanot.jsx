import React from 'react';
import { NavLink } from 'react-router-dom';
import './donotstyle.css'
const Datanot = () => {
  return (
      <>
      	<div id="notfound" style={{backgroungImage:`url('assets/img/bg.jpg')`}}>
		<div class="notfound">
			<div class="notfound-404">
				<h1>Oops!</h1>
			</div>
			<h2>404 - Page not found</h2>
			<p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
			<NavLink to='/' style={{backgroundColor:"red"}} onclick='scroll("hero");'>Go To Homepage</NavLink>
		</div>
	</div>
      </>
  );
};

export default Datanot;
