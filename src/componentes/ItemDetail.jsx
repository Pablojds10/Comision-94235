import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Counter from './Counter';

function ItemDetail({ item }) {
    return (
        <Container className="mt-5">
            <Row className="align-items-center">
                <Col md={6} className="text-center">
                    <Image src={item?.image} className="img-fluid rounded shadow-sm" width='300' height='300'/>
                </Col>
                <Col md={6}>
                    <h2 className="fw-bold">{item?.name}</h2>
                    <p className="text-muted">{item?.description}</p>
                    <h3 lassName="text-success">Price: ${item?.price}</h3>
                    <h5>Stock disponible: {item?.stock} units</h5>
                    <div className="mt-3">
                        <Counter item={item} />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default ItemDetail