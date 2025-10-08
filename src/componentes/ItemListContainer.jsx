import { useState, useEffect, } from "react"
import { useParams } from "react-router"
import { getItems, getItemByCategory } from "../firebase/db"
import ItemList from "./ItemList"

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id }  = useParams()
    
    useEffect (() => {
        if (id) {
            getItemByCategory(id)
                .then (data => setItems(data))
        } else          
        getItems(id)
            .then (data => setItems(data))
    }, [id])

    return (
        <ItemList items={items}/>
    )
}

export default ItemListContainer