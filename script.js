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

/*TABBED PANE*/
const tabs = document.querySelectorAll('[data-tab-target]');
const mainTabs = document.querySelectorAll('.main-tab');


tabs.forEach(tab=>{
    tab.addEventListener('click', () => {
        midBar.classList.remove('active');
        //Tab content
        const target = document.querySelector(tab.dataset.tabTarget);
        mainTabs.forEach(mainTab=>mainTab.classList.remove('active'));

        //List
        tabs.forEach(tab=>{
            tab.classList.remove('active');
        })

        

        target.classList.add('active');
        tab.classList.add('active');
    })
})

/*GENERATE DOCUMENT*/

function getDoc(){
    const doc = document.getElementById("type").value;
    const generateSpan = document.querySelector('.data-holder');

    generateSpan.textContent=doc;
}

/*CHANGE PASSWORD SUCCESSFULLY*/
function showSuccess(){
    const span = document.querySelector('.success');
    const prevPass = document.getElementById('current');
    const newPass = document.getElementById('new');

    if(prevPass.value=="" || newPass.value==""){
        alert("PLEASE COMPLETE YOUR INPUT!");
    }
    else
        span.textContent=" SUCCESS! "
}

/*SIGN IN*/
function signIn(){
    const user = document.getElementById('username');
    const pass = document.getElementById('password');
    const toPortal = document.querySelector('.toPortal');

    if(user.value=="" || pass.value==""){
        alert("PLEASE COMPLETE YOUR INPUT!");
    }
    else{
        toPortal.href="portal-main.html";

    }
}


/*TO TOP BUTTON HOME PAGE*/
let topBtn = document.getElementById("toTop-btn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

function toTop() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
    