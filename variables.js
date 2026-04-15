// let = değişken

// const = sabit değer

// var kapsam sorunları yüzünden useless
// örneğin bir ifin içinde yapılan değişikliğe dışarıdan erişilememesi gerekir. ama var kullanılınca erişlebiliyor.

let score = 0;

score = 30;

console.log(score);

score + 10;

console.log(score);

//////////////////////////////////////

const ad = "orhan";

console.log(ad);

// const kullanırken doğrudan tutulan veri değişmez. ama const içinde bir object varsa içindeki veri değişir. 
// örneğin const içinde bir dizi var. 

const person = {name: "Orhan", age: 19}

// buradaki name ve age değerleri değişir ama değişkenlerin isimleri değişmez.

person.name = "Ahmet";
person.age = 23;

console.log(person.name+" "+person.age)