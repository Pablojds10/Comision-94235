import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router-dom'

function Item ({ items }) {
    const navigate = useNavigate()
    return (
        <Col lg={3} md={6} sm={12} className="mb-4 d-flex justify-content-center">
            <Card className="shadow-sm border-0" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={items.image} className='img-fluid' height='200'/>
                <Card.Body className="text-center">
                    <Card.Title className="fw-bold">{items.name}</Card.Title>
                    <Card.Text className="text-muted">
                        {items.category}
                    </Card.Text>
                    <Button variant="dark" onClick={() => navigate(`/Detail/${items.id}`)}>
                        Ver detalle
                    </Button>
                </Card.Body>
            </Card>
        </Col>       
    )
}

export default Item