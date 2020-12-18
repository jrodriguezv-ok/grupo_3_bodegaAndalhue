import React, {Component} from 'react';

class Bodycontentright extends Component {
    constructor(props){
		super(props);
		this.state = {
			categories: []
		}
	}
      apiCall(url, consecuencia){
		  fetch(url)
				.then(response => response.json())
				.then(data => consecuencia(data))
				.catch( error => console.log(error))
 	}
     componentDidMount(){		
		console.log("Se está montando")
		 this.apiCall("http://localhost:3000/api/products/categories", this.showCategories)
	 }

	showCategories = (data) =>{
	console.log(data)
		this.setState(
			{
				categories: data.data
			}
		)
	}

	render()  {
    return (
        <div id="content">
            <div className="row">
            <div className="col-lg-6 mb-4">						
				<div className="card shadow mb-4">
					<div className="card-header py-3">
						<h6 className="m-0 font-weight-bold text-primary">Categorias en Base de Datos</h6>
					</div>
					<div className="card-body">
						<div className="row">
							<div className="col-lg-6 mb-4">
										<div className="card bg-info text-white shadow">
										  {this.state.categories.map((item,index) => {
											  
									return 	(<div className="card-body" key={index}> {item.name}</div>)})
										
											}  
										   
											<div  className="card-body"> 
												
													Category 01
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

    )
  }
}
	
export default Bodycontentright;