import { useState, useEffect } from "react";
import { articles } from "../../ArticlesList";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {

    const [Articulo, setArticulo] = useState([])

    useEffect(() =>{
        const getArticle = new Promise((resolve, reject) =>{
            setTimeout(() =>{
            resolve(articles[0]);
            }, 2000);
        });
        getArticle.then((resolve) =>{
            setArticulo(resolve);
        }).catch((error) => {
            console.log(error);
        });
        }, []);


    return (
    
        <>

            <h2>Bienvenido a LuciawMusic (Provisorio) </h2>

            <ItemDetail item= {Articulo} />

        </>
    )
}