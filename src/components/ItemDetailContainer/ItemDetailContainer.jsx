import {useParams} from "react-router-dom";
import { useState, useEffect } from "react";
import { articles } from "../../ArticlesList";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer() {

    const [Articulo, setArticulo] = useState({})

    const { id } = useParams();

    useEffect(() =>{
        const getArticle = new Promise((resolve, reject) =>{
            setTimeout(() =>{

                const itemFound = articles.find(item =>{
                    return item.id === parseInt(id);
                });

            resolve(itemFound);
            }, 2000);

        });
        getArticle.then((resolve) =>{
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