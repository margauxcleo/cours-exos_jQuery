// Méthodes utilisées:
// .add(elements): Crée un nouvel objet jQuery avec des éléments ajoutés à l'ensemble des
// éléments correspondants. Ici .add (elements) ajoute ou plus d'éléments "p" à ajouter à
// l'ensemble des éléments "textarea".
// !!!! add() n'ajoute pas un élément à l'élément précisé ! add() est pour dire "je veux que les textarea et les p aient tel ou telle propriété"
// .css(propertyName): récupère les propriétés de style calculées pour le premier élément de
// l'ensemble des éléments correspondants.

// Écrire un programme qui trouve toutes les zones de texte puis qui crée une bordure.
// Ajouter ensuite tous les paragraphes à l'objet jQuery pour définir leurs bordures en
// rouge

// // on recherhe les textarea et on crée une bordure
// $(function () {
//     $("textarea").each(function () {
//         $(this).css("border", "solid 1px black");
//     });
// });

// // on ajoute un p au textearea et on précise la bordure.
// $(function () {
//     $("p").each(function () {
//         $(this).add("p").css("border", "solid 3px red");
//     });
// });

// // correction plus rapide 
$('#button1').click(function () {
    $("textarea").add("p").css("border", "2px solid red");
});
