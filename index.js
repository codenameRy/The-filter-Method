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

//Choosing When to Filter?
var post = { id: 4, title: 'New Post' };

var comments = [
  { postId: 4, content: 'awesome post' },
  { postId: 3, content: 'it was okay' },
  { postId: 4, content: 'neat'}
]

function commentsForPost (post, comments) {
  return comments.filter(function (comment) {
    return comment.postId === post.id;
  })
}

console.log(commentsForPost(post, comments))

//Coding Challenge 1 - Filtering Values

//Filter the array of numbers using the filter helper, creating a new array that contains only numbers greater than 50

var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];

var filteredNumbers = numbers.filter((number) => {
  return number > 50
})

console.log(filteredNumbers)

//Coding Challenge 2 - Handling Permissions with Filter

//Filter the array of users, only returning users with admin access

var users = [
 { id: 1, admin: true },  
 { id: 2, admin: false },
 { id: 3, admin: false },
 { id: 4, admin: false },
 { id: 5, admin: true },
];

var filteredUsers = users.filter((user) => {
  return user.admin === true;
})

console.log(filteredUsers)

