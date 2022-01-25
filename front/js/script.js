// Variable CONSTANTE contenant l'adresse de l'api

const kanapApi = 'http://localhost:3000/api/products';

// Requête HTTP de type GET vers l'api

// Delete // FETCH + Object {} + clé .THEN
/*fetch(kanapApi)
    .then(function(response) {
        return response.json();
    })*/

fetch(kanapApi)
    .then((response) => response.json())

.then(function(products) {
        console.log(products);
        // Boucle FOR OF qui itère dans les products et les affichent sur la page avec innerHTML
        for (let data of products) {
            console.log(data);
            document.getElementById(
                "items"
            ).innerHTML += `<a href="./product.html?id=${data._id}">
              <article>
               <img
                     src="${data.imageUrl}"
                     alt="${data.altTxt}"/>
                 <h3 class="productName"> ${data.name}</h3>
                 <p class="productDescription"> ${data.description}</p>
             </article>
         </a>`;
        }
    })
    // Delete // Promise THEN CATCH -- Message d'erreur si la requête n'a pas de réponse
    .catch((error) => console.log('Erreur : ' + err));