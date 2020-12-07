import React, {useEffect, useState} from 'react';
import BestSellingBooks from './components/BestSellingBooks';
import UserBooks from './components/UserBooks';
import {FlexBoxWrap, Header1, Header2} from './styledComponents/styledComponents';

function App() {

    const baseUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/';
    const apiKey = 'JJtF4Uq4A8DPUyymXLRBQh5mrBflQKbA';
    const bestSellerList = 'hardcover-fiction.json';
    const fetchUrl = `${baseUrl}/${bestSellerList}?api-key=${apiKey}`;

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [userBooks, setUserBooks] = useState([]);

    useEffect(()=> {
        fetch(fetchUrl)
            .then(res => res.json())
            .then(response => {
                setLoading(false)
                setBooks(response.results.books)
            })
            .catch(error => {
                console.log('error')
            })
    }, [fetchUrl]);

    const addBook = (book) => {
        setUserBooks(userBooks.concat(book));
    }

    return (
        <div className="App">
            <FlexBoxWrap className="App-header">
                <div>
                    <Header1>Best Selling Books</Header1>
                    <BestSellingBooks books={books} loading={loading} addBook={addBook} />
                </div>
                <div>
                    <Header1>My Books</Header1>
                    <Header2>Click the + icon to add best sellers to your list</Header2>
                    <Header2>Click the - icon to remove best sellers from your list</Header2>
                    <UserBooks userBooks={userBooks} />
                </div>
            </FlexBoxWrap>
        </div>
    );
}

export default App;
