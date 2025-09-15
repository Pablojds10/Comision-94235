import Item from "./Item";
import Container from "react-bootstrap/Container"; 
import Row from "react-bootstrap/Row";

function ItemList ( {items} ) {
    return (
        <Container className="MT-4">
            <Row>
                {items.map (items => <Item key={items.id} items={items}/>)}
            </Row>
        </Container>
    )
}

export default ItemList;