// function convertToJson(res) {
//     if (res.ok) {
//       return res.json();
//     } else {
//       throw new Error("Bad Response");
//     }
//   }
  
//   function getData(category = "tents") {
//     return fetch(`../json/${category}.json`)
//       .then(convertToJson)
//       .then((data) => data);
//   }


//   async function productList(selector){
       
//     const data = await getData();

//     console.log(data);
// }
function convertToJson(res){
    if (res.ok){
      return res.json();

    } else {
      throw new Error("Unable to retrieve data");

    }
  }

async function getData(){
    const promise = await fetch(`json/tents.json`);

    try{
      
        const elem = document.querySelector(".product-list");  


        const data = await convertToJson(promise);
        data.forEach(product => {
            
            const li = document.createElement("li");
            li.innerHTML = productCardTemplate(product);

            elem.appendChild(li);            
        
        });

    } catch (e) {
      console.log(`Caught error: ${e}`);
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

  getData();

