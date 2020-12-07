import React, {useEffect, useState} from 'react';
import {GridCell, GridWrapper} from '../styledComponents/styledComponents';

const BestSellingBooks = ({props}) => {

    const baseUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/';
    const apiKey = 'JJtF4Uq4A8DPUyymXLRBQh5mrBflQKbA';
    const bestSellerList = 'hardcover-fiction.json';
    const fetchUrl = `${baseUrl}/${bestSellerList}?api-key=${apiKey}`

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

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

    return !loading ? (
        <GridWrapper>
            {books.map(book => (
                <GridCell>{book.title}</GridCell>
            ))}
        </GridWrapper>
    ) :<div>Loading ...</div>
};

BestSellingBooks.defaultProps = {};

BestSellingBooks.propTypes = {};

export default BestSellingBooks;