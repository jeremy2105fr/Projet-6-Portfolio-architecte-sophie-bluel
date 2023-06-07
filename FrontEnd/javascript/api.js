// Permet de récupérer les données de l'API et de les afficher
export async function fetchWorksData() {
    try {
        const url = 'http://localhost:5678/api/works';
        const response = await fetch(url);

        return await response.json();
    } catch (error) {
        console.log('===> error', error);
    }
}

export async function fetchCategoriesData() {
    try {
        const url = 'http://localhost:5678/api/categories';
        const response = await fetch(url);

        return await response.json();
    } catch (error) {
        console.log('===> error', error);
    }
}