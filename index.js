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
