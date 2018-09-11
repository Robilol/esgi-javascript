function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);

}

function capitalize(string) {
    let words = string.split(" ");
    let result = [];

    words.forEach(function (el) {

        result.push(ucfirst(el));
    });


    return result.join(" ")
}

function camelCase(string) {
    let words = string.split(" ");
    let result = "";

    words.forEach(function (el) {

        result += ucfirst(el);
    });

    return result;
}

function snake_case(string) {
    let words = string.toLowerCase().split(" ");

    return words.join('_');
}

function prop_access(string) {
    let words = string.split(".");

    words.forEach(function (el) {

        result += ucfirst(el);
    });
}

function leet(string) {
    let crypt = {
        'a' : 4,
        'o' : 0
    };

    let char = Array.from(string);

    let result = [];

    char.forEach(function (el) {
        result.push((el in crypt) ? crypt[el] : el);
    });

    return result.join("");
}

function verlan(string) {
    let words = string.split(" ");

    let result = [];

    words.forEach(function (el) {
        result.push(el.split("").reverse().join(""));
    });

    return result.join(" ")
}

function yoda(string) {
    return string.split(" ").reverse().join(" ")
}

function vig(string, key) {
    let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

    let string = string.split("");
    let key = string.split("");

    string.forEach(function (el) {
        let pos = alphabet.indexOf(el)+1;
    });


    Chiffré[i] = (Texte[i] + Clés[i]) modulo 26
}


console.log(ucfirst("hello world"));
console.log(capitalize("hello world"));
console.log(camelCase("hello world"));
console.log(snake_case("hello world"));

console.log(leet("anaconda"));
console.log(verlan("Hello world"));
console.log(yoda("Hello world"));