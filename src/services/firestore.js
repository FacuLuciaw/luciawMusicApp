import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, getDoc, collection, doc } from "firebase/firestore";

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

    // const itemCollection = collection(appFirestore, "ropa");

    const docRef = doc( appFirestore, "ropa", id );

    const docSnapshot = await getDoc( docRef );

    return docSnapshot.data( {id: docSnapshot.id, ...docSnapshot.data()} )

    }

export default appFirebase