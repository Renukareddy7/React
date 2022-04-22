let color = {
  V: ["Violet", "#9400D3"],
  I: ["Indigo", "#4B0082"],
  B: ["Blue", "#0000FF"],
  G: ["Green", "#00FF00"],
  Y: ["Yellow", "#FFFF00"],
  O: ["Orange", "#FF7F00"],
  R: ["Red", "#FF0000"],
};
let normal = {
  Violet: "V",
  Indigo: "I",
  Blue: "B",
  Green: "G",
  Yellow: "Y",
  Orange: "O",
  Red: "R",
};

document.querySelectorAll(".rainbow-colors").forEach(x => {
  x.addEventListener("mouseover", () => {
    let text = x.innerText;
    x.style.backgroundColor = `${color[text][1]}`;
    x.innerText = `${color[text][0]}`;
  });
  x.addEventListener("mouseout", () => {
    let text = x.innerText;
    x.style.backgroundColor = `white`;
    x.innerText = `${normal[text]}`;
  });
});
