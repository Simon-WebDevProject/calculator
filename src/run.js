//OdinProject - Web Calculator

let     storeEqu = '', //store entered equation
        optLock = true, //prevent double operation 
        result; //equation result

const   parser = new Parser(), //instance from expr-eval package
        
        //assignment for each button on calc
        clrBtn = document.querySelector('.btn-clr'),
        numBtn = document.querySelectorAll('.num'),
        optBtn = document.querySelectorAll('.opt'),
        equScreen = document.querySelector('.equation'),
        resultScreen = document.querySelector('.result'),
        equBtn = document.querySelector('.btn-equ'),
        delBtn = document.querySelector('.btn-del');


//button click functions
numBtn.forEach((btn) => btn.addEventListener('click', function(){
    storeEqu += this.textContent;
    equScreen.textContent += this.textContent;
    optLock = false;
}));
optBtn.forEach((btn) => btn.addEventListener('click', function(e){
    if(optLock == false){
        storeEqu += this.textContent;
        equScreen.textContent += ` ${this.textContent} `;
    }
    optLock = true;
}));
equBtn.addEventListener('click', function() {
    resultScreen.textContent = Parser.evaluate(storeEqu);
});
clrBtn.addEventListener('click', function() {
    storeEqu = '';
    equScreen.textContent = '';
    resultScreen.textContent = '';
    optLock = true;
});
delBtn.addEventListener('click', function(){
    let temp = storeEqu.split('');
    console.log(temp)
    temp.pop();
    storeEqu = temp.join("");

    equScreen.textContent = storeEqu;
});
