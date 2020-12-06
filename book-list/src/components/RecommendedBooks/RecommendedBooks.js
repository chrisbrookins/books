import React from 'react';
import PropTypes from 'prop-types';
import {getRecommendedBooks, getSomeBooks} from '../../_services/getBooks';

const RecommendedBooks = ({props}) => {
    const getBooks = getSomeBooks();
    console.log(getBooks);
    return (
        <div>Start Here</div>
    )
};

RecommendedBooks.defaultProps = {};

RecommendedBooks.propTypes = {};

export default RecommendedBooks;