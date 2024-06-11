import { findProductById } from "./productData.mjs";
import { getParam, setLocalStorage, loadHeaderFooter } from "./utils.mjs";

let currentProduct = {};

loadHeaderFooter();



const param = getParam('product');

productDetails(param);


renderProductDetails();


function renderProductDetails() {
  const productContainer = document.querySelector(".product-detail");

  productContainer.innerHTML = `
    <div>
      <h2>${currentProduct.Name}</h2>
      <img id="productImage" class="divider" src="${currentProduct.Image}" alt="" />
      <p>${currentProduct.DescriptionHtmlSimple}</p>
      <p>Price: $${currentProduct.ListPrice}</p>
      <button id="addToCart" data-id="${currentProduct.Id}">Add to Cart</button>
    </div>
  `;
}

async function productDetails(productId) {
  currentProduct = await findProductById(productId);
  if (currentProduct) {
    renderProductDetails();
  } else {
    console.error("Product not found.");
  }
}

function addToCart() {
  setLocalStorage("so-cart", currentProduct);
}

document.addEventListener('click',addToCart);

export default productDetails;
export { addToCart };