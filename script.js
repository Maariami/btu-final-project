let allProducts = [];

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    allProducts = products.slice(0, 8);
    displayProducts(allProducts);
  })
  .catch((error) => console.error("Error fetching products:", error));

function displayProducts(products) {
  const container = document.getElementById("products-container");
  container.innerHTML = "";
  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product");
    productDiv.innerHTML = `
            <img src="${product.image}" alt="Product Image">
            <h2>${product.title}</h2>
            <p><strong>Rating:</strong> ${product.rating.rate}/5</p>
            <p class="price">$${product.price}</p>
            
            
        `;
    container.appendChild(productDiv);
  });
}

document.getElementById("search-box").addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(query)
  );
  displayProducts(filteredProducts);
});
