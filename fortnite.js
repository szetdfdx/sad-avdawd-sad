uname = prompt('ваше імя');
online = confirm("ти граєш в фортніте?");
alert(online);
alert(`Привіт, ${uname}!`)
alert('якшо ти граєш в пабг мо... фортнайт, то це для тебе');
alert('погнали!');
let scores = 5

let q1 = prompt("Фортнайт був створений в... а)2016 б)2017 в)2018");
if (q1 == 'б' || q1 == 'б') {
    scores = scores + 2
}else {
    scores = scores - 1
}

let q2 = prompt('найдорожчий скін фортнайт це... а)Ikonik б)Galaxy в)Чудо-караул');
if (q2 == 'б' || q2 == 'б') {
    scores = scores + 2
}else {
    scores = scores - 1
}


let q3 = prompt("найкраща зброя в фортнайт це... а)важкий пістолет  б)гранатомет  в)штурмова гвинтівка");
if (q3 == 'а' || q3 == 'а') {
    scores = scores + 2
}else {
    scores = scores - 1
}


let q4 = prompt("найочікуваніший скін в фортнайт це... а)золотий агент б)майя в)агент джоунс");
if (q4 == 'в' || q4 == 'в') {
    scores = scores + 2
}else {
    scores = scores - 1
}

alert('Оу... схоже на перше запитання ти відповів неправильно, я дам тобі другий шанс.');

let q5 = prompt("Фортнайт був створений в... а)2016 б)2017 в)2018");
if (q5 == 'б' || q5 == 'б') {
    scores = scores + 2
}else {
    scores = scores - 1
}
alert(`Результат: ${scores}`)


