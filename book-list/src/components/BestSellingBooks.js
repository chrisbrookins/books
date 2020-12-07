import React, {useEffect, useState} from 'react';
import {GridCell, GridWrapper} from '../styledComponents/styledComponents';
import AddBoxIcon from '@material-ui/icons/AddBox';
import {useUserBooklist} from '../hooks/useUserBookList';
import { v4 as uuidv4 } from 'uuid';



const BestSellingBooks = ({props}) => {

    const baseUrl = 'https://api.nytimes.com/svc/books/v3/lists/current/';
    const apiKey = 'JJtF4Uq4A8DPUyymXLRBQh5mrBflQKbA';
    const bestSellerList = 'hardcover-fiction.json';
    const fetchUrl = `${baseUrl}/${bestSellerList}?api-key=${apiKey}`

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [name, setName] = useState('');
    const [userBooks, setUserBooks] = useState([]);

    function handleAdd() {

    }

    // const handleClick = (book) => {
    //     setUserBooks(userBooks.push(book));
    //
    //     console.log(userBooks, 'newList');
    //     // console.log('clicked');
    // }
    // const [userBooks, addUserBook] = useState([]);

    // const useUserBooklist = (book) => {
    //     const [userBooks, addUserBook] = useState([]);
    //     console.log('click');
    //     useEffect(() => {
    //         addUserBook(book);
    //
    //     }, [book]); // Only re-run the effect if count changes
    //     console.log(userBooks)
    //     return [userBooks]
    // }
    console.log(userBooks, 'userBooks');
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
            {books.map(book => {
                return <GridCell>{book.title} <AddBoxIcon onClick={() => setUserBooks(userBooks.concat(book))} /></GridCell>
            })}
        </GridWrapper>
    ) : <div>Loading ...</div>
};

// const AddToUserBookList = (book) => {
//     const [userBooks, addUserBook] = useState([]);
//     addUserBook(book);
//     console.log(userBooks);
//     return userBooks;
// }

BestSellingBooks.defaultProps = {};

BestSellingBooks.propTypes = {};

export default BestSellingBooks;