// contoh 1
const func1 = function(a,b) {
    return a + b;
};
console.log(func1(3,4));

// contoh 2
const func2 = (a,b) => {
    return a + b;
}
console.log(func2(2,3));

// contoh 3
const func3 = (a,b) => a + b;
console.log(func3(4,4));

// contoh 4 --> satu parameter didalam kurung
const func4 = (dobel) => dobel + dobel;
console.log(func4(7));

// NOTE : dapat menghilangkan return dan kurawal karena hanya ada single expression

// contoh 5 --> satu parameter tanpa kurung
const func5 = dobel => dobel + dobel;
console.log(func5(9));

// NOTE : contoh 6 dan 7 menggunakan array helper

// contoh 6 
const numbers1 = [1,2,3,4,5];
const kalidua1 = numbers1.map(function(number){
    return 2 * number;
});
console.log(kalidua1);

// contoh 7 
const numbers2 = [4,5,6,7,8];
const kalidua2 = numbers2.map(number => 2 * number);
console.log(kalidua2);


