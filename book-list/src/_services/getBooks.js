const baseUrl = 'https://www.googleapis.com/books/v1';

let options = {
    headers: {
        'Authorization': 'Bearer '
    }
}

export function getRecommendedBooks() {
    let url = `${baseUrl}/volumes/recommended`;

    const error = new Error();

    return fetch(url, options)
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