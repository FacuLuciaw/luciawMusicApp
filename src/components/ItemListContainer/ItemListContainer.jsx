import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { articles } from "../../ArticlesList";

export default function ItemListContainer() {

    const [Articulos, setArticulos] = useState([])

    useEffect(() =>{
        const getArticles = new Promise((resolve, reject) =>{
            setTimeout(() =>{
            resolve(articles);
            }, 2000);
        });
        getArticles.then((resolve) =>{
            setArticulos(resolve);
        }).catch((error) => {
            console.log(error);
        });
        }, []);


    return (
    
        <>

            <h2>Bienvenido a LuciawMusic (Provisorio) </h2>

            <ItemList items={Articulos} />

        </>
    )
}