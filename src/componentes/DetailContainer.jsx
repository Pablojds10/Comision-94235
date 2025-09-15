import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import Detail from './Detail'

function DetailContainer () {
    const [item, setItem] = useState ()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id])

    return (
        <Detail item={item}/>
    )
}

export default DetailContainer