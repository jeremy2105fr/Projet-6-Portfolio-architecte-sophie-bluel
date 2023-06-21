import { fetchWorksData, fetchCategoriesData } from './api.js';

function displayWorkCards(works, parent) {
  parent.innerHTML = '';
  return works.map(work => {
    //Déclaration div à generer dans le html
    let figure = document.createElement('figure');   // Déclaration d'une figure
    let image = document.createElement('img');   // Déclaration d'une balise img 
    let figcaption = document.createElement('figcaption');  // Déclaration d'une balise figcaption

    // Ajout
    figure.setAttribute('id',"project-" + work.id);   // Ajout de l'id de l'API work à la balise figure
    figure.setAttribute('class', 'visible');
    figcaption.textContent = work.title;   // Ajout du texte de l'API work à la balise figcaption
    image.setAttribute('src', work.imageUrl);   // Ajout de l'url de l'API work à la balise img
    // Génération

    parent.appendChild(figure);  // Génération de figure à la div gallery
    figure.appendChild(image);  // Génération de la balise img à la figre
    figure.appendChild(figcaption);   // Génération de la balise figcaption à la figure
  })
}

function displayWorkFilters(categories, parent) {
  // <div id="all" class="filtre selection"><h3>Tous</h3></div>
  return categories.map(category => {
    const div = document.createElement('div');
    div.setAttribute('id', category.id);
    div.setAttribute('class', 'filtre filter-button');
    div.innerHTML = category.name;
    parent.appendChild(div);
  });
}

async function main() {
  const galleryElement = document.querySelector('.gallery');
  const filtersElement = document.querySelector('.filters');

  const works = await fetchWorksData();
  displayWorkCards(works, galleryElement);

  const categories = await fetchCategoriesData();
  displayWorkFilters(categories, filtersElement);

  const filterButtons = document.querySelectorAll('.filter-button');

  const handleFilterButtonClick = (e) =>  {
    const data = (e.target.id === 'all') ? works : works.filter(work => work.categoryId == e.target.id);
    displayWorkCards(data, galleryElement);
  }

  for (let btn of filterButtons) {
    btn.addEventListener('click', handleFilterButtonClick)
  }
}

main();