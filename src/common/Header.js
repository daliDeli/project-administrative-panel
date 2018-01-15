import React, { Component } from "react";
import {Link} from "react-router-dom";
import "./Header.css";


export default class Header extends Component {

	render() {

		return (
			<header>
				<nav className="navbar navbar-light bg-light justify-content-between">
					<a className="navbar-brand">Administrative Panel</a>
					<form className="form-inline">
						<input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
						<Link to="/" className="btn btn-outline-success my-2 my-sm-0" role="button">
							Reports
					</Link>
						<Link to="/" className="btn btn-outline-success my-2 my-sm-0" role="button">
							Create Report
					</Link>

					</form>
				</nav>
			</header>
		);
	}
};

