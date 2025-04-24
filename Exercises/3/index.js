function isLandscape (width, height) {
    if (width > height) {
        return "It's Landscaped"
    }else if (height > width){
        return "It's portrait"
    }else {
        return "The two numbers are equal"
    }
}
console.log(isLandscape(20,30))