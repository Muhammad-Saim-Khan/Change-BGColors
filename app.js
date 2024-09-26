let color = document.querySelector(".colors");
let changecolors = document.querySelector(".changecolors");
let body = document.querySelector("body");
let red = document.querySelector(".red");
let blue = document.querySelector(".blue");
let green = document.querySelector(".green");
let flag = 0,
  mine = 0;
color.addEventListener("click", () => {
  changecolors.style.display = flag ? "none" : "block";
  if (flag) {
    body.style.backgroundColor = "white";
    blue.style.display = "none";
    red.style.display = "none";
    green.style.display = "none";
  }
  flag = !flag;
});
changecolors.addEventListener("click", () => {
  if (mine) {
    blue.style.color = "white";
    blue.style.backgroundColor = "blue";
    red.style.color = "white";
    red.style.backgroundColor = "red";
    green.style.color = "white";
    green.style.backgroundColor = "green";
    blue.style.display = "none";
    green.style.display = "none";
    red.style.display = "none";
  } else {
    blue.style.display = "block";
    green.style.display = "block";
    red.style.display = "block";
    body.style.backgroundColor = "white";
  }
  mine = !mine;
});
[blue, red, green].forEach((color) => {
  color.addEventListener("click", () => {
    body.style.backgroundColor = color.className;
    color.style.backgroundColor = "white";
    color.style.color = color.className;
  });
});
