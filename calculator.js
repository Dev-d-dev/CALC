const screen = document.getElementById("screen");

function getData(myBtn) {
  let val = myBtn.value;
  screen.value += val;
}

function clean() {
  screen.value = "";
}

function calculate() {
  try {
    screen.value = eval(screen.value);
  } catch {
    screen.value = "Error";
    setTimeout(function clear() {
      screen.value = "";
    }, 500);
  }
}
