import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Counter from './Counter';

function Detail({ item }) {
    return (
        <Container className="mt-5">
            <Row className="mt-5">
                <Col md={6}>
                    <Image src={item?.thumbnail} />
                </Col>
                <Col md={6}>
                    <h1>{item?.title}</h1>
                    <p >{item?.description}</p>
                    <h3>Price: ${item?.price}</h3>
                    <h4>Stock: {item?.stock} units</h4>
                    <Counter/>
                </Col>
            </Row>
        </Container>
    )
}

export default Detail