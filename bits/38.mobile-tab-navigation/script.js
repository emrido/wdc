const contents = document.querySelectorAll(".content");
const buttons = document.querySelectorAll("li");

buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    hideAllContents();
    hideAllButtons();

    button.classList.add("active");
    contents[idx].classList.add("show");
  });
});

const hideAllContents = () => {
  contents.forEach((content) => content.classList.remove("show"));
};

const hideAllButtons = () => {
  buttons.forEach((button) => button.classList.remove("active"));
};
