import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { traerUnPorducto } from "../../services/firestore";

export default function ItemDetailContainer() {

    const [Articulo, setArticulo] = useState({})

    const { id } = useParams();

    useEffect(() =>{

        traerUnPorducto( id )
        .then((resolve) =>{
            setArticulo(resolve);
        }).catch((error) => {
            console.log(error);
        });
        }, [id]);


    return (
    
        <>

            <ItemDetail item= {Articulo} />

        </>
    )
}