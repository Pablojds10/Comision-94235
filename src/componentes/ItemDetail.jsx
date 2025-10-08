import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Counter from './Counter';

function ItemDetail({ item }) {
    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Image src={item?.image} className='img-fluyd' width='400' height='300'/>
                </Col>
                <Col>
                    <h2>{item?.name}</h2>
                    <p >{item?.description}</p>
                    <h3>Price: ${item?.price}</h3>
                    <h4>Stock: {item?.stock} units</h4>
                    <Counter item={item} />
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail