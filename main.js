// 1-masala

// function air(arg1, arg2, arg3, arg4, arg5) {
//     console.log(arg1, arg2, arg3, arg4, arg5);
// }

// 2-masala

// const calculate = function(a, b, c, d, e) {
//     return {
//         sum: a + b,
//         difference: a - c,
//         product: a * d,
//         quotient: b / e,
//         remainder: a % c
//     };
// };
// const result = calculate(10, 5, 3, 4, 2);
// console.log(result);

// 3-masala


let word = prompt("Biror so'zni kiriting:");
let n = parseInt(prompt("Nechta chiqarmoqchisiz? "));

for (let i = 1; i <= n; i++) {
    let stars = word;
    for (let j = 1; j <= i; j++) {
        stars += word;
    }
    console.log(stars);
}