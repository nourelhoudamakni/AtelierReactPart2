import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react";
import { Link } from 'react-router-dom';



function ProductFunction(props) {
    const [product,setProduct]=useState(props.product);
    const card = product.like >5 ? "bestProduct" : "";

    const incrementLike = () => {
        setProduct({ ...product, like: product.like + 1 })
    }
    


    return ( 
        <>
        <Card style={{ width: '18rem' }} className={card}>
        <Card.Img variant="top" src={"../assets/images/" +product.img}/>
        <Card.Body>
          <Card.Title><Link to={`/products/${product.name}`}>{product.name}</Link></Card.Title>
          <Card.Text>{product.description}</Card.Text>
          <Card.Text>{product.price} DT</Card.Text>
          <Card.Text>likes:{product.like}</Card.Text>
          <Card.Text>Quantity:{product.quantity}</Card.Text>
          <div >
          <Button variant="primary" onClick={incrementLike}>Like</Button>
          <Button variant="primary" onClick={()=>{props.buy(product)}} disabled={product.quantity===0}>Buy</Button>
          </div>
        </Card.Body>
      </Card> 
      </> 
     );
}

export default ProductFunction;