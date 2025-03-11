function ChangebackgroundColor(color) {
  document.body.style.backgroundColor = color;
}

const theme = document.getElementById("theme");

theme.addEventListener("click", () => {
  console.log(document.body.style.backgroundColor);

  const currentColor = document.body.style.backgroundColor;
  if (!currentColor || currentColor === "white") {
    document.body.style.backgroundColor = "black";
  } else {
    document.body.style.backgroundColor = "white";
  }
});
