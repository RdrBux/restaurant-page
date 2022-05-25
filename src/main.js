import Parrilla from "./img/parrilla.jpeg";

function main() {
  const container = document.createElement("div");
  container.classList = "container";

  const title = document.createElement("h1");
  title.textContent = "Rodrigo's Parrilla";

  const parrillaImg = new Image();
  parrillaImg.src = Parrilla;

  const mainText = document.createElement("p");
  mainText.textContent =
    "Rodrigo's has the best meat! The atmosphere and customer service will	make love the experience and, I assure you, you will return again and again.";

  container.appendChild(title);
  container.appendChild(parrillaImg);
  container.appendChild(mainText);

  return container;
}

export { main };
