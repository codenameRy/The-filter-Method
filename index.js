//Selecting needed data with filter
var products = [
  { name: 'cucumber' , type: 'vegetable' },
  { name: 'banana' , type: 'fruit' },
  { name: 'beets' , type: 'vegetable' },
  { name: 'orange' , type: 'fruit' }
]

//For Loop

var filteredProducts = []

for (var i = 0; i < products.length; i++) {
  if (products[i].type === 'fruit') {
    filteredProducts.push(products[i])
  } 
}

console.log(filteredProducts)

//Refactor with filter method

var filter = products.filter((product) => {
  return product.type === 'vegetable'
})

console.log(filter)

//Complex Problem

//Quantity and price - Only keep type vegetable, quantity greater than 0, and price is less than 10
var newProducts = [
  { name: 'cucumber' , type: 'vegetable', quantity: 3, price: 2.50 },
  { name: 'banana' , type: 'fruit', quantity: 4, price: 1.20 },
  { name: 'beets' , type: 'vegetable', quantity: 5, price: 12.10 },
  { name: 'orange' , type: 'fruit', quantity: 8, price: 1.76 }
]

var latestProduct = newProducts.filter((product) => {
return product.type === 'vegetable' 
&& product.quantity > 0 
&& product.price < 10
});

console.log(latestProduct)

