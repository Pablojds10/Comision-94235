import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button'

function Counter() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        console.log('El valor del contador es: ' + count)
    }, [count])

    const handleAdd = () => setCount(count + 1)
    const handleSub = () => setCount(count - 1)

    return (
        <div>
            <p>{count}</p>
            <Button onClick={handleAdd} >+</Button>
            <Button onClick={handleSub} variant='danger' disabled={count === 0} >-</Button>
            <Button variant='success'>AGREGAR</Button>
        </div>
    )
}

export default Counter