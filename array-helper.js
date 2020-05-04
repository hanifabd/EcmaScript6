// foreach()
const days1 = ["Senin", "Selasa", "Rabu"];
for (let i = 0; i < days1.length; i++) {
    printDay(days1[i]);
}
function printDay(day) {
    console.log(day);
}

const days2 = ["Kamis", "Jumat", "Sabtu"];
days2.forEach(
    day => {console.log(day)}
)

// map()
var numbers1 = [1,2,3,4,5];
var result1 = [];

for (let i = 0; i < numbers1.length; i++) {
    result1.push(prosesresult(numbers1[i]));
}
function prosesresult (number) {
    return number * 2;
}
console.log(result1);

var numbers2 = [5,6,7,8,9];
var result2fe, result2map = [];

result2fe = numbers2.forEach((number) => number * 2);
result2map = numbers2.map((number) => number * 2);

console.log(result2fe);
console.log(result2map);

// filter()

// 1 kondisi
var products = [
    { name: 'cucumber', type: 'vegetable' },
    { name: 'banana', type: 'fruit' },
    { name: 'apple', type: 'fruit' },
    { name: 'orange', type: 'fruit' },
    { name: 'carrot', type: 'vegetable' },
];

var filteredproduct = [];

for (var i = 0 ; i < products.length ; i++) {
    if(products[i].type == "fruit") {
        filteredproduct.push(products[i]);
    }
}

console.log(filteredproduct);

var filteredproduct2 = [];

filteredproduct2 = products.filter((products) => products.type == "fruit");
console.log(filteredproduct2);

// 2 kondisi atau lebih
var products3 = [
    { name: 'cucumber', type: 'vegetable', color: 'green' },
    { name: 'banana', type: 'fruit', color: 'yellow' },
    { name: 'apple', type: 'fruit', color: 'red' },
    { name: 'orange', type: 'fruit', color: 'yellow'},
    { name: 'carrot', type: 'vegetable', color: 'orange'},
];

var filteredproduct3 = [];

filteredproduct3 = products3.filter((products3) => {
    return products3.type == 'fruit' && products3.color == 'yellow' ;
})

console.log(filteredproduct3);

// find()
// NOTE : perbedaan nya dengan filter() adalah find() hanya mengembalikan satu buah data saja;

var heroes = [
    { name: 'juggernaut' },
    { name: 'nyx' },
    { name: 'io' }
];

var findhero = '';

for(var i = 0; i < heroes.length ; i++) {
    if(heroes[i].name == 'nyx') {
        findhero = heroes[i];
        break;
    }
}

console.log(findhero);

var findhero2 = '';

findhero2 = heroes.find((heroes) => heroes.name == 'io');
console.log(findhero2);

// every() dan some()
// NOTE :
// every() hanya memberikan nilai true ketika semua data sesuai dengan kondisi yang ditentukan sedangkan method 
// some() akan memberikan nilai true ketika minimal ada satu data yang sesua dengan kondisi yang ditentukan.

var computers = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

function reqCheck(minRam, dataComputers) {
    var allComputerCanRunProgram = true;
    var onlySomeComputerCanRunProgram = false;

    dataComputers.forEach(computer => {
        if(computer.ram < minRam) {
            allComputerCanRunProgram = false;
        } else {
            onlySomeComputerCanRunProgram = true;
        }
    })

    return {
        every: [allComputerCanRunProgram],
        some: [onlySomeComputerCanRunProgram]
    }
}

console.log(reqCheck(16,computers).every);//false
console.log(reqCheck(1,computers).every);//true
console.log(reqCheck(16,computers).some);//true
console.log(reqCheck(1,computers).some);//true

var computers2 = [
    { name: 'Apple', ram: 24 },
    { name: 'Compaq', ram: 4 },
    { name: 'Acer', ram: 32 }
];

console.log(computers2.every((computer) => computer.ram > 16));
console.log(computers2.every((computer) => computer.ram > 1));
console.log(computers2.some((computer) => computer.ram > 16));
console.log(computers2.some((computer) => computer.ram > 1));

// reduce()
var numbers3 = [1,2,3];
var sum = 0;

for(var i = 0; i < numbers3.length ; i++) {
    sum = sum + numbers3[i];
}

console.log(sum);

// cara 1
console.log(numbers3.reduce((sum, number) => { return sum + number}, 0));

// cara 2
console.log(numbers3.reduce((sum, number) => sum + number));