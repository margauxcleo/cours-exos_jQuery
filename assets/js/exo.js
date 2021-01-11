// En utilisant les methodes xClass, ecrire un code jQuery qui permet de
// permuter les couleurs des paragraphes suivants : (rouge -> bleu), (bleu ->
// vert) et (vert -> rouge).

// de rouge à bleu
$(function() {
    $("#red").each(function() {
        $(this).removeClass("red").addClass("blue");
    });
});

//de bleu à vert 
$(function() {
    $("#blue").each(function() {
        $(this).removeClass("blue").addClass("green");
    });
});

//de vert à rouge
$(function() {
    $("#green").each(function() {
        $(this).removeClass("green").addClass("red");
    });
});