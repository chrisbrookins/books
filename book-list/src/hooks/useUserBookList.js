import { useState, useEffect } from 'react';

export const useUserBooklist = (book) => {
    const [userBooks, addUserBook] = useState([]);
    console.log('click');
    useEffect(() => {
        addUserBook(book);

    }, [book]); // Only re-run the effect if count changes
    console.log(userBooks)
    return [userBooks]
}