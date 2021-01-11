function semantique() {
    $('.gras').css("font-weight", "bold");
    $('.souligne').css("text-decoration", "underline");
    $('.barre').css("text-decoration", "line-through");
    $('.italique').css("font-style", "italic");
};

// autre technique possible
// function semantique() {
//     $('#contenu .italique').wrap('<i></i>');
//     $('#contenu .gras').wrap('<b></b>');
//     $('#contenu .souligne').wrap('<u></u>');
//     $('#contenu .barre').wrap('<del></del>');
// }

function colorer() {
    $('.vert').css('color', 'green');
    $('.bleu').css('color', 'blue');
    $('.rouge').css('color', 'red');
    $('.orange').css('color', 'orange');
};

// autre technique possible
// function colorer() {
//     $('#contenu .rouge').wrap('<span style="color:red"></span>');
//     $('#contenu .vert').wrap('<span style="color:green"></span>');
//     $('#contenu .orange').wrap('<span style="color:orange"></span>');
//     $('#contenu .bleu').wrap('<span style="color:blue"></span>');
// }

function mettreTitres() {
    $('.titre1').wrap("<h1></h1>");
    $('.titre2').wrap("<h2></h2>");
};

// autre technique possible
// function mettreTitres() {
//     $('#contenu .titre1').wrap('<h1></h1>');
//     $('#contenu .titre2').wrap('<h2></h2>');
// }

function liensEnBoutons() {
    $('a').wrap("<button></button>");
};

// autre technique possible
// function liensEnBoutons() {
//     $('#contenu a').wrap('<button></button>');
// }

function dupliquerTexte() {
    $('#contenu').clone().appendTo('body');
};

// autre technique possible
// function dupliquerTexte() {
//     $('#contenu').clone().appendTo('#contenu');
// }

function regrouperTitres() {
    $('.titre1').wrapAll("<div></div>");
    $('.titre2').wrapAll("<div></div>");
};

// autre technique possible
// function regrouperTitres() {
//     $('h1').wrapAll('<div></div>');
//     $('h2').wrapAll('<div></div>');
// }

function regrouperLiens() {
    $('a').wrapAll("<div></div>");
};

// autre technique possible
// function regrouperLiens() {
//     $('#contenu a').wrapAll('<div></div>');
// }

function viderBoutons() {
    $('button').empty();
    $('button').remove();
};

// autre technique possible
// function viderBoutons() {
//     $('button').empty();
// }

function enleverLiens() {
    $('a').remove();
};

// autre technique possible
// function enleverLiens() {
//     $('#contenu a').remove();
// }

function enleverGras() {
    $('.gras').css("font-weight", "normal");
};

// autre technique possible
// function enleverGras() {
//     $('#contenu b').remove();
// }

function enleverItalique() {
    $('.italique').css("font-style", "normal");
};

// autre technique possible
// function enleverItalique() {
//     $('#contenu i').remove();
// }

// function enleverDecor() {
//     $('.barre').css("text-decoration", "none");
//     $('.vert').css('color', 'black');
//     $('.bleu').css('color', 'black');
//     $('.rouge').css('color', 'black');
//     $('.orange').css('color', 'black');
// };

// la correction n'a pas la même utilité.
// ici on retire tout ce qui est décoré, dans ma fonction je retirais le css mais pas les éléments eux-mêmes. 
function enleverDecor() {
    // :not permet de ne pas prendre en compte ce contenu là
    // donc on dit de remove tout sauf html / body / p / button
    $('#contenu *:not(html):not(body):not(p):not(button)').remove();
}

// function voirCode() {
//     $('#contenu').appendTo('body').html();
//     console.log($('#contenu').html());
// };

// autre technique possible
function voirCode() {
    $('#contenu').text($('p').html());
}



