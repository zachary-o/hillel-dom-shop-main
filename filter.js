const data = [
  {
    id: 1,
    name: "Invicta Men's Pro Diver",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    category: "Dress",
  },
  {
    id: 11,
    name: "Invicta Men's Pro Diver 2",
    img: "https://m.media-amazon.com/images/I/71e04Q53xlL._AC_UY879_.jpg",
    price: 74,
    category: "Dress",
  },
  {
    id: 2,
    name: "Timex Men's Expedition Scout ",
    img: "https://m.media-amazon.com/images/I/91WvnZ1g40L._AC_UY879_.jpg",
    price: 40,
    category: "Sport",
  },
  {
    id: 3,
    name: "Breitling Superocean Heritage",
    img: "https://m.media-amazon.com/images/I/61hGDiWBU8L._AC_UY879_.jpg",
    price: 200,
    category: "Luxury",
  },
  {
    id: 4,
    name: "Casio Classic Resin Strap ",
    img: "https://m.media-amazon.com/images/I/51Nk5SEBARL._AC_UY879_.jpg",
    price: 16,
    category: "Sport",
  },
  {
    id: 5,
    name: "Garmin Venu Smartwatch ",
    img: "https://m.media-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg",
    price: 74,
    category: "Casual",
  },
];

//========================

const productsWrapper = document.querySelector('.products');
const searchInput = document.querySelector('.search');
const categories = document.querySelector('.categories');
const priceRange = document.querySelector('.priceRange');
const priceValue = document.querySelector('.priceValue');


const displayProducts = (arrayOfProducts) => {
  const productStr = arrayOfProducts.map(product => `
    <div class="product">
      <img src="${product.img}" alt="" />
       <span class="name">${product.name}</span>
      <span class="priceText">$ ${product.price}</span>
    </div>
  `).join('')

  productsWrapper.innerHTML = productStr;

}
displayProducts(data);

//===========================

searchInput.addEventListener('keyup', (event) => {
  const value = event.target.value.toLowerCase();
  
  if (value) {
    const filteredArray = data.filter(item => item.name.toLowerCase().includes(value))
    displayProducts(filteredArray);

  } else {
    displayProducts(data);
  }
}) 

//===========================

const setCategories = () => {
  const allCategories = data.map(product => product.category);

  const filteredCategories = allCategories.filter((item, index) => 
      allCategories.indexOf(item) === index
    );


  categories.innerHTML = filteredCategories.map(category => `
  <span class='category'>${category}</span>
  `).join('')

  categories.addEventListener('click', (event) => {
    const selectedCategory = event.target.textContent;

    if (selectedCategory) {
      
      const sortedProductsByCategory = data.filter(product => product.category === selectedCategory)
      displayProducts(sortedProductsByCategory);
  
    } else {
      displayProducts(data);
    }
  })

};
setCategories();

//===========================


const setPrices = () => {
  const priceList = data.map(product => product.price)

  const minPrice = Math.min(...priceList)
  const maxPrice = Math.max(...priceList)

  priceRange.min = minPrice;
  priceRange.max = maxPrice;
  priceRange.value = maxPrice;
  priceRange.step = 10;

  priceValue.textContent = `$ ${maxPrice}`

  priceRange.addEventListener('input', (event) => {
    const value = event.target.value;
    priceValue.textContent = `$ ${value}`

    const filteredArray = data.filter(product => product.price <= value);
    displayProducts(filteredArray);
  })
}

setPrices();





// 1. Створити функцію, яка виводитиме товари на сторінці.
// Функція повинна приймати один параметр – масив елементів та вставити підсумковий рядок у контентер для продуктів.
// Підказки: за допомогою функції map модифікувати кожний елемент у рядок.



// 2. Повісити оброблювач подій keyup на елемент input.
// При введенні значення фільтрувати масив даних, які відображаються на сторінці.
// Врахувати те, що користувач може вводити значення різним регістром
// Підказка: необхідно зробити фільтрацію за допомогою способу includes().



// 3. Зробити функцію, яка виводитиме всі категорії на сторінці.
// І так само повісити обробник подій, за допомогою делегування подій, на клік кожної категорії.
// При натисканні на певну категорію повинні показувати продукти, які належать до цієї категорії.



// 4. Зробити функцію setPrices, яка буде:
//   4.1. Вичіслювати мінімальну та максимальну ціну
//   4.2. Проставити ці значення для <input type="range"/>
//   4.3. Повісити на <input type="range"/> обробник подій типу input. І на зміни значення range потрібно фільтрувати товари на сторінці

