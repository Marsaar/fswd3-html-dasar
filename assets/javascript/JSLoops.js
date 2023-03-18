//for
var jsfor = "";
for (var i = 0; i < 10; i++){
    jsfor += "Iterasi Loop #" + i + ", "
}
document.getElementById("demo37").innerHTML = jsfor;

//do-while
var jsdowhile = "";
var i = 0;
do {
    jsdowhile += "Iterasi Loop #" + i + ", ";
    i++;
}
while (i < 10);  

document.getElementById("demo38").innerHTML = jsdowhile;

//while
var jswhile = "";
var i = 0;
while (i < 10) {
  jswhile += "Iterasi Loop #" + i + ", ";
  i++;
}
document.getElementById("demo39").innerHTML = jswhile;

//break
var jsbreak = "";
for (var i = 0; i < 10; i++) {
  if (i === 5) { break; }
  jsbreak += "Iterasi Loop #" + i + ", ";
}

document.getElementById("demo40").innerHTML = jsbreak;

//continue
var jscont = "";
for (var i = 0; i < 10; i++) {
  if (i === 4) { continue; }
  jscont += "Iterasi Loop #" + i + ", ";
}

document.getElementById("demo41").innerHTML = jscont;