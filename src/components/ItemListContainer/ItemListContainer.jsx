import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItems } from "../../services/firestore";
import { ItemList } from "../ItemList/ItemList";
import '../ItemListContainer/itemListContainer.css'

export default function ItemListContainer() {

    const [Articulos, setArticulos] = useState([])

    const { categoryId } = useParams()

    useEffect(() =>{

        getItems()
        .then((resolve) =>{
            setArticulos(resolve);
        }).catch((error) => {
            console.log(error);
        });
        }, [categoryId]);


    return (
    
        <div className="container-itemListContainer">

            <ItemList items={Articulos} />

        </div>
    )
}