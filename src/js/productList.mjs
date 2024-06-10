import { getData } from "./productData.mjs";

export default async function productList(selector){
    
    try{
    
        const data = await getData();

        renderList(selector, data);


    } catch (e) {
        console.log(`The error is: ${e}`)
    }

}


function productCardTemplate(product) {
    return `<li class="product-card">
    <a href="product_pages/index.html?product=${product.Id}">
    <img
    src="${product.Image}"
    alt="Image of ${product.Name}"
    />
    <h3 class="card__brand">${product.Brand.Name}</h3>
    <h2 class="card__name">${product.NameWithoutBrand}</h2>
    <p class="product-card__price">$${product.FinalPrice}</p></a>
    </li>`
}

function renderList(selector, list) {

    const elem = document.querySelector(selector);

    const filteredList = list.filter(product => product.Id !== "989CG" && product.Id !== "880RT");

    const toRender = filteredList.map(productCardTemplate);

    elem.insertAdjacentHTML("beforeend",toRender.join(""));

}