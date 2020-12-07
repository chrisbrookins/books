import {GridCell, GridWrapper} from '../styledComponents/styledComponents';
import React from 'react';

const UserBooks = ({userBooks}) => {
    return (
        <GridWrapper>
            {userBooks.map(book => {
                return <GridCell>{book.title}</GridCell>
            })}
        </GridWrapper>
    );
}

export default UserBooks;