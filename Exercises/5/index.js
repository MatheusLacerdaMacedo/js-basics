//speed Limit = 70
// 5 -> 1 point
// Math.floor(1.3)
// 12 points -> suspendend

function checkSpeed(speed) {
    const speedLimit = 70 //limite velocidade
    const kmPerPoints = 5; // 5km excesso 1++

    if (speed <= speedLimit) {
        console.log('Ok');
    } else {
        const points = Math.floor((speed - speedLimit) / kmPerPoints);
        if (points >= 12 ) {
            console.log('License suspended')
        } else {
            console.log('Points', points)
        }
    }
}
checkSpeed(80)
