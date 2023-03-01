import { Component } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


class ProductClass extends Component {
    constructor(props) {
        super(props);
    }
    state = {  
        product:this.props.product,
        like:this.props.product.like,
    }

    incrementLike=()=>
    {
    this.setState({like:this.state.like+1})
    }
    render() { 
        return ( 
        <>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={"../assets/images/" +this.state.product.img}/>
        <Card.Body>
          <Card.Title>{this.state.product.name}</Card.Title>
          <Card.Text>{this.state.product.description}</Card.Text>
          <Card.Text>{this.state.product.price} DT</Card.Text>
          <Card.Text>likes:{this.state.like}</Card.Text>
          <Card.Text>Quantity:{this.state.product.quantity}</Card.Text>
          <div >
          <Button variant="primary" onClick={this.incrementLike}>Like</Button>
          <Button variant="primary" onClick={()=>{this.props.buy(this.state.product)}} disabled={this.state.product.quantity===0}>Buy</Button>
          </div>
        </Card.Body>
      </Card> 
      </> 
      
      )}
}
 
export default ProductClass;