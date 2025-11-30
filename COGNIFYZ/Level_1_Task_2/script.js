let btn1 = document.querySelector('.btn1')
btn1.addEventListener('click', () => {
    btn1.style.backgroundColor = 'red';

})



function getRandomcolor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

let btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', () => {
    btn2.style.backgroundColor = getRandomcolor();
})


let btn3 = document.querySelector('.btn3')
btn3.addEventListener('click', () => {
    btn3.style.backgroundColor = 'YELLOW';

})


let btn4 = document.querySelector('.btn4')
btn4.addEventListener('click', () => {
    alert(`Congrat!\n you are live at ${Date()}`)
})


let btn5 = document.querySelector('.btn5')
let p = document.querySelector('.res')



function calculateSum() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Calculate sum
    var sum = num1 + num2;

    // Display result
    document.getElementById('result').innerHTML = 'Sum: ' + sum;
}


