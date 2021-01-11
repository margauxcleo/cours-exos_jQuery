// En utilisant jQuery, ajoutez la classe "w3r_font_color" au dernier élément de
// paragraphe.

// Méthodes utilisées:
// .last(): Réduit l'ensemble des éléments correspondants au dernier de l'ensemble.
// .addClass(): ajoute la ou les classes spécifiées à chaque élément de l'ensemble des éléments
// correspondants.

$(function () {
    $("p").last().addClass('w3r_font_color');
});