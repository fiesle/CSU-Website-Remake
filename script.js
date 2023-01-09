/*IMAGE SLIDER*/

let counter=1;
setInterval(function(){
    document.getElementById('radio-btn' + counter).checked=true;
    counter++;
    if(counter>7){
        counter=1;
    }
},5000);

/*HAMBURGER MENU*/
const hamburgerMenu = document.querySelector(".hamburger-menu");
const rightBar = document.querySelector(".right-nav");
const midBar = document.querySelector(".mid-nav");

hamburgerMenu.onclick= function(){
    midBar.classList.toggle('active');
    rightBar.classList.toggle('active');
}