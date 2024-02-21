document.getElementById("calculateBtn").addEventListener("click", function () {
  const figure = document.getElementById("figure").value;
  let area = 0,
    side = 0,
    perimeter = 0;

  if (figure === "triangle") {
    let base = parseFloat(document.getElementById("triangleBase").value);
    let height = parseFloat(document.getElementById("triangleHeight").value);
    area = 0.5 * base * height;
    perimeter =
      base + 2 * Math.sqrt(Math.pow(base / 2, 2) + Math.pow(height, 2));
  } else if (figure === "rectangle") {
    let length = parseFloat(document.getElementById("rectangleLength").value);
    let width = parseFloat(document.getElementById("rectangleWidth").value);
    area = length * width;
    perimeter = 2 * (length + width);
  } else if (figure === "circle") {
    let radius = parseFloat(document.getElementById("circleRadius").value);
    area = Math.PI * radius * radius;
    perimeter = 2 * Math.PI * radius;
  } else if (figure === "square") {
    side = parseFloat(document.getElementById("squareSide").value);
    area = side * side;
    perimeter = 4 * side;
  }

  document.getElementById("result").style.display = "block";
  document.getElementById("area").innerText = "Area: " + area.toFixed(2);
  document.getElementById("perimeter").innerText =
    "Perimeter: " + perimeter.toFixed(2);
});

document.getElementById("figure").addEventListener("change", function () {
  document.querySelectorAll(".fields").forEach(function (div) {
    div.style.display = "none";
  });
  let selectedFigure = document.getElementById("figure").value;
  document.getElementById(selectedFigure + "Fields").style.display = "block";
});
