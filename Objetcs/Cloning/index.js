const circle = {
    radius: 1,
    draw () {
        console.log('draw');
    }
}

// const another = {}
// for (let key in cirlce)
//  another[key] = circle[key]

const another = Object.assign({}, circle);

const another2 = {...circle};

console.log(another)