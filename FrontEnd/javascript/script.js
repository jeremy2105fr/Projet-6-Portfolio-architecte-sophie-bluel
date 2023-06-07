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

      console.log(data);// Verifie que les données sont bien récupérées sur la console

      showGallery(data); // Affiche les images et le texte de l'API work
    })
  }
  loadData(); // Appel de la fonction loadData

 });

 const gallery = document.querySelector('.gallery');
   // Gestion des filtres

 // Functions 
 // Affiche les images de l'API work
 function showGallery(data) {
  gallery.innerHTML = '';// Suppression du contenu de la div gallery
  
  let worksID = data.map(work => work.id);// Récupération de l'id de l'API work
  let worksTitle = data.map(work => work.title);// Récuperation du texte de l'API work
  let worksImageLink = data.map(work => work.imageUrl);// Récuperation du texte des images de l'API work
  let worksCategory = data.map(work => work.categoryID);// Récuperation de la catégorie de l'API work
  

  const filterAll = document.getElementById('all');// Récupération de l'id all
  const filterObjets = document.getElementById('objets');// Récupération de l'id objets
  const filterAppartements = document.getElementById('appartements');// Récupération de l'id appartements
  const filterHotelsAndRestaurants = document.getElementById('hotels_restaurants');// Récupération de l'id hotels-and-restaurants
  let filter = 0; // Déclaration de la variable filter

  //Filtre Tous
  filterAll.addEventListener('click', function(event) {
  gallery.innerHTML = '';
  console.log("filtre Tous cliqué");
  gallery.innerHTML = '';
  filter = 0;
  showAllGallery();
  });

  //Filtre Objets
  filterObjets.addEventListener('click', function(event) {
  console.log("filtre Objets cliqué");
  filter = 1;
  hiddenGalleryItems();
  });
  //Filtre Appartements
  filterAppartements.addEventListener('click', function(event) { 
    console.log("filtre Appartements cliqué");
    filter = 2;
    return filter;
  });
  //Filtre Hotels et Restaurants
  filterHotelsAndRestaurants.addEventListener('click', function(event) {
    console.log("filtre Hotels et Restaurants cliqué");
    filter = 3;
    return filter;
  });
    

  function showAllGallery() {
    for(let i = 0; i < worksID.length; i++) {
    
      //Déclaration div à generer dans le html
        let figure = document.createElement('figure');   // Déclaration d'une figure
        let image = document.createElement('img');   // Déclaration d'une balise img 
        let figcaption = document.createElement('figcaption');  // Déclaration d'une balise figcaption
    
        // Ajout
        figure.setAttribute('id',"project-" + worksID[i]);   // Ajout de l'id de l'API work à la balise figure
        figure.setAttribute('class', 'visible');
        figcaption.textContent = worksTitle[i];   // Ajout du texte de l'API work à la balise figcaption
        image.setAttribute('src', worksImageLink[i]);   // Ajout de l'url de l'API work à la balise img
        // Génération

        gallery.appendChild(figure);  // Génération de figure à la div gallery
        figure.appendChild(image);  // Génération de la balise img à la figre
        figure.appendChild(figcaption);   // Génération de la balise figcaption à la figure
      }
  }

  function hiddenGalleryItems() {
  let figure = document.createElement('figure');
  if(filter === worksCategory) {
    figure.setAttribute('class', 'visible');
  } else {
    figure.setAttribute('class', 'hidden');
  }
  }
  showAllGallery();

  }
 
  



  