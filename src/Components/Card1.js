import React from "react";
function Card1(props) {
	return (
		<div>
			<div className="card">
				<img className="card-img-top" src={props.obj.Image} alt="Card image cap"  style={{ height: "300px", objectFit: "cover" }} />
				<div className="card-body">
					<h5 className="card-title">{props.obj.Name}</h5>
					<p className="card-text">{props.obj.Price}</p>
					{props.obj.state ? (
						<a
							onClick={() => props.tableData(props.id)}
							href="#"
							className="btn btn-primary"
						>
							Add To Cart
						</a>
					) : (
						<a
							onClick={() => props.tableData1(props.id)}
							href="#"
							className="btn btn-success"
						>
							Add To Car
						</a>
					)}
				</div>
			</div>
		</div>
	);
}

export default Card1;
