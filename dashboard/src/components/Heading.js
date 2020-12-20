import React, {Component} from 'react';


class Heading extends Component {
    constructor(props){
		super(props);
		this.state = {
			quantityProducts : "",
			totalAmountOfSales : "",
			quantityUsers : ""
		}
	}
	
      apiCall(url, consecuencia){
		  fetch(url)
				.then(response => response.json())
				.then(data => consecuencia(data))
				.catch( error => console.log(error))
	}
	 
     componentDidMount(){
		 this.apiCall("http://localhost:3000/api/products", this.showQuantityProducts);
		 this.apiCall("http://localhost:3000/api/products/totalSales", this.showTotalAmountOfSales);
		 this.apiCall("http://localhost:3000/api/users", this.showQuantityUsers);
	}

	 showQuantityProducts = (data) =>{
		 this.setState(
			 {
				 quantityProducts : data.data.length
			 }
		 )
	 }
	 showTotalAmountOfSales = (data) =>{
		this.setState(
			{
				totalAmountOfSales : "$" + data.data
			}
		)
	}

	 showQuantityUsers = (data) =>{
		this.setState(
			{
				quantityUsers : data.data.length
			}
		)
	}

	render() {
return (
    <div id="content">
    <div className="container-fluid">
        	<div className="d-sm-flex align-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>
            <div className="row">
				<div className="col-md-4 mb-4">
					<div className="card border-left-primary shadow h-100 py-2">
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-primary text-uppercase mb-1"> Productos en la Base de Datos</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.quantityProducts}</div>
								</div>
								<div className="col-auto">
									<i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-4 mb-4">
					<div className="card border-left-success shadow h-100 py-2">
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-success text-uppercase mb-1"> Total en ventas</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.totalAmountOfSales}</div>
								</div>
								<div className="col-auto">
									<i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="col-md-4 mb-4">
					<div className="card border-left-warning shadow h-100 py-2">
						<div className="card-body">
							<div className="row no-gutters align-items-center">
								<div className="col mr-2">
									<div className="text-xs font-weight-bold text-warning text-uppercase mb-1">Cantidad de usuarios</div>
									<div className="h5 mb-0 font-weight-bold text-gray-800">{this.state.quantityUsers}</div>
								</div>
								<div className="col-auto">
									<i className="fas fa-user-check fa-2x text-gray-300"></i>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);
}
}

export default Heading;