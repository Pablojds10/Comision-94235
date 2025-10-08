import { useState, useContext } from 'react'
import { CartContext } from '../context/CartContext'
import Button from 'react-bootstrap/Button'

function Counter({ item }) {
    const [count, setCount] = useState(0)
    const { addToCart } = useContext(CartContext)

    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)

    const handleAddToCart = () => {
        addToCart({...item, count})
    }

    return (
        <div>
            <p>{count}</p>
            <Button onClick={handleAdd} >+</Button>
            <Button onClick={handleSub} variant='danger' disabled={count === 0} >-</Button>
            <Button onClick={handleAddToCart} variant='success' disabled={count === 0} >
                AGREGAR
            </Button>
        </div>
    )
}

export default Counter