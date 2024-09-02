const products = [
  {
    "title": "Sunny Beach Paradise",
    "image": "https://dummyimage.com/600x400/000/fff&text=Sunny+Beach+Paradise",
    "description": "A serene beach paradise with golden sand, palm trees, and crystal-clear waters under the bright sun."
  },
  {
    "title": "Mountain Explorer",
    "image": "https://dummyimage.com/600x400/000/fff&text=Mountain+Explorer",
    "description": "A thrilling adventure through rugged mountain landscapes, perfect for explorers and nature lovers."
  },
  {
    "title": "Mountain Explorer Adventure",
    "image": "https://dummyimage.com/600x400/000/fff&text=Mountain+Explorer+Adventure",
    "description": "A more challenging exploration through the mountain wilderness for adrenaline seekers."
  },
  {
    "title": "City Lights at Night",
    "image": "https://dummyimage.com/600x400/000/fff&text=City+Lights+at+Night",
    "description": "The city comes alive at night, with shimmering lights and busy streets creating a vibrant atmosphere."
  },
  {
    "title": "City Lights at Night: Urban Dream",
    "image": "https://dummyimage.com/600x400/000/fff&text=City+Lights+at+Night+Urban+Dream",
    "description": "An urban dreamscape illuminated by the glowing lights of the city’s night scene."
  },
  {
    "title": "Rustic Countryside Home",
    "image": "https://dummyimage.com/600x400/000/fff&text=Rustic+Countryside+Home",
    "description": "A charming countryside escape with a rustic wooden home nestled in a field of wildflowers."
  },
  {
    "title": "Modern Art Museum",
    "image": "https://dummyimage.com/600x400/000/fff&text=Modern+Art+Museum",
    "description": "A sleek and modern art museum showcasing the latest in contemporary and abstract art."
  },
  {
    "title": "Modern Art Museum Experience",
    "image": "https://dummyimage.com/600x400/000/fff&text=Modern+Art+Museum+Experience",
    "description": "An immersive experience at the modern art museum, blending art and technology."
  },
  {
    "title": "Ocean Waves Crashing",
    "image": "https://dummyimage.com/600x400/000/fff&text=Ocean+Waves+Crashing",
    "description": "The power of the ocean on display as waves crash against a rocky shoreline."
  },
  {
    "title": "Ocean Waves and Serenity",
    "image": "https://dummyimage.com/600x400/000/fff&text=Ocean+Waves+and+Serenity",
    "description": "Find serenity by the ocean as the waves gently crash against the shore."
  }
];

const productList = document.getElementById('product-list');
const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");

//display products
const displayAllProducts = (products) => {
  productList.innerHTML = ''; 
  products.forEach((product) => {
    const{title,image,description} = product;
    const card = `
      <div class="card">
        <img src="${image}"/>
        <h2>${title}</h2>
        <p>${description}</p>
      </div>
    `;
    productList.innerHTML += card;
  });
}
//display all products initially
displayAllProducts(products);

//for clicking Search Button
searchBtn.addEventListener('click',(e) => {
  e.preventDefault();
  // console.log("clicked");
  const searchInput = searchBox.value.trim().toLowerCase();
  
  // Filter products
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchInput)
  );

  // Display the filtered products
  displayAllProducts(products);

  // Apply background color to the filtered products
  const displayedCards = document.querySelectorAll('.card');
  filteredProducts.forEach(filteredProduct => {
    displayedCards.forEach(card => {
      const cardTitle = card.querySelector('h2').textContent.toLowerCase();
      if (filteredProduct.title.toLowerCase() === cardTitle) {
        card.style.backgroundColor = '#3b44c9';
      }
    });
  });
});