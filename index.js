const bouttonAjouter = document.querySelector("#button-ajouter");
let bouttonCopier;
const inputTexte = document.querySelector("#content-text");
let sectionAjouts = document.querySelector("#ajouts");
let sectionCopies = document.querySelector("#copies");

const functionAjouter = function () {
  const bscolors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark"
  ];

  let alert = document.createElement("div");
  alert.setAttribute(
    "class",
    `alert alert-${
      bscolors[Math.round(Math.random() * (bscolors.length - 1))]
    } d-flex justify-content-between my-3 align-items-center fs-3`
  );

  alert.setAttribute("role", "alert");

  if ("" !== inputTexte.value) {
    let alertTexteNode = document.createTextNode(inputTexte.value);
    let bouttonCopier = document.createElement("button");
    let buttonCaption = document.createTextNode("Copier");
    bouttonCopier.appendChild(buttonCaption);
    bouttonCopier.setAttribute("class", "btn btn-outline-primary");
    bouttonCopier.addEventListener("click", functionCopier);
    alert.appendChild(alertTexteNode);
    alert.appendChild(bouttonCopier);
    sectionAjouts.appendChild(alert);
  }
  inputTexte.value = "";
};

const functionCopier = function () {
  let copie = document.createElement("div");
  let parentClassName = this.parentNode.classList.value;
  let parentInnerText = document.createTextNode(
    this.parentNode.childNodes.item(0).nodeValue
  );
  let badgeCopie = document.createElement("h6");
  let messageSuccessOnCopy = document.createTextNode("Copied successfully");

  badgeCopie.setAttribute("class", "badge text-bg-success");
  badgeCopie.appendChild(messageSuccessOnCopy);
  copie.setAttribute("class", parentClassName);
  copie.appendChild(parentInnerText);
  copie.appendChild(badgeCopie);
  sectionCopies.appendChild(copie);
};

bouttonAjouter.addEventListener("click", functionAjouter);
