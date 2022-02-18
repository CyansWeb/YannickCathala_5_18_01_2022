// Récupération de nos produits stockés dans le Local Storage
let produitLocalStorage = JSON.parse(localStorage.getItem("produit"));
console.table(produitLocalStorage);


// *************************************** Affichage du panier ***********************************************

// *************** Affichage des produits ajoutés ***************

function displayBasket() {
    // Si panier vide
    if (produitLocalStorage === null) {
        document.getElementById('cartAndFormContainer').innerHTML = `<h1>Votre panier est vide</h1>`;
        // Sinon
    } else {
        for (let article of produitLocalStorage) {
            document.getElementById('cart__items').innerHTML +=
                `<article class="cart__item" data-id="${article.productId}" data-color="${article.productColor}">
          <div class="cart__item__img">
            <img src="${article.productImg}" alt="${article.productAltImg}">
          </div>
          <div class="cart__item__content">
            <div class="cart__item__content__description">
              <h2>Nom du produit : ${article.productName}</h2>
              <p>Couleur : ${article.productColor}</p>
              <p>Prix : ${article.productPrice} €</p>
            </div>
            <div class="cart__item__content__settings">
              <div class="cart__item__content__settings__quantity">
                <p>Qté : </p>
                <input type="number" class="itemQuantity" name="itemQuantity" min="1" max="100" value="${article.productQty}">
              </div>
              <div class="cart__item__content__settings__delete">
                <p class="deleteItem">Supprimer</p>
              </div>
            </div>
          </div>
        </article>`;
        }
    }
};
displayBasket();


// *************** Quantité Totale de produits ***************

// Quantité Totale dans le local Storage
function basketQty() {
    let qtyTotal = [];
    for (let qty of produitLocalStorage) {
        let qtyProductLocalStorage = qty.productQty;
        qtyTotal.push(qtyProductLocalStorage);
    }
    // Cas où on supprime tous les produits depuis le panier
    if (qtyTotal.length === 0) {
        document.getElementById('cartAndFormContainer').innerHTML = `<h1>Votre panier est vide</h1>`;
    } else {
        // Additionner les quantités
        let totalQuantity = qtyTotal.reduce(reducer);
        document.getElementById('totalQuantity').innerHTML = totalQuantity;
    }
}
basketQty();


// *************** Prix total dans le panier ***************

// Prix Total dans le local Storage
function basketPrice() {
    let priceTotal = [];
    for (let price of produitLocalStorage) {
        let priceProductLocalStorage = price.productPrice * price.productQty;
        priceTotal.push(priceProductLocalStorage);
    }
    // Cas où on supprime tous les produits depuis le panier
    if (priceTotal.length === 0) {} else {
        // Additionner les prix
        let totalPrice = priceTotal.reduce(reducer);
        document.getElementById('totalPrice').innerHTML = totalPrice;
    }
}
basketPrice();