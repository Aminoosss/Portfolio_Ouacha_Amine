function affichage_tableau()
{
   document.write("<table width=30% border=2px;>");
    for(i=0; i<=5; i++)
    {
        document.write("<tr><td></td> <td></td> <td></td></tr>")
    }
    document.write("</table>");
}

function affichage_tableau2()
{
    var ligne = prompt("donner le nombre de ligne a afficher");

    document.write("<table width=60% border=2;>");
    for(i=0; i<ligne; i++) {
     
        document.write("<tr><td>"+i+"</td> <td>a</td> <td>b</td></tr>")
    }
        document.write("</table>");
}
function connexion() {
    var c = prompt("votre identifiant");
    var d = prompt("votre mdp");
    
    if (c == "admin" && d == "admin") {
        document.write("Bienvenue :      "+ c);
    }
    else {
        alert("acces refusé");
    }
}
function connexion2() {
    var i =0;
    do {
    var c = prompt("votre identifiant");
    var d = prompt("votre mdp");
    
    if (c == "admin" && d == "admin") {
        document.write("Bienvenue :      "+ c);
        break;
    }
    else 
        alert("acces refusé");
        i += 1;
    
    }
    while ( i < 3 )
    if (i==3)
    alert("délai dépassé")
}
function fun_switch()
{
    var color = prompt("entrez une couleur");

    switch(color)
    {
        case "vert": document.body.style.background = "green";;
        break;
        case "VERT": document.body.style.background = "green";;
        break;
        case "bleu": document.body.style.background = "blue";;
        break;
        case "BLEU": document.body.style.background = "blue";;
        break;
            default: alert("couleur non définie");
    }
}

function caractere() 
{
    var chaine= prompt ("donnez un mot")
    document.write(chaine.toUpperCase()+"<br>");
    document.write(chaine.toLowerCase()+"<br>");
    document.write("la chaine contient "+chaine.length+" caractères <br>");
    document.write("la premiere lettre est "+chaine.substr(0,1) +"<br>");
}

function caractere2() 
{
    var chaine= prompt ("donnez un mot")
    document.write("<b> le mot saisie est : "+chaine.toLowerCase()+"<br></b>");
    document.write("il se compose de "+chaine.length+" caractères <br>");
    document.write("la premiere lettre est "+chaine.substr(0,1) +"<br>");
    document.write("la derniere lettre est "+chaine.substr(-1) +"<br>");
}
var nbClic=0;
function clic(){
    nbClic++;
    if (nbClic>=3){
        alert("perdu !!! \nVous avez cliqué " +nbClic+ "fois"); 
    }
}
function raz() {
    nbClic=0;
}