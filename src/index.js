let array = ["blue", "red", "black", "white", "green"];
const app = document.getElementById("app");

const longerthan2 = array.every(item => {
  return item.length > 2;
});

app.insertAdjacentHTML("beforeend", "Are all elements longer than 2 letters? " + longerthan2);
