import { useState, useEffect } from 'react';

export const useUserBooklist = () => {
    const [userBooks, setUserBooks] = useState([]);
    console.log(userBooks, 'userBooks');
    // useEffect(()=>{
    //     setUserBooks(userBooks)
    // }, [userBooks])
    // return [userBooks, setUserBooks]
}