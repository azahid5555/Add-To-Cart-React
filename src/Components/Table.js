import React from "react";

function Table(props) {
	// console.log(props.tableRowData);
	return (
		<div className="container">
			<h2 className="text-center ">All Items Data</h2>

			<table className="table table-bordered">
				<tr>
					<th>Name</th>
					<th>Price</th>
					<th>Add Item</th>
					<th>Quantity</th>
					<th>Remove Item</th>
					<th>Image</th>
				</tr>

				{props.tableRowData.map((ele, index) => (
					<>
						<tr key={index}>
							<td>{ele.Name}</td>
							<td>{ele.Price}</td>
							<td>
								<button onClick={() => props.tableData1(index)} className="btn btn-primary">
									+
								</button>
							</td>
							<td>{ele.quantity}</td>
							<td>
								<button onClick={() => props.tableData2(index)} className="btn btn-danger">
									-
								</button>
							</td>

							<td>
								<img style={{ width: "60px", height: "60px" }} src={ele.Image} alt="" />
							</td>
							{/* <td>
								<button className="btn btn-primary">delete</button>
							</td> */}
						</tr>
					</>
				))}
			</table>
		</div>
	);
}

export default Table;
