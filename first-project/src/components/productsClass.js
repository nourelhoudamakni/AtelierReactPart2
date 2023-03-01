import { Component } from "react";
import ProductClass from "./productClass";
import products from "../products.json"
import { Alert } from "react-bootstrap";

class ProductsClass extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        showAlertBuy: false,
        showAlertWelcome: false,
    }

    buyProduct = (product) => {
        product.quantity--;
        this.setState({showAlertBuy:true})
        setTimeout(() => {
            this.setState({
                showAlertBuy: false
            });
        }, 2000);
        console.log("bonjour")
    }

    componentDidMount = () =>
    {
        this.setState({showAlertWelcome:true,});
        setTimeout(()=>{
                this.setState({
                    showAlertWelcome: false
                });
        },3000);
    };




    render() {
        return (
         <>
            {
                this.state.showAlertWelcome && (
                    <Alert variant="success">
                    Hey, Welcome to our shop MyStore !
                    </Alert>
                )
            }
            {
            products.map((e) => {
                return (
                    <>
                        <ProductClass product={e} buy={this.buyProduct} ></ProductClass>
                        {
                            this.state.showAlertBuy && (
                                <Alert variant="primary">
                                    you bought an item
                                </Alert>
                            )
                        }

                    </>
                )})
            }
        </> 
        );
    }
}

export default ProductsClass;