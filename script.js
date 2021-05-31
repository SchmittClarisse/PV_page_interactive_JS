//Fonctionnalité 1
const footer = document.getElementsByTagName("footer")[0];
let count = 0;
footer.addEventListener("click", function(){
count +=1
console.log(`clique numéro ${count}`);
});

//Fonctionnalité 2
const navbar = document.getElementById("navbarHeader");
const bugerMenu = document.querySelector("button.navbar-toggler");
bugerMenu.addEventListener("click", function (){
    navbar.classList.toggle('collapse');
});

//Fonctionnalité 3
const card1 = document.querySelectorAll("div.col-md-4")[0];
const btnEdit1 = document.querySelectorAll('button.btn-outline-secondary')[0];
btnEdit1.addEventListener('click', function() {
    card1.style.color = "red";
});

//Fonctionnalité 4
const card2 = document.querySelectorAll("div.col-md-4")[1];
const btnEdit2 = document.querySelectorAll('button.btn-outline-secondary')[1];
btnEdit2.addEventListener('click', function() {
    if (card2.style.color === 'green'){
        card2.style.color = 'black';} 
    else {card2.style.color = "green";}
});

//Fonctionnalité 5
const navbar1 = document.querySelector('div.navbar');
const bootstrap = document.querySelector('link');
const navbar2 = document.querySelector('main');

navbar1.addEventListener('dblclick', hideNavbar);
navbar2.addEventListener('dblclick', showNavbar);

function hideNavbar() { 
  bootstrap.setAttribute('disabled', 'disabled');
}
function showNavbar() {
  bootstrap.removeAttribute("disabled");
}