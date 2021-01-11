// // permet d'attendre que le chargement de la page soit complet avant d'appeler le JS
// $(document).ready(function () {
//     $("#but").click(function () {
//         console.log("Hello World!");
//     });
// });

// // L'équivalent en raccourci de ce script est:
// $(function() {
//     $("#but").click(function () {
//         console.log("Hello World!");
//     });
// });

// on peut préciser un paramètre optionnel, dans l'appel à l'id #but, on ajoute l'appel dans body qui est la zone de recherche 
// $(id, zone de recherche)
$(function() {
    $("#but", "body").click(function () {
        console.log("Hello World!");
    });
});

// modifier le contenu d'une balise au clic sur le bouton 
// $(function() {
//     $("#but", "body").click(function () {
//         // text() prendra tout et montrera même les balises
//         // $("#container").text("<p>Hello</p>");
//         // html interprète les balises et n'affiche que le contenu
//         // $("#container").html("<p>Hello</p>");
//         // pour ajouter du contenu au début
//         $("div#container").prepend("<h1>Hello</h1>");
//         // pour ajouter du contenu à la fin
//         $("div#container").append("<h1>Bye!</h1>");
//     });
// });

// méthode .attr(nomAttribut) qui permet de rechercher la valeur de l'attribut passé en paramètre 
// ici on recherche donc l'attribut classe du premier p qui sera trouvé
$(function() {
    console.log($("p").attr("class"));
});
// affiche blue dans la console 

// pour récupérer tous les attributs de tous les p, on fait une boucle avec each()
$(function() {
    $("p").each(function() {
        console.log($(this).attr("class"));
    })  ;
});
// affiche blue red blue

// méthode .length qui permet de déterminer le nb d'éléments séléctionnés
// ici on recherche donc l'attribut classe du premier p qui sera trouvé
$(function() {
    console.log($("p").length);
});
// affiche 3 car on a trois paragraphes 

// méthode .eq qui va prendre un indice (i) et nous permettre de choisir l'élément ayant l'indice passé en paramètre
// ici on recherche donc le p ayant l'indice 0
$(function() {
    // console.log($("p").eq(0));
    // on peut aussi le faire de cette façon:
    console.log($("p:eq(0)"));
});
// affiche l'objet p.blue

// Opérations 
// p:lt(i): paragraphe inférieur à l'indice i
// p:gt(i): paragraphe supérieur à l'indice i
// p:even : paragraphe d'indice pair et p:odd : paragraphe d'indice impair 
// p:first : premier paragraphe 
// p:last: dernier paragraphe 
// input:text : on récupère tous les input de type texte

// on ajoute du contenu à l'enfant ayant l'index 1
// au clic
// $(function() {
//     $("#but", "body").click(function () {
//         $("div p:nth-child(1)").prepend("<p>test </p>");
//     });
// });

// ou directement
// $("div p:nth-child(1)").prepend("<p>test </p>");

// on peut supprimer un attribut de classe ou en ajouter 
$(function() {
    // // removeAttr(attribut) : pour supprimer un attribut
    // $("p").eq(0).removeAttr("class");
    // // attrib(typeAttribut, valeur)
    // $("p").eq(0).attr("class", "red");

    // on supprime la classe blue des p d'indice pair, et on leur ajoute la classe red 
    $("p").even().removeClass("blue").addClass("red");
});


// Méthode val() pour récupérer la valeur contenue dans un attribut 
// $("#nom").val("John Wick");
$(function() {
    $("#but").click(function() {
        // on utilse la méthode val() pour récupérer la valeur de l'élément ayant l'id #nom
        // on peut directement passer une valeur en paramètre
        console.log($("#nom").val());
    });
});

//  Méthode .css() pour récupérer la valeur css d'une propriété spécifiée
$(function() {
    // ici on demande a avoir la valeur de la propriété color pour p 
    // le premier p a été modifié en class "red", donc c'est cette info qu'on aura 
    console.log($("p").eq(0).css("color"));
});

// Méthode .css() peut prendre pls paramètres et peut nous permettre de modifier la valeur de la propriété indiquée
$(function() {
    // ici on précise que la propriété color prendra la valeur "green", même si sa classe reste blue 
    console.log($("p").eq(0).css("color", "green"));
    // on peut faire des changements multiples en ajoutant les {}
    console.log($("p").eq(0).css({"color": "white", "background-color" : "red"}));
});

// Méthodes CSS dites xClass
// .addClass() : ajoute une classe
// .removeClass(): supprime une classe 
// .hasClass(): teste l'existence d'une classe 
// .toggleClass(): retire ou ajoute une classe 

// ------------------------------------------------------------------
//  Utilisation de la méthode wrap() permettant d'entourer les éléments sélectionnés (ici les balises p) par des balises passées en paramètres (div)
$(function() {
    $("#result").click(function() {
        // $("#p p").wrap("<div></div>");
        // va entourer les deux p de la div #p dans une nouvelle div
        $("#p p").wrapAll("<div></div>");
    });
});
