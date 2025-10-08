import Item from "./Item";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row";

function ItemList ( {items} ) {
    return (
        <Container className='mt-5'>
            <Row>
                {items.map (items => <Item items={items} key={items.id}/>)}
            </Row>
        </Container>
    )
}

export default ItemList