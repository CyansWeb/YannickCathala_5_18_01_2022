// URL de l'API
let URL_API = 'http://localhost:3000/api/products/';

// Récupération de la chaîne de requête dans l'url ==> WINDOW LOCATION SEARCH
const QUERYSTRING_URL_ID = window.location.search;
//console.log(QUERYSTRING_URL_ID);

// Extraction de l'id ==> URL SEARCHPARAMS
const URL_ID = new URLSearchParams(QUERYSTRING_URL_ID);
const ID = URL_ID.get('id');

// Récupération de nos éléments en fonction de l'ID
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