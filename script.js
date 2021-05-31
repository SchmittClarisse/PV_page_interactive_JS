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
const navbar = document.querySelector('div.navbar'); 
const bootstrap = document.querySelector('head link'); 
const main = document.querySelector('main'); 

navbar.addEventListener('doubleclick', function() {     
  bootstrap.setAttribute('disabled', 'disabled');
}); 

main.addEventListener('doubleclick', function() {     
  bootstrap.removeAttribute("disabled");
}); 