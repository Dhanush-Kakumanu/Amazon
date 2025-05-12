import { products } from "../data/products.js";
import { addToCart } from "../data/cart.js";

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const id = urlParams.get('id');
  const product = products.find((product) => product.id === id);
  console.log(id);
  if (!product) {
    document.querySelector('.js-product').innerHTML = `
      <div class="error-message">
        Product not found.
      </div>
    `;
  }
  else {
    const productHTML = `
      <div class="product-image-container">
        <img class="product-image"
            src="${product.image}">
      </div>
      <div class="product-name">
        ${product.name}
      </div>
      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>
      <div class="product-price">
        $${(product.priceCents / 100).toFixed(2)}
      </div>
      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>
      <button class="add-to-cart-button 
        button-primary 
        js-add-to-cart"
        data-product-id="${product.id}">
        Add to Cart
      </button>
    `;
    document.querySelector('.js-product').innerHTML = productHTML;

    const addToCartButtons = document.querySelectorAll('.js-add-to-cart');
    addToCartButtons.forEach((button) => {
      button.addEventListener('click', (event) => {
        const productId = event.currentTarget.dataset.productId;
        const product = products.find((product) => product.id === productId);
        if (product) {
          const cartItem = {
            id: product.id,
            name: product.name,
            priceCents: product.priceCents,
            quantity: 1,
          };
          function updateCartQuantity() {
            let cartQuantity = 0;
            cart.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
            });
            document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
          }
          document.querySelectorAll('.js-add-to-cart')
          .forEach((button) => {
            button.addEventListener('click', () => {
              const productId = button.dataset.productId;
              addToCart(productId);
              updateCartQuantity();
            });
          });
        }
      });
    });
  }
});