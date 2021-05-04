function Calculator() {
  ("use strict");
  let inputArray = [];
  let operations = ["x", "/", "+", "-"];
  let number = "";
  let i;
  let that = this;
  let switchDegRad = document.querySelector(".type");
  let shift = document.querySelector(".switch");
  let equation = document.querySelector(".input--head");
  let display = document.querySelector(".input");
  display.textContent = "0";

  this.add = function (a, b) {
    var c = inputArray[a] + inputArray[b];
    inputArray[a] = c;
    inputArray.splice(a + 1, 2);
    i -= 2;
  };

  this.subtract = function (a, b) {
    var c = inputArray[a] - inputArray[b];
    inputArray[a] = c;
    inputArray.splice(a + 1, 2);
    i -= 2;
  };

  this.divide = function (a, b) {
    var c = inputArray[a] / inputArray[b];
    if (isNaN(c)) {
      c = 0;
    }
    inputArray[a] = c;
    inputArray.splice(a + 1, 2);
    i -= 2;
  };

  this.multiply = function (a, b) {
    var c = inputArray[a] * inputArray[b];
    inputArray[a] = c;
    inputArray.splice(a + 1, 2);
    i -= 2;
  };

  this.equal = function () {
    for (i = 0; i < inputArray.length; i += 1) {
      if (inputArray[i] === "/") {
        that.divide(i - 1, i + 1);
      }
      if (inputArray[i] === "x") {
        that.multiply(i - 1, i + 1);
      }
    }
    for (i = 0; i < inputArray.length; i += 1) {
      if (inputArray[i] === "+") {
        that.add(i - 1, i + 1);
      }
      if (inputArray[i] === "-") {
        that.subtract(i - 1, i + 1);
      }
    }
    display.textContent = inputArray[0];
  };

  this.clear = function () {
    inputArray = [];
    number = "";
    display.textContent = "0";
    equation.textContent = "";
  };

  this.printEquation = function () {
    equation.textContent = "";
    for (i = 0; i < inputArray.length; i += 1) {
      equation.textContent += inputArray[i];
    }
  };

  switchDegRad.addEventListener("click", function () {
    if (switchDegRad.textContent == "deg") {
      this.textContent = "rad";
      console.log("radian");
    } else if (switchDegRad.textContent == "rad") {
      this.textContent = "deg";
      console.log("degrees");
    }
  });

  shift.addEventListener("click", function () {
    if (shift.textContent == "2nd") {
      this.textContent = "ON";
      this.classList.add("switch--on");
      console.log("2ND ON");
    } else if (shift.textContent == "ON") {
      this.textContent = "2nd";
      this.classList.remove("switch--on");
      console.log("2nd");
    }
  });

  this.input = function (e) {
    let input = e.target.textContent;
    console.log("input", input);
    let testInput = operations.indexOf(input) === -1 ? false : true;
    if (testInput && number === "") {
      number = "0";
    }
    if (input === "=" && inputArray.length === 0) {
      this.clear();
    } else if (input === "deg" || input === "rad") {
      display.textContent = "0";
    } else if (input === "ON" || input === "2nd") {
      display.textContent = "0";
    } else if (testInput) {
      inputArray.push(parseInt(number, 10));
      inputArray.push(input);
      number = "";
      that.printEquation();
    } else if (input === "AC") {
      that.clear();
    } else if (input === "=") {
      if (number !== "") {
        inputArray.push(parseInt(number, 10));
        number = "";
        that.printEquation();
        that.equal();
      } else {
        inputArray.pop();
        number = "";
        that.equal();
      }
    } else {
      number += input;
      display.textContent = number;
    }
  };
}

let calculator = new Calculator();
let nodes = document.querySelector(".container").childNodes;
for (let i = 0; i < nodes.length; i++) {
  if (nodes[i].nodeName.toLowerCase() === "div") {
    nodes[i].addEventListener("click", calculator.input);
  }
}

// let input = document.querySelector(".input");
// let switchDegRad = document.querySelector(".type");
// let shift = document.querySelector(".switch");
// let extent = "";

// function insert(num) {
//   if (input.textContent == 0) {
//     input.textContent = "";
//     input.textContent += num;
//   } else input.textContent += num;
// }

// switchDegRad.addEventListener("click", function () {
//   if (switchDegRad.textContent == "deg") {
//     this.textContent = "rad";
//     console.log("degrees");
//   } else if (switchDegRad.textContent == "rad") {
//     this.textContent = "deg";
//     console.log("radian");
//   }
// });

