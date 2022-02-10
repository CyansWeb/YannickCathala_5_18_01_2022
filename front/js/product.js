// URL de l'API
let URL_API = 'http://localhost:3000/api/products/';

// Récupération de la chaîne de requête dans l'url ==> WINDOW LOCATION SEARCH
const QUERYSTRING_URL_ID = window.location.search;
console.log(QUERYSTRING_URL_ID);

// Extraction de l'id ==> URL SEARCHPARAMS
const URL_ID = new URLSearchParams(QUERYSTRING_URL_ID);
const ID = URL_ID.get('id');

// Récupération des éléments en fonction de l'ID    --> FETCH (then catch)
function getOneProduct() {
    fetch(URL_API + ID)
        .then(res => res.json())
        .then(function(data) {
            console.log(data);
            document.querySelector('.item__img').innerHTML = `<img id="item__img" src="${data.imageUrl}" alt="${data.altTxt}">`;
            document.getElementById('title').innerHTML = `${data.name}`;
            document.getElementById('price').innerHTML = `${data.price}`;
            document.getElementById('description').innerHTML = `${data.description}`;
            // Choix de la couleur
            let color = data.colors;
            for (let i in color) {
                document.getElementById('colors').innerHTML += `<option value="${color[i]}">${color[i]}</option>`
            };
        })
        .catch(error => alert(error))
};
getOneProduct();


// ******************************************* PANIER **********************************************************

//Ajout au panier en cliquant sur le bouton
document.querySelector('#addToCart').addEventListener('click', function(e) {

    let productId = ID;
    let productName = document.getElementById('title').innerText;
    let productImg = document.getElementById('item__img').src;
    let productAltImg = document.getElementById('item__img').alt;
    let productPrice = document.getElementById('price').innerText;
    let productColor = document.getElementById('colors').value;
    let productQty = document.getElementById('quantity').value;

    //Récupération des éléments du produit sélectionné pour le panier
    let productSelected = {
        productId,
        productName,
        productImg,
        productAltImg,
        productPrice,
        productColor,
        productQty
    };

    // Local Storage
    let productLocalStorage = JSON.parse(localStorage.getItem("product"));

    // Ajout du product
    function ajoutProd() {
        productLocalStorage.push(productSelected);
        localStorage.setItem("product", JSON.stringify(productLocalStorage));
    }


    /* Message de confirmation
    const CONFIRMATION = alert(${productQty} ${productName} de couleur $ {productColor} `a bien été ajouté à votre panier !); 
    */


    // Les conditions pour ajouter le produit
    function ajoutPanier() {
        // Message de confirmation
        const CONFIRMATION = alert(`Vous venez d'ajouter ${productQty} ${productName} de couleur ${productColor} à votre panier !`);
        // si le panier est rempli

        if (productLocalStorage) {
            //  HELP !!!  POURQUOI == 
            //  si le panier contient déjà le produit sélectionné avec la même couleur 
            const sameProduct = productLocalStorage.find((element) => element.productId == productId & element.productColor == productColor);
            if (sameProduct) {
                sameProduct.productQty = parseInt(productSelected.productQty) + parseInt(sameProduct.productQty);
                localStorage.setItem("product", JSON.stringify(productLocalStorage));
                CONFIRMATION;
                console.table(productLocalStorage);
                // si le panier contient des produits différents
            } else {
                ajoutProd();
                CONFIRMATION;
                console.table(productLocalStorage);
            }
            // Si le panier est vide
        } else {
            productLocalStorage = [];
            ajoutProd();
            CONFIRMATION;
            console.table(productLocalStorage);
        }
    }

    // Message d'alerte si probleme couleur / quantité = Ajout au panier si OK
    for (let i in productSelected) {
        if (productColor == '') {
            alert("Merci de sélectionner votre couleur !");
            break;
        } else if (productQty == 0 || productQty > 99) {
            alert("Merci de renseigner le nombre d'articles !");
            break;
        } else {
            ajoutPanier();
            break;
        }
    }
});