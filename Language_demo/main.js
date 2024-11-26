const hidden = document.getElementById('hidden');
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');
const button3 = document.getElementById('button3');
const button4 = document.getElementById('button4');



button1.addEventListener('click', function (){
    button1.style.transform = 'scale(0.9)';
    button1.style.background = 'black';
    button1.style.border = '15px solid black';
    button3.style.transform = 'scale(1.1)';
    button3.style.background = 'green';
    button3.style.border = '15px solid lightgreen';
    button4.style.transform = 'scale(0.9)';
    button4.style.opacity = '0.6';
    button2.style.transform = 'scale(0.9)';
    button2.style.opacity = '0.6';
});

button2.addEventListener('click', function () {
    button2.style.transform = 'scale(0.9)';
    button2.style.background = 'black';
    button2.style.border = '15px solid black';
    button4.style.transform = 'scale(0.9)';
    button4.style.opacity = '0.6';
    button1.style.transform = 'scale(0.9)';
    button1.style.opacity = '0.6';
    button3.style.transform = 'scale(1.1)';
    button3.style.background = 'green';
    button3.style.border = '15px solid lightgreen';
});

button4.addEventListener('click', function () {
    button4.style.transform = 'scale(0.9)';
    button4.style.background = 'black';
    button4.style.border = '15px solid black';
    button3.style.transform = 'scale(1.1)';
    button3.style.background = 'green';
    button3.style.border = '15px solid lightgreen';
    button2.style.transform = 'scale(0.9)';
    button2.style.opacity = '0.6';
    button1.style.transform = 'scale(0.9)';
    button1.style.opacity = '0.6';
});

button3.addEventListener('click', function () {
    button3.style.transform = 'scale(1.1)';
    button3.style.background = 'green';
    button3.style.border = '15px solid lightgreen';
    button1.style.transform = 'scale(0.9)';
    button1.style.opacity = '0.6';
    button2.style.transform = 'scale(0.9)';
    button2.style.opacity = '0.6';
    button4.style.transform = 'scale(0.9)';
    button4.style.opacity = '0.6';
    hidden.innerHTML = 'at';
    hidden.style.color = 'red';
});