// mean for A
var a = []; 
var sumA = 0;
for (var i = 0; i < a.length; i++) {
  sumA += a[i];
}
var x = sumA / a.length;
console.log("Mean of A (x): " + x);

// mean for B
var b = []; 
var sumB = 0;
for (var i = 0; i < b.length; i++) {
  sumB += b[i];
}
var y = sumB / b.length;
console.log("Mean of B (y): " + y);

// mean for C
var c = []; 
var sumC = 0;
for (var i = 0; i < c.length; i++) {
  sumC += c[i];
}
var z = sumC / c.length;
console.log("Mean of C (z): " + z);



function calculateArithmetic(x, y) {
    if (x === "LOW" && y === "LOW") {
        return "LOW";
    } else if (x === "Low" && y === "Medium") {
        return "low";
    } else if (x === "Medium" && y === "Low") {
        return "medium";
    } else if (x === "Medium" && y === "Medium") {
        return "Medium";
    } else if (x === "Medium" && y === "High") {
        return "medium";
    } else if (x === "High" && y === "Medium") {
        return "medium";
    } else if (x === "High" && y === "High") {
        return "medium";
    } else if (x === "Low" && y === "High") {
        return "low";
    } else if (x === "High" && y === "Low") {
        return "high";
    }
}

var x = "Medium";
var y = "Low";
var result = calculateArithmetic(x, y);
console.log(result); // Output: medium
