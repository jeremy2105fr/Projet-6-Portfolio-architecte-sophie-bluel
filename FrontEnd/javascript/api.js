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

//IA en local faraday ! https://faraday.dev/
        //127.0.0.1