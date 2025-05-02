const circle = {
    radius: 2
}

Object.defineProperty(circle, 'area', {
    value: 1,
    writable: false,
    enumerable: true,
    configurable: false
});

console.log(circle.area);

circle.area = 100;
console.log(circle.area)