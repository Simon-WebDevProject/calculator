//OdinProject - Web Calculator
const   numBtn = document.querySelectorAll('.num'),
        optBtn = document.querySelectorAll('.opt');
        equation = document.querySelector('.equation');


numBtn.forEach((btn) => btn.addEventListener('click', function(){
    console.log(this);
    equation.textContent += this.textContent;
}));
optBtn.forEach((btn) => btn.addEventListener('click', function(){
    console.log(this);
    equation.textContent += ` ${this.textContent} `
}));
