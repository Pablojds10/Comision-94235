import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import withLoading from "../hoc/WithLoading";
import { useParams } from "react-router";

const ItemListWithLoading = withLoading(ItemList)

function ItemListContainer() {
    const [items, setItems] = useState([])
    const { id }  = useParams()
  
    useEffect (() => {
        const url = 'https://dummyjson.com/products'
        const urlCategory = `https://dummyjson.com/products/category/${id}`

        fetch(id ? urlCategory : url)
            .then (res => res.json())
            .then (data => setItems(data.products))
    }, [id])    

    return (
        <ItemListWithLoading items={items} />
    )
}

export default ItemListContainer