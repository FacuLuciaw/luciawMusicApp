import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, collection, doc, setDoc, addDoc, Timestamp } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDDPVeyZQlRIGmy6lUjgX7T7ATx7x8JfeY",
    authDomain: "react37070.firebaseapp.com",
    projectId: "react37070",
    storageBucket: "react37070.appspot.com",
    messagingSenderId: "319813585645",
    appId: "1:319813585645:web:0abddf80e70e58d4111ae4"
};

const appFirebase = initializeApp(firebaseConfig);

const appFirestore = getFirestore(appFirebase);

export function testDatabase(){

    console.log(appFirestore);

}

export async function getItems(){

    const itemCollection = collection(appFirestore, "ropa");

    const itemSnapshot = await getDocs(itemCollection);

    let respuesta = itemSnapshot.docs.map( doc => {

        return {

            ...doc.data(),
            id: doc.id

        }


    } )

    return respuesta;

}

export async function traerUnPorducto(id) {

    const docRef = doc( appFirestore, "ropa", id );

    const docSnapshot = await getDoc( docRef );

    return docSnapshot.data( {id: docSnapshot.id, ...docSnapshot.data()} )

}

export async function exportDataToFirestore(){

    const productos = [
        {
            "id": 1,
            "category": "Remera",
            "nombre": "Remera David Bowie",
            "precio": 5000,
            "foto": "../img/remera-davidbowie-hombre.jpg",
            "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus assumenda nemo esse nulla, voluptatibus vero, nesciunt eius quas corrupti saepe placeat? Est id asperiores, provident culpa minus voluptas unde!"
        }, 
    
        {
            "id": 2,
            "category": "Remera",
            "nombre": "Remera Guns and Roses",
            "precio": 5000,
            "foto": "../img/remera-guns-hombre.jpg",
            "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus assumenda nemo esse nulla, voluptatibus vero, nesciunt eius quas corrupti saepe placeat? Est id asperiores, provident culpa minus voluptas unde!"
        }, 
    
        {
            "id": 3,
            "category": "Remera",
            "nombre": "Remera Jimi Hendrix",
            "precio": 5000,
            "foto": "../img/remera-jimihendrix-hombre.jpg",
            "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus assumenda nemo esse nulla, voluptatibus vero, nesciunt eius quas corrupti saepe placeat? Est id asperiores, provident culpa minus voluptas unde!"
        }, 
    
        {
            "id": 4,
            "category": "Buzo",
            "nombre": "Buzo Nirvana",
            "precio": 7500,
            "foto": "../img/buzo-nirvana-hombre.jpg",
            "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus assumenda nemo esse nulla, voluptatibus vero, nesciunt eius quas corrupti saepe placeat? Est id asperiores, provident culpa minus voluptas unde!"
        }, 
    
        {
            "id": 5,
            "category": "Buzo",
            "nombre": "Buzo Rolling Stones",
            "precio": 7500,
            "foto": "../img/buzo-rolling-hombre.jpg",
            "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus assumenda nemo esse nulla, voluptatibus vero, nesciunt eius quas corrupti saepe placeat? Est id asperiores, provident culpa minus voluptas unde!"
        }, 
    
        {
            "id": 6,
            "category": "Buzo",
            "nombre": "Buzo Ramones",
            "precio": 7500,
            "foto": "../img/buzo-ramones-hombre.jpg",
            "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus assumenda nemo esse nulla, voluptatibus vero, nesciunt eius quas corrupti saepe placeat? Est id asperiores, provident culpa minus voluptas unde!"
        }, 
    
        {
            "id": 7,
            "category": "Remera",
            "nombre": "Remera AC/DC",
            "precio": 5000,
            "foto": "../img/remera-acdc-mujer.jpg" ,
            "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus assumenda nemo esse nulla, voluptatibus vero, nesciunt eius quas corrupti saepe placeat? Est id asperiores, provident culpa minus voluptas unde!"
        }, 
    
        {
            "id": 8,
            "category": "Remera",
            "nombre": "Remera Black Sabath",
            "precio": 5000,
            "foto": "../img/remera-blacksabath-mujer.jpg",
            "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus assumenda nemo esse nulla, voluptatibus vero, nesciunt eius quas corrupti saepe placeat? Est id asperiores, provident culpa minus voluptas unde!"
        }, 
    
        {
            "id": 9,
            "category": "Remera",
            "nombre": "Remera Guns and Roses",
            "precio": 5000,
            "foto": "../img/camisa-guns-mujer.jpg",
            "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus assumenda nemo esse nulla, voluptatibus vero, nesciunt eius quas corrupti saepe placeat? Est id asperiores, provident culpa minus voluptas unde!"
        }, 
    
        {
            "id": 10,
            "category": "Buzo",
            "nombre": "Buzo Ramones",
            "precio": 7500,
            "foto": "../img/buzo-ramones-mujer.jpg",
            "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus assumenda nemo esse nulla, voluptatibus vero, nesciunt eius quas corrupti saepe placeat? Est id asperiores, provident culpa minus voluptas unde!"
        }, 
    
        {
            "id": 11,
            "category": "Buzo",
            "nombre": "Buzo AC/DC",
            "precio": 7500,
            "foto": "../img/buzo-acdc-mujer.jpg",
            "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus assumenda nemo esse nulla, voluptatibus vero, nesciunt eius quas corrupti saepe placeat? Est id asperiores, provident culpa minus voluptas unde!"
        }, 
    
        {
            "id": 12,
            "category": "Buzo",
            "nombre": "Buzo Pink FLoyd",
            "precio": 7500,
            "foto": "../img/buzo-pinkfloyd-mujer.jpg",
            "descripcion": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam temporibus assumenda nemo esse nulla, voluptatibus vero, nesciunt eius quas corrupti saepe placeat? Est id asperiores, provident culpa minus voluptas unde!"
        }

    ];

    const itemCollection = collection(appFirestore, "ropa");

    productos.forEach( item => {

        const newDoc = doc(itemCollection)

        setDoc(newDoc, item).then (res =>{

            console.log("Documento Guardado:", newDoc.id );

        })

        .catch( ( error => console.log("Error obteniendo los datos:", error))
        )

    })

}

export async function createBuyOrder( dataOrder ) {

    const orderCollectionRef = collection(appFirestore, "orders");

    const dateTimestamp = Timestamp.now();

    const dataOrderWithDate = {

        buyer: dataOrder.buyer,

        items: dataOrder.items,

        total: dataOrder.total,

        date: dateTimestamp

    };

    console.log(dataOrderWithDate);

    const orderCreated = await addDoc(orderCollectionRef, dataOrderWithDate);

return orderCreated;

}

export default appFirebase