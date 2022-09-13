import React from "react";
import { CartFill } from "react-bootstrap-icons";

const CartWidget = () => {
	return (
		<div className="cartWidget">
			<CartFill />
			<span className="cart-count">{0}</span>
		</div>
	);
};

export default CartWidget;
