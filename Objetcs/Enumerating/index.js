const circle = {
    radius: 1,
    draw () {
        console.log('draw')
    }

}
for (let key in circle)
    console.log(ket, circle[key]);
for (let key of Object.keys(circle))
    console.log(key)
for (let entry of Object.entries(circle))
    console.log(entry)
if ('color' in circle) console.log('yes')