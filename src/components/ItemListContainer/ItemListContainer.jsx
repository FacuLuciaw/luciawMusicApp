import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getItems } from "../../services/firestore";
import { ItemList } from "../ItemList/ItemList";

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
    
        <>

            <ItemList items={Articulos} />

        </>
    )
}