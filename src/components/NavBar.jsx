import React from "react";
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const NavBar = () => {
	return (
		<nav className="nav">
			<div className="nav__brand">
				<NavLink className="nav__link" to="/">
					<img
						className="nav__logo"
						src="./media/images/logoKeoStore.png"
						alt="logo KeoStore"
					/>
				</NavLink>
			</div>
			<ul className="nav__list">
				<li className="nav__item">
					<NavLink className="nav__link" to="/products">
						Productos
					</NavLink>
				</li>
				<li className="nav__item">
					<NavLink className="nav__link" to="/platforms">
						Consolas
					</NavLink>
				</li>
				<li className="nav__item">
					<NavLink className="nav__link" to="/cart">
						<CartWidget />
					</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
