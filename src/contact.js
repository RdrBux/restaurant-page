function contact() {
  const container = document.createElement("div");
  container.classList = "container";

  const title = document.createElement("h1");
  title.textContent = "Contact Us";

  const phoneNum = document.createElement("h3");
  phoneNum.textContent = "Phone number:";
  const phoneText = document.createElement("p");
  phoneText.textContent = "XXX-XXX-XXXX";

  const email = document.createElement("h3");
  email.textContent = "E-mail:";
  const emailText = document.createElement("p");
  emailText.textContent = "contact@rodrigosparrilla.com";

  const address = document.createElement("h3");
  address.textContent = "Address:";
  const addressText = document.createElement("p");
  addressText.textContent = "Fake Street 123";

  container.appendChild(title);
  container.appendChild(phoneNum);
  container.appendChild(phoneText);
  container.appendChild(email);
  container.appendChild(emailText);
  container.appendChild(address);
  container.appendChild(addressText);

  return container;
}

export { contact };