// shift.addEventListener("click", function () {
//   if (shift.textContent == "2nd") {
//     this.textContent = "ON";
//     this.classList.add("switch--on");
//     console.log("2ND ON");
//   } else if (shift.textContent == "ON") {
//     this.textContent = "2nd";
//     this.classList.remove("switch--on");
//     console.log("2nd");
//   }
// });

// function getFactorial(n) {
//   return n != 1 ? n * factorial(n - 1) : 1;
// }

// function clean() {
//   input.textContent = "0";
//   extent = "";
// }

// function back() {
//   let exp = input.textContent;
//   input.textContent = exp.substring(0, exp.length - 1);
//   if (input.textContent == 0) {
//     input.textContent = "0";
//   }
// }

// function equal() {
//   let exp = input.textContent;
//   if (input.textContent.includes("^")) {
//     let tmp = input.textContent.split("^");
//     let num = eval(extent);
//     let pow = +tmp[1];
//     input.textContent = Math.pow(num, pow);
//     extent = "";
//     return;
//   }
//   if (exp) {
//     input.textContent = eval(exp);
//   }
// }

// function operation(name) {
//   if (name == "sqrt") input.textContent = Math.sqrt(eval(input.textContent));
//   if (name == "sqr") input.textContent = Math.pow(eval(input.textContent), 2);
//   if (name == "^-1") input.textContent = Math.pow(eval(input.textContent), -1);
//   if (name == "^") {
//     extent = input.textContent;
//     input.textContent += "^";
//   }
// }

// function percent() {
//   input.textContent = eval(input.textContent) / 100;
// }

// function constant(name) {
//   if (input.textContent == 0) {
//     input.textContent = "";
//   }
//   if (name == "pi") input.textContent += Math.PI.toFixed(8);
//   if (name == "e") input.textContent += Math.E.toFixed(8);
// }

// function exp() {
//   input.textContent = Math.exp(eval(input.textContent));
// }

// function factorial() {
//   input.textContent = getFactorial(+eval(input.textContent));
// }

// function random(name) {
//   input.textContent = Math.random() * 1;
// }

// function log(name) {
//   if (name == "log") {
//     input.textContent = Math.log10(eval(input.textContent)).toFixed(8);
//   }
//   if (name == "ln") {
//     input.textContent = Math.log(eval(input.textContent)).toFixed(8);
//   }
// }

// function sinAndCos(name) {
//   if (name == "sin") {
//     if (switchDegRad.textContent == "deg") {
//       input.textContent = parseFloat(
//         Math.sin((eval(input.textContent) / 180) * Math.PI)
//           .toFixed(8)
//           .toString()
//       );
//     } else {
//       input.textContent = parseFloat(
//         Math.sin(eval(input.textContent)).toFixed(8).toString()
//       );
//     }
//   }
//   if (name == "cos") {
//     if (switchDegRad.textContent == "deg") {
//       input.textContent = parseFloat(
//         Math.cos((eval(input.textContent) / 180) * Math.PI)
//           .toFixed(8)
//           .toString()
//       );
//     } else {
//       input.textContent = parseFloat(
//         Math.cos(eval(input.textContent)).toFixed(8).toString()
//       );
//     }
//   }
//   if (name == "tan") {
//     if (switchDegRad.textContent == "deg") {
//       input.textContent = parseFloat(
//         Math.tan((eval(input.textContent) / 180) * Math.PI)
//           .toFixed(8)
//           .toString()
//       );
//     } else {
//       input.textContent = parseFloat(
//         Math.tan(eval(input.textContent)).toFixed(8).toString()
//       );
//     }
//   }
//   if (name == "ctg") {
//     if (switchDegRad.textContent == "deg") {
//       input.textContent = parseFloat(
//         1 /
//           Math.tan((eval(input.textContent) / 180) * Math.PI)
//             .toFixed(8)
//             .toString()
//       );
//     } else {
//       input.textContent = parseFloat(
//         1 / Math.tan(eval(input.textContent)).toFixed(8).toString()
//       );
//     }
//   }
// }

// function switchFunc(name) {
//   if (name == "10x")
//     if (shift.textContent == "ON") {
//       input.textContent = Math.pow(eval(10), input.textContent);
//       console.log("true");
//     }
// }
