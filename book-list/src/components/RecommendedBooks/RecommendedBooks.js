import React from 'react';
import PropTypes from 'prop-types';
import {getRecommendedBooks} from '../../_services/getBooks';

const RecommendedBooks = ({props}) => {
    const getBooks = getRecommendedBooks();
    console.log(getBooks);
    return (
        <div>Start Here</div>
    )
};

RecommendedBooks.defaultProps = {};

RecommendedBooks.propTypes = {};

export default RecommendedBooks;