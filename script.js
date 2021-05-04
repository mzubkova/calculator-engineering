let input = document.querySelector(".input");
let switchDegRad = document.querySelector(".type");
let shift = document.querySelector(".switch");
let extent = "";

function insert(num) {
  if (input.textContent == 0) {
    input.textContent = "";
    input.textContent += num;
  } else input.textContent += num;
}

switchDegRad.addEventListener("click", function () {
  if (switchDegRad.textContent == "deg") {
    this.textContent = "rad";
    console.log("degrees");
  } else if (switchDegRad.textContent == "rad") {
    this.textContent = "deg";
    console.log("radian");
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

function getFactorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

function clean() {
  input.textContent = "0";
  extent = "";
}

function back() {
  let exp = input.textContent;
  input.textContent = exp.substring(0, exp.length - 1);
  if (input.textContent == 0) {
    input.textContent = "0";
  }
}

function equal() {
  let exp = input.textContent;
  if (input.textContent.includes("^")) {
    let tmp = input.textContent.split("^");
    let num = eval(extent);
    let pow = +tmp[1];
    input.textContent = Math.pow(num, pow);
    extent = "";
    return;
  }
  if (exp) {
    input.textContent = eval(exp);
  }
}

function operation(name) {
  if (name == "sqrt") input.textContent = Math.sqrt(eval(input.textContent));
  if (name == "sqr") input.textContent = Math.pow(eval(input.textContent), 2);
  if (name == "^-1") input.textContent = Math.pow(eval(input.textContent), -1);
  if (name == "^") {
    extent = input.textContent;
    input.textContent += "^";
  }
}

function percent() {
  input.textContent = eval(input.textContent) / 100;
}

function constant(name) {
  if (input.textContent == 0) {
    input.textContent = "";
  }
  if (name == "pi") input.textContent += Math.PI.toFixed(8);
  if (name == "e") input.textContent += Math.E.toFixed(8);
}

function exp() {
  input.textContent = Math.exp(eval(input.textContent));
}

function factorial() {
  input.textContent = getFactorial(+eval(input.textContent));
}

function random(name) {
  input.textContent = Math.random() * 1;
}

function log(name) {
  if (name == "log") {
    input.textContent = Math.log10(eval(input.textContent)).toFixed(8);
  }
  if (name == "ln") {
    input.textContent = Math.log(eval(input.textContent)).toFixed(8);
  }
}

function sinAndCos(name) {
  if (name == "sin") {
    if (switchDegRad.textContent == "deg") {
      input.textContent = parseFloat(
        Math.sin((eval(input.textContent) / 180) * Math.PI)
          .toFixed(8)
          .toString()
      );
    } else {
      input.textContent = parseFloat(
        Math.sin(eval(input.textContent)).toFixed(8).toString()
      );
    }
  }
  if (name == "cos") {
    if (switchDegRad.textContent == "deg") {
      input.textContent = parseFloat(
        Math.cos((eval(input.textContent) / 180) * Math.PI)
          .toFixed(8)
          .toString()
      );
    } else {
      input.textContent = parseFloat(
        Math.cos(eval(input.textContent)).toFixed(8).toString()
      );
    }
  }
  if (name == "tan") {
    if (switchDegRad.textContent == "deg") {
      input.textContent = parseFloat(
        Math.tan((eval(input.textContent) / 180) * Math.PI)
          .toFixed(8)
          .toString()
      );
    } else {
      input.textContent = parseFloat(
        Math.tan(eval(input.textContent)).toFixed(8).toString()
      );
    }
  }
  if (name == "ctg") {
    if (switchDegRad.textContent == "deg") {
      input.textContent = parseFloat(
        1 /
          Math.tan((eval(input.textContent) / 180) * Math.PI)
            .toFixed(8)
            .toString()
      );
    } else {
      input.textContent = parseFloat(
        1 / Math.tan(eval(input.textContent)).toFixed(8).toString()
      );
    }
  }
}

function switchFunc(name) {
  if (name == "10x")
    if (shift.textContent == "ON") {
      input.textContent = Math.pow(eval(10), input.textContent);
      console.log("true");
    }
}
