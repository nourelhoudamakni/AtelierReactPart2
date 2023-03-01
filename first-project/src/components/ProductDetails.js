import { useParams } from "react-router-dom";
import products from "../products.json"
import Container from "react-bootstrap/Container";

function ProductDetails () {
    const {name} = useParams();
    return (
        <>
         <Container>
        {products.map((e) => {
        if(e.name === name)
            {
                return (
                    <>
                     <Container>
                        <img src={"../assets/images/" + e.img} />
                        <h1>{e.name}</h1>
                        <h3>Description</h3>
                        <p>{e.description}</p>
                        <h3>Price</h3>
                        <p>{e.price} dt</p>
                        <h3>Likes</h3>
                        <p>{e.like}</p>
                    </Container>

                    </>
                )
            }
        })
            }
        </Container>
        </>
      );
}

export default ProductDetails;