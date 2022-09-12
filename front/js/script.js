// Récupérer les produits sur l'API via le port 3000.
const url = "http://localhost:3000/api/products/";

//Fonction GET pour afficher les produits.
function getProducts() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //itération pour chaque produit du fichier JSON.
      for (let i = 0; i < data.length; i++) {
        let imageUrl = data[i].imageUrl;
        let name = data[i].name;
        let price = data[i].price;
        let id = data[i]._id;
        let description = data[i].description;
        let altTxt = data[i].altTxt;

        /* console.log(data[i]); */
        //afficher les produits via innerHTML
        let items = `<a href="./product.html?id=${id}">
                          <article>
                            <img src="${imageUrl}" alt="${altTxt}">
                            <h3 class="productName">${name}</h3>
                            <p class="productDescription">${description}</p>
                            <p>Prix : ${price}€</p>
                          </article>
                        </a>`;
        document.querySelector(".items").innerHTML += items;
      }
    })

    .catch((err) => console.log(err));
}
getProducts();
