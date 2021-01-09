// Object property shorthand

const name = 'Berk'
const userAge = 22

const user = {
    name,
    age: userAge,
    location: 'San Francisco'
}

console.log(user)

// Object destructuring

const product = {
    label: 'Red bag',
    price: '30',
    stock: 55,
    salePrice: undefined
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label = 'gr', stock = 0 } = {}) => {
    console.log(type, label, stock)
}

transaction('order', product)