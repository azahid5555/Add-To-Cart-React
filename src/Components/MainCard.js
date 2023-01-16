import React, { useState, useEffect } from "react";
import Card1 from "./Card1";
import Data from "./MainApi";
import Table from "./Table";
import TotalAmount from "./TotalAmount";

const getAllItems = () => {
	let list = localStorage.getItem("lists1");
	// console.log(list);
	if (list) {
		return JSON.parse(localStorage.getItem("lists1"));
	} else {
		return [];
	}
};
const getAllItems1 = () => {
	let list = localStorage.getItem("api");
	// console.log(list);
	if (list) {
		return JSON.parse(localStorage.getItem("api"));
	} else {
		return [];
	}
};
const getAmount = () => {
	let list = localStorage.getItem("amount");
	// console.log(list);
	if (list) {
		return JSON.parse(localStorage.getItem("amount"));
	} else {
		return 0;
	}
};

function MainCard() {
	const [data, setData] = useState(getAllItems1());
	const [array, setArray] = useState(getAllItems());

	let [amount, SetAmount] = useState(getAmount());

	function tableData(id) {
		setArray([...array, data[id]]);
		data[id].quantity += 1;
		data[id].state = false;
		Data[id].state = false;
		console.log(Data[id].state);
		setState();
		setMainApi();
		amount += data[id].Price;
		SetAmount(amount);
		charges(amount);
	}
	function tableData1(id) {
		array[id].quantity += 1;
		// data[id].quantity += 1;
		setArray(array);
		amount += array[id].Price;
		SetAmount(amount);
		charges(amount);
		setMainApi();
	}
	useEffect(() => {
		// console.log("useEffect run");
		localStorage.setItem("lists1", JSON.stringify(array));
	}, [array]);
	useEffect(() => {
		// console.log("useEffect run");
		localStorage.setItem("amount", JSON.stringify(amount));
	}, [amount]);
	useEffect(() => {
		// console.log("useEffect run");
		localStorage.setItem("api", JSON.stringify(Data));
	}, [data]);
	function tableData2(id) {
		if (array[id].quantity > 0) {
			array[id].quantity -= 1;

			amount -= array[id].Price;
			SetAmount(amount);
			charges(amount);
			setMainApi();
		} else {
			alert("item already 0");
		}
	}
	const [shipment, setShipment] = useState(0);
	const charges = (amt) => {
		if (amt > 5000 || amt == 0) {
			setShipment(0);
		} else {
			setShipment(500);
		}
	};
	const removeAll = () => {
		data.map((ele) => {
			ele.state = true;
			ele.quantity = 0;
			SetAmount(0);
		});
		Data.map((ele) => {
			ele.state = true;
		});

		setArray([]);
	};
	const setMainApi = () => {
		localStorage.setItem("lists1", JSON.stringify(array));
	};
	const setState = () => {
		localStorage.setItem("api", JSON.stringify(Data));
	};
	return (
		<div>
			<div className="container-fluid">
				<div className="row">
					<div className="col-6">
						<button
							onClick={removeAll}
							style={{ height: "50px" }}
							className="btn btn-outline-dark"
						>
							Delete All
						</button>
					</div>
					<div className="col-6">
						<h3 className="text-right text-dark display-4 totlaamt">
							Total Amount: <br /> <span className="bg-warning">{amount}</span>
						</h3>
					</div>
				</div>
				
				
				<h1 className="text-center display-4">Add To Cart Project</h1>
				<div className="row">
					{data.map((obj, index) => {
						return (
							<div key={index} className="col-md-4">
								<Card1 obj={obj} id={index} tableData={tableData} tableData1={tableData1} />
							</div>
						);
					})}
				</div>
				<br />
				
				<Table tableRowData={array} tableData1={tableData1} tableData2={tableData2} />
				<TotalAmount amount={amount} shipment={shipment} />
			</div>
		</div>
	);
}

export default MainCard;
