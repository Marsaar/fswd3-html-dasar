//arithmethic
let a = 5
let b = 10
let c = a + b;
let d = a - b;
let e = a * b;
let f = a / b;
let g = a % b;
document.getElementById("demo4").innerHTML = "a + b = " +c;
document.getElementById("demo5").innerHTML = "a - b = " +d;
document.getElementById("demo6").innerHTML = "a * b = " +e;
document.getElementById("demo7").innerHTML = "a / b = " +f;
document.getElementById("demo8").innerHTML = "a % b = " +g;

//Assignment
a += 5;
document.getElementById("demo9").innerHTML = "a = 5, (a += 5) = " +a;
a -= 5;
document.getElementById("demo10").innerHTML = "a = 10, (a -= 5) = " +a;
a *= 5;
document.getElementById("demo11").innerHTML = "a = 5, (a *= 5) = " +a;
a **= 2;
document.getElementById("demo12").innerHTML = "a = 25, (a **= 2) = " +a;
a /= 5;
document.getElementById("demo13").innerHTML = "a = 625, (a /= 5) = " +a;
a %= 5;
document.getElementById("demo14").innerHTML = "a = 125, (a %= 5) = " +a;
//mengubah nilai a kembali ke 5
a += 5;

//Comparison
document.getElementById("demo15").innerHTML = "a == b adalah " +(a == b);
document.getElementById("demo16").innerHTML = "a < b adalah " +(a < b);
document.getElementById("demo17").innerHTML = "a > b adalah " +(a > b);
document.getElementById("demo18").innerHTML = "a != b adalah " +(a != b);
document.getElementById("demo19").innerHTML = "a <= b adalah " +(a <= b);
document.getElementById("demo20").innerHTML = "a >= b adalah " +(a >= b);

//Logical
let a1 = true;
let b1 = false;
document.getElementById("demo21").innerHTML = "a && b adalah " +(a1 && b1);
document.getElementById("demo22").innerHTML = "a && a adalah " +(a1 && a1);
document.getElementById("demo23").innerHTML = "b && b adalah " +(b1 && b1);
document.getElementById("demo24").innerHTML = "a || b adalah " +(a1 || b1);
document.getElementById("demo25").innerHTML = "a || a adalah " +(a1 || a1);
document.getElementById("demo26").innerHTML = "b || b adalah " +(b1 || b1);
document.getElementById("demo27").innerHTML = "!a adalah " +!(a1);
document.getElementById("demo28").innerHTML = "!b adalah " +!(b1);

//Bitwise
let a2 = 00000110;
let b2 = 00001100;
let c1 = a2 & b2;
let d1 = a2 | b2;
let e1 = a2 ^ b2;
let f1 = ~ a2 ;
let g1 = a2 << b2;
let h1 = a2 >> b2;
let i1 = a2 >>> b2;
document.getElementById("demo29").innerHTML = "a & b = " +c1;
document.getElementById("demo30").innerHTML = "a | b = " +d1;
document.getElementById("demo31").innerHTML = "a ^ b = " +e1;
document.getElementById("demo32").innerHTML = "~a = " +f1;
document.getElementById("demo33").innerHTML = "a << b = " +g1;
document.getElementById("demo34").innerHTML = "a >> b = " +h1;
document.getElementById("demo35").innerHTML = "a >>> b = " +i1;

//Ternary
let a3 = 1;
let b3 = 1;
console.log(a3 = b3 ? "yes" : "no");
