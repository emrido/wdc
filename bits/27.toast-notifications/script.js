const button = document.getElementById("button");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
  "Message Five",
  "Message Six",
];

button.addEventListener("click", () => createNotification());

function createNotification(message = null, type = null) {
  let toast = document.createElement("div");
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];

  toast.classList.add("toast");
  toast.innerText = randomMessage;
  toasts.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}
