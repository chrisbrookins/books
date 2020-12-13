import React, {useEffect, useState} from 'react';
import {FlexBoxWrap, Header1, Header2, GridCell, GridWrapper} from './styledComponents/styledComponents';
import AddBoxIcon from '@material-ui/icons/AddBox';

function App() {
    const baseUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/';
    const apiKey = 'JJtF4Uq4A8DPUyymXLRBQh5mrBflQKbA';
    const bestSellerList = 'hardcover-fiction.json';
    const fetchUrl = `${baseUrl}/${bestSellerList}?api-key=${apiKey}`;

    const [book, setBook] = useState("");
    const [loading, setLoading] = useState(true);
    const [books, setBooks] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);

    useEffect(()=> {
        fetch(fetchUrl)
            .then(res => res.json())
            .then(response => {
                setLoading(false)
                setBestSellers(response.results.books)
            })
            .catch(error => {
                console.log('error')
            })
    }, [fetchUrl]);

    const addBook = book => {
        setBooks(books.concat(book));
    };

    const removeBook = bookTitle => {
        const updatedBooks = books.filter(book => book.title !== bookTitle);
        setBooks(updatedBooks);
    };

    return !loading ? (
        <FlexBoxWrap>
            <div>
                <Header1>Best Selling Books</Header1>
                <GridWrapper>
                    {bestSellers.map(bestSeller => (
                        <GridCell key={bestSeller.title}>
                            <span>
                                {bestSeller.title} <AddBoxIcon onClick={() => addBook(bestSeller)} />
                            </span>
                        </GridCell>
                    ))}
                </GridWrapper>
            </div>
            <div>
                <Header1>My Books</Header1>
                <Header2>Click the + icon to add best sellers to your list</Header2>
                <Header2>Click the - icon to remove best sellers from your list</Header2>
                {books.map(book => (
                    <GridWrapper>
                        <GridCell key={book.title}>
                            {book.title}
                            <span className="delete-btn" onClick={() => removeBook(book.title)}> x</span>
                        </GridCell>
                    </GridWrapper>
                ))}
            </div>
        </FlexBoxWrap>
    ) : <div>Loading ...</div>;
}

export default App;
