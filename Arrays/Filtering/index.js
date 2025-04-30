const numbers = [1, -1, 2, 3];

const filtered = numbers.filter(function (value) {
    return value >= 0;
})


const Restaurants = [
    {id:1, name:'Top', isOpen: false},
    {id:2, name:'zera', isOpen: true}
]

const openRestaurants = Restaurants.filter(function(value) {
    return value.isOpen === true;
})
console.log(openRestaurants)


console.log(filtered)