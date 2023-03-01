import ProductFunction from "./productFunction";
import products from "../products.json"
import { useEffect, useState } from "react";
import { Alert } from "react-bootstrap";

function ProductsFunction() {

const [buyAlert,setbuyAlert]=useState(false);
const [welcomeAlert,setwelcomeAlert]=useState(false);


const buyProduct=(product)=>
{
    product.quantity--;
    setbuyAlert(true)
    setTimeout(()=>{
        setbuyAlert(false);
    },2000)


}


    useEffect(() => {
        setwelcomeAlert(true);
        setTimeout(() => {
            setwelcomeAlert(false);
        }, 3000)
    }, [])


    return (
        <>
            {
                welcomeAlert && (
                    <Alert variant="success">
                       welcome to our shop !
                    </Alert>
                )
            }
            {
                products.map((e) => {
                    return (
                        <>
                            <ProductFunction product={e} buy={buyProduct} ></ProductFunction>
                        </>
                    )
                })
            }
            {
                buyAlert && (
                    <Alert variant="primary">
                        you bought an item
                    </Alert>
                )
            }
        </>
      );
    
}

export default ProductsFunction;