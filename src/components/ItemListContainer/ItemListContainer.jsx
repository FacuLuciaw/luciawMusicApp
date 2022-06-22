import { useState, useEffect } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { articles } from "../../ArticlesList";

export default function ItemListContainer() {

    const [Articulos, setArticulos] = useState([])

    const { categoryId } = useParams()

    useEffect(() =>{
        const getArticles = new Promise((resolve, reject) =>{
            setTimeout(() =>{

                if(categoryId === undefined)
                resolve(articles);
            
                else{
                    const itemsFound = articles.filter( item =>{
                        return item.category === categoryId;
                    })
                    resolve(itemsFound);
                }

            }, 2000);
        });
        getArticles.then((resolve) =>{
            setArticulos(resolve);
        }).catch((error) => {
            console.log(error);
        });
        }, [categoryId]);


    return (
    
        <>

            <h2>Bienvenido a LuciawMusic (Provisorio) </h2>

            <ItemList items={Articulos} />

        </>
    )
}