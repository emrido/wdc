const password = document.getElementById("password");
const background = document.getElementById("background");

password.addEventListener("input", (e) => {
  const passLength = e.target.value.length;
  background.style.filter = `blur(${20 - passLength * 2}px)`;
});
