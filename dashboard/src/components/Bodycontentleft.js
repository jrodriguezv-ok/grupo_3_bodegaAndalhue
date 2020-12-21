import React, { Component } from 'react';


class Bodycontentleft extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lastProduct: ""
        }
    }
    apiCall(url, consecuencia) {
        fetch(url)
            .then(response => response.json())
            .then(data => consecuencia(data))
            .catch(error => console.log(error))
    }
    componentDidMount() {
        this.apiCall("http://localhost:3000/api/products/lastProduct", this.showLastProduct);
    }
    showLastProduct = (data) => {
        this.setState({
            lastProduct: data.data
        })
    }


    render() {
        return (
                    <div className = "card shadow mb-4">
                        <div className = "card-header py-3">
                            <h6 className = "m-0 font-weight-bold text-primary" > Precio del último producto agregado: ${ this.state.lastProduct.price }</h6>
                        </div>
                        <div className = "card-body">
                            <div className = "text-center" >
                            <img className = "img-fluid px-3 px-sm-4 mt-3 mb-4"  style = {{ "height": "100%", "width": "50%" }} src = {"http://localhost:3000/img/products/"+ this.state.lastProduct.image} alt = "img"/>
                            </div>
                            <p> { this.state.lastProduct.tasting } </p>
                            <a target = "_blank" rel = "nofollow" href = "/" > Ver detalles </a>
                        </div>
                    </div>
        
        );
    }
}

export default Bodycontentleft;