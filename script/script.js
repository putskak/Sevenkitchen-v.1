//loader function
window.addEventListener('load', function(){
    var hiddenBody = this.document.querySelector('.hide');
    var backgroundScreen = document.querySelector('body');
    var loadingScreen =  document.querySelector('.loader');
    backgroundScreen.classList.add('background-color');
    hiddenBody.style.display = 'none';
   
    
    setTimeout( function() {
        backgroundScreen.classList.remove('background-color');
        loadingScreen.style.display = 'none';
        hiddenBody.style.display = 'block';

    },2000);
    

});

//rupiah format price
function formatTxt(cobacoba) {
    let format = 'Rp ' + cobacoba.toLocaleString('id-ID');
    var priceandGram = format +' /box' 
    document.getElementById('priceForFood').innerHTML = priceandGram;
}
formatTxt(25000);

function formatTxt2(cobacoba2){
    let format1 = 'Rp ' + cobacoba2.toLocaleString('id-ID');
    var priceandGram1 = format1 +' /box' 
    document.getElementById('priceForFood2').innerHTML = priceandGram1;
}
formatTxt2(15000);

function formatTxt3(cobacoba3){
    let format2 = 'Rp ' + cobacoba3.toLocaleString('id-ID');
    var priceandGram2 = format2 +' /box' 
    document.getElementById('priceForFood3').innerHTML = priceandGram2;
}
formatTxt3(15000);

function formatTxt4(cobacoba4){
    let format3 = 'Rp ' + cobacoba4.toLocaleString('id-ID');
    var priceandGram3 = format3 +' /box' 
    document.getElementById('priceForFood4').innerHTML = priceandGram3;
}
formatTxt4(10000);

var buttonClass = document.querySelectorAll('#buttonFirstFood');

buttonClass.forEach((button, indexArray) => {
button.addEventListener('click', function(){
    
     button.classList.add('buttonHover');
    setTimeout(function(){

        button.classList.remove('buttonHover');
        
    },300);

    window.location = 'https://wa.me/628123193955' 

});
});
