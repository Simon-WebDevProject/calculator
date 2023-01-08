//OdinProject - Web Calculator

let     storeEqu = '', //store entered equation 
        result = 0, //equation result
        optLock = true; //prevent double operation

const   parser = new Parser(), //instance of expr-eval package
        
        //assignment for DOM elements
        clrBtn = document.querySelector('.btn-clr'),
        numBtn = document.querySelectorAll('.num'),
        optBtn = document.querySelectorAll('.opt'),
        equScreen = document.querySelector('.equation'),
        resultScreen = document.querySelector('.result'),
        equBtn = document.querySelector('.btn-equ'),
        delBtn = document.querySelector('.btn-del');

function reset(){
    storeEqu = '';
    result = '';
    equScreen.textContent = '';
    resultScreen.textContent = '';
    optLock = true;
}

//button click functions
numBtn.forEach((btn) => btn.addEventListener('click', function(){
    if(resultScreen.textContent != ''){
        reset();
    }  
    if(storeEqu.length < 22){ 
        storeEqu += this.textContent;
        equScreen.textContent = storeEqu;
        optLock = false;
    }
}));
optBtn.forEach((btn) => btn.addEventListener('click', function(){
    if(optLock == false || this.textContent == ' - '){
        storeEqu += this.textContent;
        equScreen.textContent = storeEqu;
        resultScreen.textContent = '';
    }
    optLock = true;
}));
equBtn.addEventListener('click', function(){
    result = Parser.evaluate(storeEqu);
    resultScreen.textContent = result;
    storeEqu = result;
});
clrBtn.addEventListener('click', function(){
    reset();
});
delBtn.addEventListener('click', function(){
    if(typeof storeEqu == 'string'){        
        let temp = storeEqu.split('');
        temp.pop();
        storeEqu = temp.join("");
        equScreen.textContent = storeEqu;
    }
});

//keyboard lisner
window.addEventListener('keydown', function(e){
    let key = document.querySelector(`.key${e.key}`);
    console.log(e.key);
    key.click();
});
