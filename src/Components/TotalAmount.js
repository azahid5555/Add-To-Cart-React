import React, { useState } from "react";

function TotalAmount({ amount, shipment }) {
	// console.log(props.array[0].quantity);

	return (
		<div>
			<p className="totlaamt display-4">
				<strong>Total Amount is: </strong>
				{amount}
			</p>
			<p className="totlaamt display-4">
				<strong>Shipment Charges </strong>
				{shipment}
			</p>
			<p className="totlaamt display-4">
				<strong>Final Amount is: </strong>
				{amount + shipment}
			</p>
		</div>
	);
}

export default TotalAmount;
