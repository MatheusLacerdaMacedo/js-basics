

function showNubers(limit) {
    for(let i = 0; i <= limit; i++) {
        if(i % 2 === 0) {
            console.log(i+ " É par");
        }else{
            console.log(i +' É impar')
        }
    }
}
showNubers(10)