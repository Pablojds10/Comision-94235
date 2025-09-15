import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import { useNavigate } from 'react-router'

function Item ({ items }) {
    const navigate = useNavigate()
    return (
        <Col ig={3} md={6} className='mt-4'>
            <Card>
                <Card.Img variant="top" src={items.thumbnail} />
                <Card.Body>
                    <Card.Title>{items.title}</Card.Title>
                    <Card.Text>
                        {items.category}
                    </Card.Text>
                    <Button onClick={() => navigate(`/Detail/${items.id}`)}>
                        Detalle
                    </Button>
                </Card.Body>
            </Card>
        </Col>       
    )
}

export default Item