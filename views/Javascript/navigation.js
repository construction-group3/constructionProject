// const headerContent = [
//   {
//     tag: "a",
//   },
// ];

const navContent = [
  {
    id: "captureNewProject",
    link: "./newClientForm.html",
    text: "Capture",
  },
  {
    id: "projects",
    link: "./projects.html",
    text: "Projects",
  },
  {
    id: "Invoice",
    link: "./Invoices.html",
    text: "Invoice",
  },
  {
    id: "teams",
    link: "./teams.html",
    text: "teams",
  },
];

const header = document.getElementsByTagName("header")[0];

const displayHeader = () => {
  generateLogo();
  generateNav(navContent);
  generateSignOutBtn();
  generateMenuIcon();
  toggleNav();
};

const generateAnchorTag = (link, text) => {
  const anchor = document.createElement("a");
  anchor.setAttribute("href", link);
  const linkText = document.createTextNode(text);
  anchor.appendChild(linkText);
  return anchor;
};

const generateLogo = () => {
  const anchor = document.createElement("a");
  anchor.setAttribute("href", "./landing.html");
  const logo = document.createElement("img");
  logo.setAttribute("src", "logo.png");
  logo.setAttribute("alt", "logo");
  logo.setAttribute("width", "70px");
  logo.setAttribute("height", "70px");

  anchor.appendChild(logo);
  header.insertAdjacentElement("beforeend", anchor);
};

const generateNav = (navContent) => {
  const nav = document.createElement("nav");
  const ul = document.createElement("ul");
  ul.setAttribute("id", "captureNewProject");
  ul.classList.add("navigationList");
  ul.classList.add("toggle");

  navContent.forEach((liContent) => {
    const li = document.createElement("li");
    li.setAttribute("id", liContent.id);

    const a = generateAnchorTag(liContent.link, liContent.text);
    li.insertAdjacentElement("beforeend", a);
    ul.insertAdjacentElement("beforeend", li);
  });
  const closeMenu = document.createElement("i");
  const menuContent = document.createTextNode("close");
  closeMenu.appendChild(menuContent);
  closeMenu.classList.add("material-symbols-outlined");
  closeMenu.classList.add("close");

  ul.insertAdjacentElement("beforeend", closeMenu);
  nav.insertAdjacentElement("beforeend", ul);
  header.insertAdjacentElement("beforeend", nav);
};

const generateSignOutBtn = () => {
  const anchor = document.createElement("a");
  anchor.setAttribute("href", "./Login.html");

  const button = document.createElement("button");
  button.setAttribute("id", "signout-btn");
  button.classList.add("secondaryButton");
  button.classList.add("button");
  const buttonText = document.createTextNode("Sign out");
  button.appendChild(buttonText);
  anchor.appendChild(button);
  header.insertAdjacentElement("beforeend", anchor);
};

const generateMenuIcon = () => {
  const closeMenu = document.createElement("i");
  const menuContent = document.createTextNode("menu");
  closeMenu.appendChild(menuContent);
  closeMenu.classList.add("material-symbols-outlined");
  closeMenu.classList.add("menu");

  header.insertAdjacentElement("beforeend", closeMenu);
};

// const navButtons = Array.from(
//   document.getElementsByClassName("material-symbols-outlined")
// );

const toggleNav = () => {
  const navButtons = Array.from(
    document.getElementsByClassName("material-symbols-outlined")
  );
  console.log(navButtons);
  const navList = document.getElementsByClassName("navigationList")[0];

  navButtons.forEach((button) => {
    button.addEventListener("click", () => {
      navList.classList.toggle("toggle");
    });
  });
};

window.onload = displayHeader();
