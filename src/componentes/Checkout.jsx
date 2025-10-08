import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { serverTimestamp } from 'firebase/firestore'
import { createOrder } from '../firebase/db'

function Checkout () {
    const { getTotal, cart } = useContext(CartContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target

        const email = form.email.value
        const name = form.name.value
        const phone = form.phone.value

        const order = {
            buyer: {
                email,
                name,
                phone
            },
            total: getTotal(),
            items: cart,
            date: serverTimestamp()
        }

        createOrder(order)

    }

    if (cart.length === 0) {
        return <h2 className='text-center mt-5'>No hay elementos en el carrito</h2>
    }


    return (
        <div className='d-flex flex-column justify-content-center align-items-center'>
            <Form className='w-50 mx-auto mt-5' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Dirección de Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingrese email" required />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Apellido y Nombres</Form.Label>
                    <Form.Control type="Nombre" placeholder="Perez, Alberto" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Telefono</Form.Label>
                    <Form.Control type="celular" placeholder="+5491140000000" required />
                </Form.Group>    

                <Button variant="dark" type="submit">
                    Finalizar Compra 🖤🤍🖤
                </Button>
            </Form>        
        </div>
        
    )
}

export default Checkout