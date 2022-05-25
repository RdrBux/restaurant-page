function menu() {
  const container = document.createElement("div");
  container.classList = "container";

  const title = document.createElement("h1");
  title.textContent = "Menu";

  const mainDishes = document.createElement("h2");
  mainDishes.textContent = "Main Dishes";

  const mainDishesContent = document.createElement("p");
  mainDishesContent.textContent = `
	- Meat 1
	- Meat 2
	- Meat 3
	- Meat 4
	`;

  /////////

  const sides = document.createElement("h2");
  sides.textContent = "Sides";

  const sidesContent = document.createElement("p");
  sidesContent.textContent = `
	- Side 1
	- Side 2
	- Side 3
	`;

  /////////

  const beverages = document.createElement("h2");
  beverages.textContent = "Beverages";

  const beveragesContent = document.createElement("p");
  beveragesContent.textContent = `
	- Beverage 1
	- Beverage 2
	- Beverage 3
	- Beverage 4
	`;

  container.appendChild(title);
  container.appendChild(mainDishes);
  container.appendChild(mainDishesContent);
  container.appendChild(sides);
  container.appendChild(sidesContent);
  container.appendChild(beverages);
  container.appendChild(beveragesContent);

  return container;
}

export { menu };
