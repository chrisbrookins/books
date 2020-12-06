const baseUrl = 'https://www.googleapis.com/books/v1';


const apiKey = 'JJtF4Uq4A8DPUyymXLRBQh5mrBflQKbA';
const bookList = 'hardcover-fiction.json';




const searchTerms = 'fantasy';

let options = {
    headers: {
        'Authorization': 'Bearer ' + apiKey
    }
}
//https://www.googleapis.com/books/v1/volumes?q=search-terms&key=your-API-key

export function getSomeBooks() {
    const nytURL = `https://api.nytimes.com/svc/books/v3/lists/current/${bookList}?api-key=${apiKey}`
    const error = new Error();

    return fetch(nytURL)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                error.message = `Error getting recommended books`;
                throw error;
            }
        })
        .then((response) => {
            return response || {};
        })
}