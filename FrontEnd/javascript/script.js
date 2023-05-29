// Attente du chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
  // Permet de récupérer les données de l'API et de les afficher
  function loadData() {
  const url = 'http://localhost:5678/api/works';
  // Utilisation de fetch pour récupérer les données de l'API work
  fetch(url, {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    }
  })
  // Utilisation de then pour récupérer les données au format json
  .then(response => response.json())
  // Utilisation de then pour afficher les données dans la console
  .then(data => {
    console.log(data);
    showGallery(data); // Affiche les images et le texte de l'API work
  })
}
loadData();
});  

// Affiche les images de l'API work
function showGallery(data){
  
  const gallery = document.querySelector('.gallery');// Récupération de la div gallery
  gallery.innerHTML = '';// Suppression du contenu de la div gallery
  
  let worlksID = data.map(work => work.id);// Récupération de l'id de l'API work
  let worksTitle = data.map(work => work.title);// Récuperation du texte de l'API work
  let worksImageLink = data.map(work => work.imageUrl);// Récuperation du texte des images de l'API work
  
  for(let i = 0; i < worlksID.length; i++) {
    //Déclaration
    let figure = document.createElement('figure');   // Déclaration d'une figure
    let image = document.createElement('img');   // Déclaration d'une balise img 
    let figcaption = document.createElement('figcaption');  // Déclaration d'une balise figcaption
    // Ajout
    figure.setAttribute('id', worlksID[i]);   // Ajout de l'id de l'API work à la balise figure
    figcaption.textContent = worksTitle[i];   // Ajout du texte de l'API work à la balise figcaption
    image.setAttribute('src', worksImageLink[i]);   // Ajout de l'url de l'API work à la balise img
    // Génération
    gallery.appendChild(figure);  // Génération de figure à la div gallery
    figure.appendChild(image);  // Génération de la balise img à la div
    figure.appendChild(figcaption);   // Génération de la balise figcaption à la div
  }
}
