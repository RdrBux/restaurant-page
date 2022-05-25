import { main } from "./main";
import { menu } from "./menu";
import { contact } from "./contact";
import "./style.css";

const content = document.getElementById("content");

content.appendChild(nav());

content.appendChild(main());

function nav() {
  const navigation = document.createElement("div");
  navigation.classList = "nav";

  const ulist = document.createElement("ul");
  const li1 = document.createElement("li");
  const btnHome = document.createElement("button");
  btnHome.textContent = "Home";
  btnHome.addEventListener("click", () => {
    content.removeChild(content.lastChild);
    content.appendChild(main());
  });
  li1.appendChild(btnHome);

  const li2 = document.createElement("li");
  const btnMenu = document.createElement("button");
  btnMenu.textContent = "Menu";
  btnMenu.addEventListener("click", () => {
    content.removeChild(content.lastChild);
    content.appendChild(menu());
  });
  li2.appendChild(btnMenu);

  const li3 = document.createElement("li");
  const btnContact = document.createElement("button");
  btnContact.textContent = "Contact";
  btnContact.addEventListener("click", () => {
    content.removeChild(content.lastChild);
    content.appendChild(contact());
  });
  li3.appendChild(btnContact);

  ulist.appendChild(li1);
  ulist.appendChild(li2);
  ulist.appendChild(li3);

  navigation.appendChild(ulist);

  return navigation;
}
