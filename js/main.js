// ------------------EXERCICE 1 --------------------------------
//localiser l'élément titre et lui ajouter une class
document.getElementById('titreTableau').className = 'titreCentre';

// changement de l'attribut max de couleur rgb
let query = document.querySelector('tbody .rgb max');
query = 300;

//changement de la valeur de l'attribut min de arrondi
let queryAllarrondi = document.querySelectorAll('tbody .arrondi min');
queryAllarrondi = 2;

//------------------EXERCICE 2 --------------------------------

//etape 1 : localiser le paragraphe concerné et écrire la fonction de changement de style
 let changementStyle = document.getElementById('para');
 changementStyle.addEventListener('click', function(){
    changementStyle.style.backgroundColor = "#f00";
    changementStyle.style.Color = "#000";
    changementStyle.style.border = "2px";

 },false);
