document.querySelector(".input > input").addEventListener("change", (e) => {
  const { value } = e.target;
  document.querySelector(".slider").style.width = `${value}%`;
});

document.querySelector(".slider").addEventListener("click", (e) => {
  const parent = e.target.parentElement;
  const current = e.target;

  const pw = parent.clientWidth;
  const cw = current.clientWidth + 4;
  document.querySelector(".input > input").value = Math.floor((cw / pw) * 100);
});
