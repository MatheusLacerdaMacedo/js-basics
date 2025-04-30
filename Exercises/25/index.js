const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5},
]

function sort(year,rating){
    const result = []
    
    for(let i = 0; i < movies.length; i++) {
        if(movies[i].year === year && movies[i].rating > rating) {
            result.push(movies[i].title)
        }
    }
    return result;

}
console.log(sort(2018,4))