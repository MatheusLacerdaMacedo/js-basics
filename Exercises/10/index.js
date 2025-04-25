const marks = [80, 80, 50];

// Average = 70

//1-59:F
//60-69:D
//70-79:C
//80-89:B
//90-100:A


console.log(calculateGrad(marks));
function calculateGrad(marks) {

    let soma = 0;

    for (let i = 0; i < marks.length; i++) {
        soma += marks[i]
    }
    let mediaNota = soma / marks.length

    if (mediaNota <= 59) return 'F';
    else if (mediaNota <= 69) return 'D';
    else if (mediaNota <= 79) return 'C';
    else if (mediaNota <= 89) return 'B';
    else return 'A';

}