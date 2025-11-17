// Étape 6 : variable globale pour compter les citations
let quoteCount = 0;

// Étape 4 : gestionnaire d'événement sur le formulaire
const form = document.getElementById("quoteForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupération des valeurs
  const text = document.getElementById("quoteInput").value;
  const author = document.getElementById("authorInput").value;

  // Pour vérifier (étape 4)
  console.log("Citation :", text);
  console.log("Auteur / Autrice :", author);

  // Étape 5 : ajout de la citation dans la page
  addQuote(text, author);

  // On efface les champs après ajout (optionnel mais pratique)
  form.reset();
});

// Étape 5 : fonction addQuote
function addQuote(quote, author) {
  // Création des paragraphes
  const pText = document.createElement("p");
  pText.className = "text";
  pText.innerText = quote;

  const pAuthor = document.createElement("p");
  pAuthor.className = "author";
  pAuthor.innerText = author;

  // Création de la div.quote
  const quoteDiv = document.createElement("div");
  quoteDiv.className = "quote";
  quoteDiv.appendChild(pText);
  quoteDiv.appendChild(pAuthor);

  // Ajout dans quote-list
  const quoteList = document.getElementById("quote-list");
  quoteList.appendChild(quoteDiv);

  // Étape 6 : mise à jour du compteur
  quoteCount += 1;

  const counter = document.getElementById("count");
  counter.innerText = quoteCount;
}
